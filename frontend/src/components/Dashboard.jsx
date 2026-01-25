import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { fetchApis, fetchCategories } from "../api/apis";
import { fetchUserProfile, logUserActivity } from "../api/user";

export default function Dashboard() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    // Data State
    const [apis, setApis] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    // Search & Filter State
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all"); // 'all' or category slug

    // Comparison State
    const [compareList, setCompareList] = useState([]);
    const [showCompare, setShowCompare] = useState(false);

    // Sidebar State
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // 🛡️ AUTH & INITIAL LOAD
    useEffect(() => {
        const loadInitialData = async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                navigate("/login");
                return;
            }

            try {
                // 1. Load User
                const userData = await fetchUserProfile();
                setUser(userData);

                // 2. Load Categories
                const catsData = await fetchCategories();
                // Add 'All' option manually if needed, or handle in UI
                setCategories(catsData || []);
            } catch (error) {
                console.error("Initialization failed:", error);
                // navigate("/login"); // Optional: redirect on auth failure
            }
        };
        loadInitialData();
    }, [navigate]);

    // 🔄 FETCH APIs ON FILTER CHANGE
    useEffect(() => {
        const loadApis = async () => {
            setLoading(true);
            try {
                const filters = {};
                if (searchQuery) filters.search = searchQuery;
                if (selectedCategory !== "all") filters.category = selectedCategory;

                const result = await fetchApis(filters);
                setApis(result.apis || []);
            } catch (error) {
                console.error("Failed to fetch APIs:", error);
            } finally {
                setLoading(false);
            }
        };

        // Debounce search
        const timeoutId = setTimeout(() => {
            loadApis();
        }, 300);

        return () => clearTimeout(timeoutId);
    }, [searchQuery, selectedCategory]);

    // Comparison Logic
    const addToCompare = (api) => {
        if (compareList.find((item) => item.id === api.id)) return;
        if (compareList.length >= 3) {
            alert("You can compare up to 3 APIs at a time.");
            return;
        }
        setCompareList([...compareList, api]);
        setShowCompare(true);
        // Log activity
        logUserActivity("COMPARE", { apiId: api.id });
    };

    const removeFromCompare = (id) => {
        const newList = compareList.filter((item) => item.id !== id);
        setCompareList(newList);
        if (newList.length === 0) setShowCompare(false);
    };

    return (
        <div className="min-h-screen bg-[#050B14] text-gray-200 font-sans selection:bg-cyan-500/30">

            {/* 1️⃣ TOP NAVIGATION */}
            <nav className="sticky top-0 z-50 bg-[#0F141B]/80 backdrop-blur-md border-b border-gray-800 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 animate-pulse"></div>
                    <h1 className="text-xl font-bold tracking-wide text-white">Key-Verse</h1>
                </div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="group flex items-center gap-2 hover:text-white transition"
                    >
                        <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs ml-2 border border-transparent group-hover:border-cyan-500 transition-colors">
                            {user?.name?.charAt(0).toUpperCase() || user?.email?.charAt(0).toUpperCase() || "U"}
                        </div>
                    </button>
                </div>
            </nav>

            <Sidebar
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
                user={user}
            />

            {/* 2️⃣ HERO & DISCOVERY */}
            <header className="px-6 py-12 md:py-20 text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] -z-10"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -z-10"></div>

                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Find the Right API <span className="text-cyan-400">Faster</span>
                </h2>

                <div className="max-w-2xl mx-auto mb-10 relative">
                    <input
                        type="text"
                        placeholder="Search APIs (AI, Weather, Payments...)"
                        className="w-full bg-[#0F141B] border border-gray-700 rounded-xl px-6 py-4 text-lg shadow-[0_0_20px_rgba(0,0,0,0.3)] focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                {/* Category Chips */}
                <div className="flex flex-wrap justify-center gap-3">
                    <button
                        onClick={() => setSelectedCategory("all")}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === "all"
                            ? "bg-cyan-500 text-black shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                            : "bg-[#1A202C] text-gray-400 hover:bg-gray-700 hover:text-white"
                            }`}
                    >
                        All
                    </button>
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.slug)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === cat.slug
                                ? "bg-cyan-500 text-black shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                                : "bg-[#1A202C] text-gray-400 hover:bg-gray-700 hover:text-white"
                                }`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>
            </header>

            {/* 3️⃣ API LISTING GRID */}
            <main className="px-6 pb-32 max-w-7xl mx-auto">
                <h3 className="text-xl font-semibold mb-6 text-gray-300">
                    {apis.length} Result{apis.length !== 1 ? 's' : ''} Found
                </h3>

                {loading ? (
                    <div className="text-center py-20 text-gray-500 animate-pulse">Scanning the Key-Verse database...</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {apis.map((api) => (
                            <div key={api.id} className="bg-[#0F141B] border border-gray-800 rounded-xl p-6 hover:border-gray-600 hover:-translate-y-1 transition-all duration-300 flex flex-col group">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">{api.name}</h4>
                                        <span className="text-xs text-gray-500 uppercase tracking-wider">{api.provider.name}</span>
                                    </div>
                                    <span className={`px-2 py-1 rounded text-xs font-semibold ${api.pricingType === "FREE" ? "bg-green-500/20 text-green-400" :
                                        api.pricingType === "PAID" ? "bg-red-500/20 text-red-400" :
                                            "bg-yellow-500/20 text-yellow-400"
                                        }`}>
                                        {api.pricingType}
                                    </span>
                                </div>

                                <p className="text-gray-400 text-sm mb-6 flex-grow">{api.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {api.features.slice(0, 3).map((feat, i) => (
                                        <span key={i} className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-300">
                                            {feat}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-3 mt-auto">
                                    <button
                                        onClick={() => addToCompare(api)}
                                        className="flex-1 py-2 px-3 rounded-lg border border-gray-700 hover:bg-gray-800 text-sm font-medium transition-colors"
                                    >
                                        Compare
                                    </button>
                                    <a
                                        href={api.provider.website} // Or api.docsUrl
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => logUserActivity("REDIRECT", { apiId: api.id, url: api.provider.website })}
                                        className="flex-1 py-2 px-3 rounded-lg bg-cyan-600/20 text-cyan-400 hover:bg-cyan-600/30 text-center text-sm font-medium transition-colors"
                                    >
                                        Visit &rarr;
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>

            {/* 4️⃣ COMPARISON PANEL (Fixed Bottom) */}
            {showCompare && compareList.length > 0 && (
                <div className="fixed bottom-0 left-0 right-0 bg-[#0F141B] border-t border-gray-700 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] z-40 animate-[fadeInUp_0.3s_ease-out]">
                    <div className="max-w-7xl mx-auto px-6 py-6">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-bold text-white">Compare Mode</h3>
                            <button
                                onClick={() => setShowCompare(false)}
                                className="text-gray-400 hover:text-white text-sm"
                            >
                                Close Panel
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {compareList.map((api) => (
                                <div key={api.id} className="relative bg-[#1A202C] p-4 rounded-lg border border-gray-700">
                                    <button
                                        onClick={() => removeFromCompare(api.id)}
                                        className="absolute top-2 right-2 text-gray-500 hover:text-red-400 text-lg leading-none"
                                    >
                                        &times;
                                    </button>
                                    <h4 className="font-bold text-white mb-1">{api.name}</h4>

                                    <div className="space-y-2 mt-4 text-sm">
                                        <div className="flex justify-between border-b border-gray-700 pb-1">
                                            <span className="text-gray-500">Auth</span>
                                            <span className="text-gray-300">{api.authType || "N/A"}</span>
                                        </div>
                                        <div className="flex justify-between border-b border-gray-700 pb-1">
                                            <span className="text-gray-500">Tier</span>
                                            <span className={api.pricingType === "FREE" ? "text-green-400" : "text-yellow-400"}>{api.pricingType}</span>
                                        </div>
                                        <div className="flex justify-between pt-1">
                                            <span className="text-gray-500">Reliability</span>
                                            <div className="flex items-center gap-1">
                                                <span className="text-yellow-400">★</span>
                                                <span className="text-gray-300">{api.reliabilityScore?.toFixed(1) || "-"}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Empty Slots placeholder */}
                            {[...Array(3 - compareList.length)].map((_, i) => (
                                <div key={i} className="hidden md:flex items-center justify-center border border-dashed border-gray-700 rounded-lg text-gray-600 text-sm p-4">
                                    Select an API to compare
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}
