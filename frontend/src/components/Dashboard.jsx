import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import ApiDnaStrand, { FEATURES } from "./ApiDnaStrand";
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
    const [selectedCategory, setSelectedCategory] = useState("all");

    // Comparison State
    const [compareList, setCompareList] = useState([]);
    const [showCompare, setShowCompare] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);

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
                const userData = await fetchUserProfile();
                setUser(userData);
                const catsData = await fetchCategories();
                setCategories(catsData || []);
            } catch (error) {
                console.error("Initialization failed:", error);
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

        const timeoutId = setTimeout(() => {
            loadApis();
        }, 300);

        return () => clearTimeout(timeoutId);
    }, [searchQuery, selectedCategory]);

    // Comparison Logic
    const addToCompare = (api) => {
        if (compareList.find((item) => item.id === api.id)) return;
        if (compareList.length >= 6) {
            alert("Orbit can only stabilize 6 DNA strands at once.");
            return;
        }
        setCompareList([...compareList, api]);
        setShowCompare(true);
        setIsMinimized(false);
        logUserActivity("COMPARE", { apiId: api.id });
    };

    const removeFromCompare = (id) => {
        const newList = compareList.filter((item) => item.id !== id);
        setCompareList(newList);
        if (newList.length === 0) {
            setShowCompare(false);
            setIsMinimized(false);
        }
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
                        {apis.map((api) => {
                            const isInCompare = compareList.some(item => item.id === api.id);
                            return (
                                <div key={api.id} className={`bg-[#0F141B] border ${isInCompare ? 'border-cyan-500/50 shadow-[0_0_20px_rgba(34,211,238,0.05)]' : 'border-gray-800'} rounded-xl p-6 hover:border-gray-600 hover:-translate-y-1 transition-all duration-300 flex flex-col group relative overflow-hidden`}>
                                    {/* Active Analysis Indicator */}
                                    {isInCompare && (
                                        <div className="absolute -top-1 -right-1 w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center -rotate-12 transform translate-x-2 -translate-y-2 border border-cyan-500/20">
                                            <span className="text-cyan-400 text-[10px] font-black uppercase tracking-tighter">Live</span>
                                        </div>
                                    )}
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
                                            onClick={() => isInCompare ? removeFromCompare(api.id) : addToCompare(api)}
                                            className={`flex-1 py-2 px-3 rounded-lg border text-sm font-medium transition-all ${isInCompare
                                                ? "border-cyan-500/50 bg-cyan-500/10 text-cyan-400"
                                                : "border-gray-700 hover:bg-gray-800 text-gray-400 hover:text-white"
                                                }`}
                                        >
                                            {isInCompare ? "In Analysis" : "Compare"}
                                        </button>
                                        <a
                                            href={api.provider.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={() => logUserActivity("REDIRECT", { apiId: api.id, url: api.provider.website })}
                                            className="flex-1 py-2 px-3 rounded-lg bg-cyan-600/20 text-cyan-400 hover:bg-cyan-600/30 text-center text-sm font-medium transition-colors"
                                        >
                                            Visit &rarr;
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </main>

            {/* 4️⃣ MINIMIZED COMPARISON BAR - Responsive Pill */}
            {showCompare && isMinimized && (
                <div
                    onClick={() => setIsMinimized(false)}
                    className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#0F141B]/95 backdrop-blur-2xl border border-cyan-500/30 rounded-full px-4 md:px-6 py-3 cursor-pointer hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all flex items-center gap-3 md:gap-4 animate-[fadeInUp_0.3s_ease-out] whitespace-nowrap"
                >
                    <div className="flex -space-x-2">
                        {compareList.map(api => (
                            <div key={api.id} className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-cyan-500 border border-black flex items-center justify-center text-[8px] md:text-[10px] font-bold text-black">
                                {api.name.charAt(0)}
                            </div>
                        ))}
                    </div>
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-white">
                        <span className="hidden sm:inline">Comparing </span>{compareList.length} <span className="hidden sm:inline">Strands</span>
                    </span>
                    <button className="text-cyan-400 text-[10px] md:text-xs font-black uppercase tracking-tighter hover:text-white transition underline underline-offset-4">Maximize</button>
                </div>
            )}

            {/* 5️⃣ DNA STRAND COMPARISON PANEL (MAXIMIZED) */}
            {showCompare && !isMinimized && compareList.length > 0 && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 animate-[fadeIn_0.3s_ease-out]">
                    <div className="fixed bottom-0 left-0 right-0 max-h-[92vh] overflow-y-auto scrollbar-hide bg-[#0F141B]/95 backdrop-blur-2xl border-t border-gray-800 shadow-[0_-30px_60px_rgba(0,0,0,0.9)] z-50 animate-[fadeInUp_0.5s_cubic-bezier(0.16,1,0.3,1)]">
                        <div className="w-full max-w-[1500px] mx-auto px-4 md:px-6 py-6 md:py-10">

                            <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-8 md:mb-12">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-black text-white tracking-tighter uppercase">DNA Pattern Analysis</h3>
                                    <p className="text-[10px] md:text-[11px] text-cyan-500 font-black uppercase tracking-[0.4em] mt-2">Deep Feature Synchronicity Active</p>
                                </div>
                                <div className="flex gap-3">
                                    <button
                                        onClick={() => setIsMinimized(true)}
                                        className="flex-1 md:flex-none px-4 md:px-6 py-2 rounded-lg border border-gray-800 text-gray-400 hover:text-white hover:border-gray-500 transition text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em]"
                                    >
                                        Minimize
                                    </button>
                                    <button
                                        onClick={() => { setShowCompare(false); setCompareList([]); }}
                                        className="flex-1 md:flex-none px-4 md:px-6 py-2 rounded-lg bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500 hover:text-white transition text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em]"
                                    >
                                        Exit
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center gap-8 lg:gap-12">
                                {/* Feature Labels Legend - Visible from LG up */}
                                <div className="hidden lg:flex flex-col gap-[11px] pt-[84px] text-right min-w-[180px]">
                                    {FEATURES.map((feat) => (
                                        <span key={feat.key} className="h-[14px] text-[10px] text-gray-500 font-black uppercase tracking-tighter flex items-center justify-end leading-none">
                                            {feat.label}
                                        </span>
                                    ))}
                                </div>

                                {/* DNA Strands - Enhanced Scrolling */}
                                <div className="w-full flex gap-4 md:gap-8 overflow-x-auto scrollbar-hide pb-8 px-4 snap-x snap-mandatory justify-start lg:justify-center">
                                    {compareList.map((api) => (
                                        <div key={api.id} className="snap-center">
                                            <ApiDnaStrand
                                                api={api}
                                                onRemove={removeFromCompare}
                                            />
                                        </div>
                                    ))}

                                    {/* Empty Add Slot */}
                                    {compareList.length < 6 && (
                                        <div className="snap-center">
                                            <div
                                                onClick={() => {
                                                    setIsMinimized(true);
                                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                                }}
                                                className="min-w-[140px] h-[300px] mt-[84px] border-2 border-dashed border-gray-800/50 rounded-[2.5rem] flex flex-col items-center justify-center gap-4 group cursor-pointer hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-500"
                                            >
                                                <div className="w-10 h-10 rounded-full border-2 border-dashed border-gray-800 flex items-center justify-center text-gray-700 group-hover:border-cyan-400 group-hover:text-cyan-400 group-hover:rotate-180 transition-all duration-700">
                                                    <span className="text-xl font-light">+</span>
                                                </div>
                                                <div className="text-center px-4">
                                                    <p className="text-[9px] text-gray-700 font-black uppercase tracking-widest group-hover:text-cyan-400 transition-colors">Add Strand</p>
                                                    <p className="text-[8px] text-gray-800 font-bold uppercase mt-1 opacity-40">{6 - compareList.length} free</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Legend - Responsive Spacing */}
                            <div className="mt-8 md:mt-12 pt-8 border-t border-gray-800/30 flex flex-wrap justify-center gap-6 md:gap-12 text-[9px] md:text-[10px] text-gray-500 font-black uppercase tracking-[0.2em] md:tracking-[0.3em] px-4 text-center">
                                <div className="flex items-center gap-2 group">
                                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]"></span>
                                    <span>Optimal Infrastructure</span>
                                </div>
                                <div className="flex items-center gap-2 group">
                                    <span className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_10px_#f97316]"></span>
                                    <span>Conditional Support</span>
                                </div>
                                <div className="flex items-center gap-2 group">
                                    <span className="w-2.5 h-2.5 rounded-full bg-gray-700"></span>
                                    <span>Logic Unavailable</span>
                                </div>
                            </div>

                            {/* Mobile Swipe Hint */}
                            <div className="lg:hidden mt-8 text-center text-[10px] text-gray-600 font-black uppercase tracking-[0.2em] animate-pulse">
                                ↔ Swipe Strands to Compare
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
