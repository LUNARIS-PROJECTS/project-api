
const BASE_URL = "http://localhost:5000/api";

const log = (msg, type = "info") => {
    const icons = { info: "ℹ️", success: "✅", error: "❌", warning: "⚠️" };
    console.log(`${icons[type]} ${msg}`);
};

async function verify() {
    console.log("\n🧪 STARTING SYSTEM VERIFICATION\n================================\n");

    try {
        // 1. Availability Check
        log("Checking API availability...", "info");
        const healthCheck = await fetch(`${BASE_URL}/apis`).catch(() => null);
        if (!healthCheck) throw new Error("API is not reachable at " + BASE_URL + ". Is the server running?");
        log("API is reachable", "success");

        // 2. Authentication Flow
        log("\nTesting Authentication Flow...", "info");
        const email = `verifier_${Date.now()}@check.com`;
        const password = "password123";

        // Register
        const regRes = await fetch(`${BASE_URL}/auth/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: "System Verifier", email, password })
        });
        const regData = await regRes.json();
        if (!regRes.ok) throw new Error(`Registration failed: ${regData.message}`);
        log(`Registered user: ${email}`, "success");

        // Login
        const loginRes = await fetch(`${BASE_URL}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });
        const loginData = await loginRes.json();
        if (!loginData.token) throw new Error("Login failed: No token received");
        const token = loginData.token;
        log("Login successful, token received", "success");

        // 3. Data Retrieval
        log("\nTesting Data Retrieval...", "info");

        // Get Categories
        const catsRes = await fetch(`${BASE_URL}/apis/categories`);
        const cats = await catsRes.json();
        log(`Fetched ${cats.length} categories`, "success");
        if (cats.length === 0) log("Warning: No categories found", "warning");

        // Get APIs
        const apisRes = await fetch(`${BASE_URL}/apis`);
        const apisWrapper = await apisRes.json();
        const apis = apisWrapper.apis;
        log(`Fetched ${apis.length} APIs`, "success");
        if (!apis || apis.length === 0) throw new Error("No APIs found - Seeding might have failed");

        // Search
        const searchRes = await fetch(`${BASE_URL}/apis?search=weather`);
        const searchData = await searchRes.json();
        log(`Search 'weather' returned ${searchData.apis.length} results`, "success");

        // 4. Comparison
        log("\nTesting Comparison Engine...", "info");
        if (apis.length >= 2) {
            const ids = [apis[0].id, apis[1].id];
            const compareRes = await fetch(`${BASE_URL}/apis/compare`, {
                method: "POST",
                headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
                body: JSON.stringify({ ids })
            });
            const compareData = await compareRes.json();
            if (!compareRes.ok) throw new Error(`Comparison failed: ${compareData.message}`);
            log(`Compared ${compareData.length} APIs successfully`, "success");
        } else {
            log("Skipping comparison (not enough APIs)", "warning");
        }

        // 5. User Profile & Tracking
        log("\nTesting User Profile...", "info");
        const profileRes = await fetch(`${BASE_URL}/user/profile`, {
            headers: { "Authorization": `Bearer ${token}` }
        });
        const profile = await profileRes.json();
        if (!profile.email) throw new Error("Profile fetch failed");
        log(`Fetched profile for ${profile.email}`, "success");

        console.log("\n🎉 VERIFICATION COMPLETE: ALL SYSTEMS GO\n");

    } catch (error) {
        log(`Verification Failed: ${error.message}`, "error");
        process.exit(1);
    }
}

verify();
