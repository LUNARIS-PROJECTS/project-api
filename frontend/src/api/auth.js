import { API_BASE_URL } from "./config";

export const registerUser = async (name, email, password) => {
    const url = `${API_BASE_URL}/auth/register`;
    console.log("Fetching from:", url);
    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
    });

    if (!response.ok) {
        console.error(`Registration failed with status: ${response.status}`);
    }

    return response.json();
};

export const loginUser = async (email, password) => {
    const url = `${API_BASE_URL}/auth/login`;
    console.log("Fetching from:", url);
    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        console.error(`Login failed with status: ${response.status}`);
    }

    return response.json();
};