import { API_BASE_URL } from "./config";

export const registerUser = async (name, email, password)=>{
    const response = await fetch(`${API_BASE_URL}/auth/register`,{
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({name, email, password}),
    });
    return response.json();
};

export const loginUser = async (email, password)=>{
    const response = await fetch(`${API_BASE_URL}/auth/login`,{
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({email, password}),
    });

    return response.json();
};