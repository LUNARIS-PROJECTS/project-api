import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// -----------------------------------------------------------------------------
// 🛸 MOCK DATA (Static for now)
// -----------------------------------------------------------------------------

const CATEGORIES = ["All", "AI", "Weather", "Payments", "Communication", "Maps", "Crypto"];

const ALL_APIS = [
    {
        id: 1,
        name: "OpenAI API",
        provider: "OpenAI",
        category: "AI",
        description: "Access GPT-4 and DALL-E models for natural language and image generation.",
        priceType: "Paid",
        features: ["Text Generation", "Image Creation", "Embeddings"],
        rateLimit: "Variable",
        freeTier: false,
        docScore: 9.5,
        website: "https://openai.com/api/",
    },
    {
        id: 2,
        name: "OpenWeatherMap",
        provider: "OpenWeather",
        category: "Weather",
        description: "Real-time weather data, forecasts, and historical data for any location.",
        priceType: "Freemium",
        features: ["Current Weather", "Forecasts", "Historical Data"],
        rateLimit: "60 calls/min",
        freeTier: true,
        docScore: 9.0,
        website: "https://openweathermap.org/api",
    },
    {
        id: 3,
        name: "Stripe API",
        provider: "Stripe",
        category: "Payments",
        description: "Accept payments, manage recurring billing, and handle payouts globally.",
        priceType: "Paid",
        features: ["Payments", "Subscriptions", "Fraud Detection"],
        rateLimit: "100 req/sec",
        freeTier: false,
        docScore: 9.8,
        website: "https://stripe.com/docs/api",
    },
    {
        id: 4,
        name: "Twilio API",
        provider: "Twilio",
        category: "Communication",
        description: "Send SMS, make voice calls, and manage emails programmatically.",
        priceType: "Paid",
        features: ["SMS", "Voice", "Video"],
        rateLimit: "Concurrency Based",
        freeTier: true, // Trial
        docScore: 9.2,
        website: "https://www.twilio.com/docs/usage/api",
    },
    {
        id: 5,
        name: "Google Maps Platform",
        provider: "Google",
        category: "Maps",
        description: "Embed maps, visualize location data, and access routes.",
        priceType: "Freemium",
        features: ["Maps", "Routes", "Places"],
        rateLimit: "Unlimited (billed)",
        freeTier: true, // $200 credit
        docScore: 8.9,
        website: "https://developers.google.com/maps",
    },
    {
        id: 6,
        name: "CoinGecko API",
        provider: "CoinGecko",
        category: "Crypto",
        description: "Comprehensive cryptocurrency data, live prices, and market history.",
        priceType: "Freemium",
        features: ["Live Prices", "Market Cap", "Exchange info"],
        rateLimit: "30 calls/min",
        freeTier: true,
        docScore: 8.5,
        website: "https://www.coingecko.com/en/api",
    },
];

// -----------------------------------------------------------------------------
// 🚀 COMPONENTS
// -----------------------------------------------------------------------------

export default function Dashboard() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    // Search & Filter State
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Comparison State
    const [compareList, setCompareList] = useState([]);
    const [showCompare, setShowCompare] = useState(false);

    // 🛡️ AUTH GUARD
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
        } else {
            // Mock user data for now
            setUser({ email: "developer@explorer.com" });
        }
    }, [navigate]);

    // Handle Logout
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    // Filter Logic
    const filteredAPIs = ALL_APIS.filter((api) => {
        const matchesSearch = api.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            api.category.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === "All" || api.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    // Comparison Logic
    const addToCompare = (api) => {
        if (compareList.find((item) => item.id === api.id)) return;
        if (compareList.length >= 3) {
            alert("You can compare up to 3 APIs at a time.");
            return;
        }
        setCompareList([...compareList, api]);
        setShowCompare(true);
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

                <div className="hidden md:flex flex-1 max-w-md mx-8">
                    <input
                        type="text"
                        placeholder="Quick search..."
                        className="w-full bg-[#1A202C] border border-gray-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <div className="flex items-center gap-4">
                    <div className="group relative">
                        <button className="flex items-center gap-2 hover:text-white transition">
                            <span className="text-sm">{user?.email || "Explorer"}</span>
                            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs ml-2">
                                User
                            </div>
                        </button>
                        {/* Dropdown */}
                        <div className="absolute right-0 mt-2 w-48 bg-[#1A202C] border border-gray-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                            <button
                                onClick={handleLogout}
                                className="w-full text-left px-4 py-3 text-sm text-red-400 hover:bg-[#252b36] rounded-lg transition"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* 2️⃣ HERO & DISCOVERY */}
            <header className="px-6 py-12 md:py-20 text-center relative overflow-hidden">
                {/* Background blobs */}
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
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === cat
                                    ? "bg-cyan-500 text-black shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                                    : "bg-[#1A202C] text-gray-400 hover:bg-gray-700 hover:text-white"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </header>

            {/* 3️⃣ API LISTING GRID */}
            <main className="px-6 pb-32 max-w-7xl mx-auto">
                <h3 className="text-xl font-semibold mb-6 text-gray-300">
                    {filteredAPIs.length} Result{filteredAPIs.length !== 1 ? 's' : ''} Found
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredAPIs.map((api) => (
                        <div key={api.id} className="bg-[#0F141B] border border-gray-800 rounded-xl p-6 hover:border-gray-600 hover:-translate-y-1 transition-all duration-300 flex flex-col group">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">{api.name}</h4>
                                    <span className="text-xs text-gray-500 uppercase tracking-wider">{api.provider}</span>
                                </div>
                                <span className={`px-2 py-1 rounded text-xs font-semibold ${api.priceType === "Free" ? "bg-green-500/20 text-green-400" :
                                        api.priceType === "Paid" ? "bg-red-500/20 text-red-400" :
                                            "bg-yellow-500/20 text-yellow-400"
                                    }`}>
                                    {api.priceType}
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
                                    href={api.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 py-2 px-3 rounded-lg bg-cyan-600/20 text-cyan-400 hover:bg-cyan-600/30 text-center text-sm font-medium transition-colors"
                                >
                                    Visit &rarr;
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
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
                                            <span className="text-gray-500">Rate Limit</span>
                                            <span className="text-gray-300">{api.rateLimit}</span>
                                        </div>
                                        <div className="flex justify-between border-b border-gray-700 pb-1">
                                            <span className="text-gray-500">Free Tier</span>
                                            <span className={api.freeTier ? "text-green-400" : "text-red-400"}>{api.freeTier ? "Yes" : "No"}</span>
                                        </div>
                                        <div className="flex justify-between pt-1">
                                            <span className="text-gray-500">Doc Score</span>
                                            <div className="flex items-center gap-1">
                                                <span className="text-yellow-400">★</span>
                                                <span className="text-gray-300">{api.docScore}</span>
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
