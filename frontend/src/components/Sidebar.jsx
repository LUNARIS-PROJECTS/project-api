import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Sidebar({ isOpen, onClose, user }) {
    const navigate = useNavigate();
    const location = useLocation();

    if (!isOpen) return null;

    const navItems = [
        { name: "Dashboard", path: "/dashboard", icon: "🏠" },
        { name: "Profile", path: "/profile", icon: "👤" },
        // { name: "Settings", path: "/settings", icon: "⚙️" }, // Future
    ];

    const handleNavigation = (path) => {
        navigate(path);
        onClose();
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <div className="fixed inset-0 z-[100] flex justify-end">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Sidebar Content */}
            <div className="relative w-80 h-full bg-[#1A202C] border-l border-gray-700 shadow-2xl flex flex-col animate-[slideInRight_0.3s_ease-out]">

                {/* Header */}
                <div className="p-6 border-b border-gray-700 flex items-center justify-between">
                    <h2 className="text-xl font-bold text-white">Menu</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-white transition-colors text-2xl leading-none"
                    >
                        &times;
                    </button>
                </div>

                {/* User Info (Mini) */}
                <div className="p-6 bg-[#0F141B]/50 border-b border-gray-800">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white">
                            {user?.email?.charAt(0).toUpperCase() || "U"}
                        </div>
                        <div className="overflow-hidden">
                            <p className="text-sm font-medium text-white truncate">{user?.email || "User"}</p>
                            <p className="text-xs text-green-400">Online</p>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                    {navItems.map((item) => (
                        <button
                            key={item.path}
                            onClick={() => handleNavigation(item.path)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${location.pathname === item.path
                                    ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                                    : "text-gray-400 hover:bg-gray-800 hover:text-white"
                                }`}
                        >
                            <span className="text-lg">{item.icon}</span>
                            <span className="font-medium">{item.name}</span>
                        </button>
                    ))}
                </nav>

                {/* Footer Actions */}
                <div className="p-6 border-t border-gray-700">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors font-medium border border-red-500/20"
                    >
                        <span>🚪</span> Logout
                    </button>
                </div>
            </div>
        </div>
    );
}
