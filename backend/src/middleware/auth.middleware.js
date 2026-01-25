import jwt from "jsonwebtoken";

/**
 * Middleware to verify JWT token and attach user to request.
 * Use this on protected routes.
 */
export function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
}

/**
 * Optional auth middleware - attaches user if token present, but doesn't block.
 * Useful for endpoints that work for both guests and logged-in users.
 */
export function optionalAuthMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith("Bearer ")) {
        const token = authHeader.split(" ")[1];
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.userId = decoded.userId;
        } catch (error) {
            // Token invalid, but we don't block - just proceed without userId
        }
    }
    next();
}
