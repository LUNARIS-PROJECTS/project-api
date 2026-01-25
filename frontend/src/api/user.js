import { API_BASE_URL } from "./config";

const getAuthHeaders = () => {
    const token = localStorage.getItem("token");
    return token ? { Authorization: `Bearer ${token}`, "Content-Type": "application/json" } : { "Content-Type": "application/json" };
};

export const fetchUserProfile = async () => {
    const response = await fetch(`${API_BASE_URL}/user/profile`, {
        headers: getAuthHeaders(),
    });
    if (!response.ok) {
        throw new Error("Failed to fetch user profile");
    }
    return response.json();
};

export const fetchUserActivity = async () => {
    const response = await fetch(`${API_BASE_URL}/user/activity`, {
        headers: getAuthHeaders(),
    });
    if (!response.ok) {
        throw new Error("Failed to fetch user activity");
    }
    return response.json();
};

export const logUserActivity = async (action, details = {}) => {
    // action: "VIEW", "COMPARE", "REDIRECT"
    const response = await fetch(`${API_BASE_URL}/user/activity`, {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify({ action, details }),
    });
    // Fire and forget mostly, but return response if needed
    return response.json().catch(() => { });
};

export const fetchApiUsage = async () => {
    const response = await fetch(`${API_BASE_URL}/user/usage`, {
        headers: getAuthHeaders(),
    });
    if (!response.ok) {
        throw new Error("Failed to fetch usage stats");
    }
    return response.json();
};
