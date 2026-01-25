import prisma from "../prisma.js";

/**
 * User Service - Handles user profile and activity tracking
 */

// -----------------------------------------------------------------------------
// GET USER PROFILE with stats
// -----------------------------------------------------------------------------
export async function getUserProfile(userId) {
    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: {
            id: true,
            name: true,
            email: true,
            createdAt: true,
        },
    });

    if (!user) {
        throw new Error("User not found");
    }

    // Get interaction stats
    const [viewCount, compareCount, redirectCount] = await Promise.all([
        prisma.userApiInteraction.count({
            where: { userId, type: "VIEW" },
        }),
        prisma.userApiInteraction.count({
            where: { userId, type: "COMPARE" },
        }),
        prisma.userApiInteraction.count({
            where: { userId, type: "REDIRECT" },
        }),
    ]);

    // Get most used APIs
    const topApis = await prisma.userApiInteraction.groupBy({
        by: ["apiId"],
        where: { userId },
        _count: { apiId: true },
        orderBy: { _count: { apiId: "desc" } },
        take: 5,
    });

    // Fetch API details for top APIs
    let topApisWithDetails = [];
    if (topApis.length > 0) {
        const apiIds = topApis.map((t) => t.apiId);
        const apis = await prisma.api.findMany({
            where: { id: { in: apiIds } },
            select: { id: true, name: true, slug: true },
        });

        topApisWithDetails = topApis.map((t) => {
            const api = apis.find((a) => a.id === t.apiId);
            return {
                apiId: t.apiId,
                apiName: api?.name || "Unknown",
                apiSlug: api?.slug,
                interactionCount: t._count.apiId,
            };
        });
    }

    return {
        ...user,
        stats: {
            totalViews: viewCount,
            totalCompares: compareCount,
            totalRedirects: redirectCount,
        },
        topApis: topApisWithDetails,
    };
}

// -----------------------------------------------------------------------------
// TRACK USER INTERACTION
// -----------------------------------------------------------------------------
export async function trackInteraction(userId, apiId, type) {
    // Validate type
    const validTypes = ["VIEW", "COMPARE", "REDIRECT"];
    if (!validTypes.includes(type.toUpperCase())) {
        throw new Error("Invalid interaction type");
    }

    // Create interaction record
    const interaction = await prisma.userApiInteraction.create({
        data: {
            userId,
            apiId,
            type: type.toUpperCase(),
        },
    });

    return interaction;
}

// -----------------------------------------------------------------------------
// GET RECENT ACTIVITY
// -----------------------------------------------------------------------------
export async function getRecentActivity(userId, limit = 20) {
    const activities = await prisma.userApiInteraction.findMany({
        where: { userId },
        orderBy: { createdAt: "desc" },
        take: limit,
        include: {
            api: {
                select: {
                    id: true,
                    name: true,
                    slug: true,
                    provider: { select: { name: true } },
                },
            },
        },
    });

    return activities.map((a) => ({
        id: a.id,
        type: a.type,
        createdAt: a.createdAt,
        api: {
            id: a.api.id,
            name: a.api.name,
            slug: a.api.slug,
            provider: a.api.provider.name,
        },
    }));
}

// -----------------------------------------------------------------------------
// GET API USAGE STATS (for profile page)
// -----------------------------------------------------------------------------
export async function getApiUsageStats(userId) {
    // Get APIs user has interacted with, grouped by API with counts
    const usage = await prisma.userApiInteraction.groupBy({
        by: ["apiId"],
        where: { userId },
        _count: { apiId: true },
        _max: { createdAt: true },
    });

    if (usage.length === 0) {
        return [];
    }

    // Fetch API details
    const apiIds = usage.map((u) => u.apiId);
    const apis = await prisma.api.findMany({
        where: { id: { in: apiIds } },
        select: { id: true, name: true, slug: true },
    });

    return usage.map((u) => {
        const api = apis.find((a) => a.id === u.apiId);
        return {
            apiId: u.apiId,
            apiName: api?.name || "Unknown",
            apiSlug: api?.slug,
            totalCalls: u._count.apiId,
            lastUsed: u._max.createdAt,
        };
    }).sort((a, b) => b.totalCalls - a.totalCalls);
}
