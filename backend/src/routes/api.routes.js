import express from "express";
import * as apiService from "../services/api.service.js";
import { optionalAuthMiddleware, authMiddleware } from "../middleware/auth.middleware.js";
import * as userService from "../services/user.service.js";

const router = express.Router();

// -----------------------------------------------------------------------------
// GET /api/apis - List APIs with search & filters
// -----------------------------------------------------------------------------
router.get("/", optionalAuthMiddleware, async (req, res) => {
    try {
        const { search, category, pricingType, authType, page, limit } = req.query;

        const result = await apiService.getAllApis({
            search,
            category,
            pricingType,
            authType,
            page: parseInt(page) || 1,
            limit: parseInt(limit) || 20,
        });

        res.json(result);
    } catch (error) {
        console.error("Error fetching APIs:", error);
        res.status(500).json({ message: "Failed to fetch APIs" });
    }
});

// -----------------------------------------------------------------------------
// GET /api/apis/categories - List all categories
// -----------------------------------------------------------------------------
router.get("/categories", async (req, res) => {
    try {
        const categories = await apiService.getAllCategories();
        res.json(categories);
    } catch (error) {
        console.error("Error fetching categories:", error);
        res.status(500).json({ message: "Failed to fetch categories" });
    }
});

// -----------------------------------------------------------------------------
// GET /api/apis/providers - List all providers
// -----------------------------------------------------------------------------
router.get("/providers", async (req, res) => {
    try {
        const providers = await apiService.getAllProviders();
        res.json(providers);
    } catch (error) {
        console.error("Error fetching providers:", error);
        res.status(500).json({ message: "Failed to fetch providers" });
    }
});

// -----------------------------------------------------------------------------
// POST /api/apis/compare - Compare 2-3 APIs
// -----------------------------------------------------------------------------
router.post("/compare", optionalAuthMiddleware, async (req, res) => {
    try {
        const { ids } = req.body;

        if (!ids || !Array.isArray(ids)) {
            return res.status(400).json({ message: "Please provide an array of API IDs" });
        }

        const comparison = await apiService.compareApis(ids);

        // Track comparison if user is logged in
        if (req.userId) {
            for (const id of ids) {
                await userService.trackInteraction(req.userId, id, "COMPARE");
            }
        }

        res.json(comparison);
    } catch (error) {
        console.error("Error comparing APIs:", error);
        res.status(400).json({ message: error.message });
    }
});

// -----------------------------------------------------------------------------
// GET /api/apis/:idOrSlug - Get single API by ID or slug
// -----------------------------------------------------------------------------
router.get("/:idOrSlug", optionalAuthMiddleware, async (req, res) => {
    try {
        const { idOrSlug } = req.params;
        const api = await apiService.getApiById(idOrSlug);

        if (!api) {
            return res.status(404).json({ message: "API not found" });
        }

        // Track view if user is logged in
        if (req.userId) {
            await userService.trackInteraction(req.userId, api.id, "VIEW");
        }

        // Increment popularity
        await apiService.incrementPopularity(api.id);

        res.json(api);
    } catch (error) {
        console.error("Error fetching API:", error);
        res.status(500).json({ message: "Failed to fetch API" });
    }
});

// -----------------------------------------------------------------------------
// POST /api/apis/:id/redirect - Track redirect to provider
// -----------------------------------------------------------------------------
router.post("/:id/redirect", authMiddleware, async (req, res) => {
    try {
        const { id } = req.params;

        // Track redirect
        await userService.trackInteraction(req.userId, id, "REDIRECT");
        await apiService.incrementPopularity(id);

        res.json({ message: "Redirect tracked" });
    } catch (error) {
        console.error("Error tracking redirect:", error);
        res.status(500).json({ message: "Failed to track redirect" });
    }
});

export default router;
