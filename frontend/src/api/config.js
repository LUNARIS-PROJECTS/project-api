const rawBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

// Ensure the URL ends with /api and has no trailing slash
export const API_BASE_URL = rawBaseUrl.endsWith("/api")
    ? rawBaseUrl
    : `${rawBaseUrl.replace(/\/$/, "")}/api`;