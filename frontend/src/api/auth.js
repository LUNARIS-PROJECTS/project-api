import { API_BASE_URL } from "./config";

export const registerUser = async (name, email, password) => {
    const url = `${API_BASE_URL}/auth/register`;
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password }),
        });

        const data = await response.json();

        if (!response.ok) {
            return { success: false, message: data.message || "Registration failed" };
        }

        return { success: true, message: data.message };
    } catch (error) {
        console.error("Register fetch error:", error);
        throw new Error("Unable to connect to the server");
    }
};

export const loginUser = async (email, password) => {
    const url = `${API_BASE_URL}/auth/login`;
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (!response.ok) {
            return { success: false, message: data.message || "Login failed" };
        }

        return { success: true, token: data.token, user: data.user };
    } catch (error) {
        console.error("Login fetch error:", error);
        throw new Error("Unable to connect to the server");
    }
};
