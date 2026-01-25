import prisma from "../prisma.js";

/**
 * API Service - Handles all API-related database operations
 */

// -----------------------------------------------------------------------------
// GET ALL APIs with filters
// -----------------------------------------------------------------------------
export async function getAllApis({ search, category, pricingType, authType, page = 1, limit = 20 }) {
    const where = {
        isActive: true,
    };

    // Search by name or description
    if (search) {
        where.OR = [
            { name: { contains: search, mode: "insensitive" } },
            { description: { contains: search, mode: "insensitive" } },
        ];
    }

    // Filter by category slug
    if (category && category !== "all") {
        where.category = { slug: category.toLowerCase() };
    }

    // Filter by pricing type
    if (pricingType) {
        where.pricingType = pricingType.toUpperCase();
    }

    // Filter by auth type
    if (authType) {
        where.authType = authType.toUpperCase();
    }

    const skip = (page - 1) * limit;

    const [apis, total] = await Promise.all([
        prisma.api.findMany({
            where,
            include: {
                provider: { select: { id: true, name: true, website: true } },
                category: { select: { id: true, name: true, slug: true, icon: true } },
            },
            orderBy: [{ popularityScore: "desc" }, { name: "asc" }],
            skip,
            take: limit,
        }),
        prisma.api.count({ where }),
    ]);

    return {
        apis,
        pagination: {
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit),
        },
    };
}

// -----------------------------------------------------------------------------
// GET SINGLE API by ID or slug
// -----------------------------------------------------------------------------
export async function getApiById(idOrSlug) {
    const api = await prisma.api.findFirst({
        where: {
            OR: [{ id: idOrSlug }, { slug: idOrSlug }],
            isActive: true,
        },
        include: {
            provider: true,
            category: true,
            endpoints: {
                orderBy: { path: "asc" },
            },
        },
    });

    return api;
}

// -----------------------------------------------------------------------------
// COMPARE APIs
// -----------------------------------------------------------------------------
export async function compareApis(ids) {
    if (!ids || ids.length < 2 || ids.length > 3) {
        throw new Error("Please provide 2-3 API IDs for comparison");
    }

    const apis = await prisma.api.findMany({
        where: {
            id: { in: ids },
            isActive: true,
        },
        include: {
            provider: { select: { id: true, name: true, website: true } },
            category: { select: { id: true, name: true, slug: true } },
            endpoints: { select: { id: true, path: true, method: true } },
        },
    });

    if (apis.length !== ids.length) {
        throw new Error("One or more APIs not found");
    }

    // Build comparison structure
    const comparison = apis.map((api) => ({
        id: api.id,
        name: api.name,
        provider: api.provider.name,
        category: api.category.name,
        pricingType: api.pricingType,
        pricingDetails: api.pricingDetails,
        authType: api.authType,
        rateLimit: api.rateLimit,
        hasFreeTier: api.hasFreeTier,
        reliabilityScore: api.reliabilityScore,
        features: api.features,
        endpointCount: api.endpoints.length,
        docsUrl: api.docsUrl,
    }));

    return comparison;
}

// -----------------------------------------------------------------------------
// GET ALL PROVIDERS
// -----------------------------------------------------------------------------
export async function getAllProviders() {
    const providers = await prisma.provider.findMany({
        orderBy: { name: "asc" },
        include: {
            _count: { select: { apis: true } },
        },
    });

    return providers.map((p) => ({
        id: p.id,
        name: p.name,
        website: p.website,
        logoUrl: p.logoUrl,
        apiCount: p._count.apis,
    }));
}

// -----------------------------------------------------------------------------
// GET ALL CATEGORIES
// -----------------------------------------------------------------------------
export async function getAllCategories() {
    const categories = await prisma.category.findMany({
        orderBy: { name: "asc" },
        include: {
            _count: { select: { apis: true } },
        },
    });

    return categories.map((c) => ({
        id: c.id,
        name: c.name,
        slug: c.slug,
        icon: c.icon,
        apiCount: c._count.apis,
    }));
}

// -----------------------------------------------------------------------------
// INCREMENT POPULARITY (called on view/redirect)
// -----------------------------------------------------------------------------
export async function incrementPopularity(apiId) {
    await prisma.api.update({
        where: { id: apiId },
        data: { popularityScore: { increment: 1 } },
    });
}
