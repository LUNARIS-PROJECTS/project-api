import { API_BASE_URL } from "./config";

/**
 * Fetch APIs with optional filters
 * @param {Object} filters - { search, category, pricingType, authType, page, limit }
 */
export const fetchApis = async (filters = {}) => {
    const query = new URLSearchParams(filters);
    const response = await fetch(`${API_BASE_URL}/apis?${query.toString()}`);
    if (!response.ok) {
        throw new Error("Failed to fetch APIs");
    }
    return response.json(); // Returns { success: true, data: { apis: [], pagination: {} } }
};

/**
 * Fetch a single API by ID or Slug
 */
export const fetchApiById = async (idOrSlug) => {
    const response = await fetch(`${API_BASE_URL}/apis/${idOrSlug}`);
    if (!response.ok) {
        throw new Error("Failed to fetch API details");
    }
    return response.json(); // Returns { success: true, data: api }
};

/**
 * Compare APIs by IDs
 * @param {Array} ids - List of API IDs
 */
export const compareApis = async (ids) => {
    if (!ids || ids.length === 0) return [];

    // Get token for tracking (optional)
    const token = localStorage.getItem("token");
    const headers = {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {})
    };

    const response = await fetch(`${API_BASE_URL}/apis/compare`, {
        method: "POST",
        headers,
        body: JSON.stringify({ ids }),
    });

    if (!response.ok) {
        throw new Error("Failed to compare APIs");
    }
    return response.json(); // Returns { success: true, data: comparison[] }
};

/**
 * Fetch all categories
 */
export const fetchCategories = async () => {
    const response = await fetch(`${API_BASE_URL}/apis/categories`);
    if (!response.ok) {
        throw new Error("Failed to fetch categories");
    }
    return response.json(); // Returns { success: true, data: categories[] }
};

/**
 * Fetch all providers
 */
export const fetchProviders = async () => {
    const response = await fetch(`${API_BASE_URL}/apis/providers`);
    if (!response.ok) {
        throw new Error("Failed to fetch providers");
    }
    return response.json(); // Returns { success: true, data: providers[] }
};
