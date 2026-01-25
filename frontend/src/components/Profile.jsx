import React, { useState, useEffect } from 'react';
import { fetchUserProfile, fetchUserActivity, fetchApiUsage } from '../api/user';

export default function Profile() {
    const [user, setUser] = useState(null);
    const [activity, setActivity] = useState([]);
    const [usage, setUsage] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProfileData = async () => {
            try {
                const [userRes, activityRes, usageRes] = await Promise.all([
                    fetchUserProfile(),
                    fetchUserActivity(),
                    fetchApiUsage()
                ]);

                setUser(userRes);
                setActivity(activityRes || []);
                setUsage(usageRes || []);
            } catch (error) {
                console.error("Failed to load profile data:", error);
            } finally {
                setLoading(false);
            }
        };

        loadProfileData();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#050B14] flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="min-h-screen bg-[#050B14] flex items-center justify-center text-red-400">
                Failed to load profile. Please try logging in again.
            </div>
        );
    }

    // Fallbacks for missing fields
    const avatarUrl = user.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name || "User")}&background=0D8ABC&color=fff`;
    const planName = "Free Plan"; // Placeholder until subscription model added
    const joinedDate = new Date(user.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <div className="min-h-screen bg-[#050B14] text-gray-200 font-sans pb-10">
            {/* Header */}
            <div className="bg-[#0F141B] border-b border-gray-800 px-6 py-8">
                <div className="max-w-4xl mx-auto flex items-center gap-6">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 p-1">
                        <img
                            src={avatarUrl}
                            alt="Profile"
                            className="w-full h-full rounded-full bg-[#1A202C] object-cover"
                        />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-white mb-1">{user.name || "Explorer"}</h1>
                        <p className="text-gray-400 mb-2">{user.email}</p>
                        <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-bold border border-cyan-500/20">
                            {planName}
                        </span>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 mt-10 space-y-8">
                {/* Account Details */}
                <section>
                    <h2 className="text-xl font-bold text-white mb-4">Account Details</h2>
                    <div className="bg-[#1A202C] border border-gray-700 rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <p className="text-sm text-gray-500 mb-1">Member Since</p>
                            <p className="text-white font-medium">{joinedDate}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 mb-1">Status</p>
                            <p className="text-green-400 font-medium">Active</p>
                        </div>
                    </div>
                </section>

                {/* API Usage */}
                <section>
                    <h2 className="text-xl font-bold text-white mb-4">API Usage Stats</h2>
                    {usage.length === 0 ? (
                        <div className="p-6 bg-[#1A202C] rounded-xl border border-gray-700 text-gray-500 text-center">
                            No API usage recorded yet. Go explore!
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {usage.map((stat, index) => (
                                <div key={index} className="bg-[#0F141B] border border-gray-800 p-5 rounded-xl flex justify-between items-center hover:border-gray-600 transition-colors">
                                    <div>
                                        <h3 className="font-bold text-gray-200">{stat.apiName}</h3>
                                        <p className="text-xs text-gray-500">Last interaction: {new Date(stat.lastInteractedAt).toLocaleDateString()}</p>
                                    </div>
                                    <div className="text-right">
                                        <span className="block text-2xl font-bold text-cyan-400">{stat.interactionCount}</span>
                                        <span className="text-xs text-gray-500">Actions</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>

                {/* Recent Activity */}
                <section>
                    <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
                    {activity.length === 0 ? (
                        <div className="p-6 bg-[#1A202C] rounded-xl border border-gray-700 text-gray-500 text-center">
                            No recent activity.
                        </div>
                    ) : (
                        <div className="bg-[#1A202C] border border-gray-700 rounded-xl overflow-hidden">
                            {activity.map((item, index) => (
                                <div
                                    key={index}
                                    className={`p-4 flex justify-between items-center ${index !== activity.length - 1 ? 'border-b border-gray-700' : ''
                                        } hover:bg-gray-700/30 transition-colors`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                                        <div>
                                            <p className="text-gray-200">{item.interactionType} - {item.api.name}</p>
                                        </div>
                                    </div>
                                    <span className="text-sm text-gray-500">{new Date(item.timestamp).toLocaleString()}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
}
