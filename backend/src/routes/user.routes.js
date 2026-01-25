import express from "express";
import * as userService from "../services/user.service.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

// All user routes require authentication
router.use(authMiddleware);

// -----------------------------------------------------------------------------
// GET /api/user/profile - Get current user's profile with stats
// -----------------------------------------------------------------------------
router.get("/profile", async (req, res) => {
    try {
        const profile = await userService.getUserProfile(req.userId);
        res.json(profile);
    } catch (error) {
        console.error("Error fetching profile:", error);
        res.status(500).json({ message: error.message || "Failed to fetch profile" });
    }
});

// -----------------------------------------------------------------------------
// GET /api/user/activity - Get recent activity
// -----------------------------------------------------------------------------
router.get("/activity", async (req, res) => {
    try {
        const { limit } = req.query;
        const activity = await userService.getRecentActivity(
            req.userId,
            parseInt(limit) || 20
        );
        res.json(activity);
    } catch (error) {
        console.error("Error fetching activity:", error);
        res.status(500).json({ message: "Failed to fetch activity" });
    }
});

// -----------------------------------------------------------------------------
// GET /api/user/usage - Get API usage stats
// -----------------------------------------------------------------------------
router.get("/usage", async (req, res) => {
    try {
        const usage = await userService.getApiUsageStats(req.userId);
        res.json(usage);
    } catch (error) {
        console.error("Error fetching usage:", error);
        res.status(500).json({ message: "Failed to fetch usage stats" });
    }
});

// -----------------------------------------------------------------------------
// POST /api/user/activity - Log an interaction
// -----------------------------------------------------------------------------
router.post("/activity", async (req, res) => {
    try {
        const { apiId, type } = req.body;

        if (!apiId || !type) {
            return res.status(400).json({ message: "apiId and type are required" });
        }

        const interaction = await userService.trackInteraction(req.userId, apiId, type);
        res.json(interaction);
    } catch (error) {
        console.error("Error logging activity:", error);
        res.status(400).json({ message: error.message || "Failed to log activity" });
    }
});

export default router;
