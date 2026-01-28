import React from "react";

/**
 * DNA Strand Feature Matching Component
 * Visual comparison of API features using a vertical strand of color-coded rungs.
 */

const FEATURES = [
    { key: "freeTier", label: "Free Tier" },
    { key: "rateLimits", label: "Rate Limits" },
    { key: "sdkAvailability", label: "SDK Availability" },
    { key: "pricingTransparency", label: "Pricing Transparency" },
    { key: "compliance", label: "Compliance & Security" },
    { key: "setupEase", label: "Setup Ease" },
    { key: "regionalAvailability", label: "Regional Availability" },
    { key: "documentation", label: "Documentation Quality" },
];

const getStatus = (api, featureKey) => {
    switch (featureKey) {
        case "freeTier":
            return api.hasFreeTier ?
                { color: "bg-green-500", shadow: "shadow-[0_0_8px_#22c55e]", tooltip: "Generous free tier available" } :
                { color: "bg-gray-700", shadow: "", tooltip: "No free tier found" };

        case "rateLimits":
            return api.rateLimit && !api.rateLimit.toLowerCase().includes("variable") ?
                { color: "bg-green-500", shadow: "shadow-[0_0_8px_#22c55e]", tooltip: `Defined limits: ${api.rateLimit}` } :
                { color: "bg-orange-500", shadow: "shadow-[0_0_8px_#f97316]", tooltip: "Variable or tier-based limits" };

        case "sdkAvailability":
            const hasSdk = api.features?.some(f => f.toLowerCase().includes("sdk") || f.toLowerCase().includes("library"));
            return hasSdk ?
                { color: "bg-green-500", shadow: "shadow-[0_0_8px_#22c55e]", tooltip: "Official SDKs available" } :
                { color: "bg-orange-500", shadow: "shadow-[0_0_8px_#f97316]", tooltip: "REST API only" };

        case "pricingTransparency":
            return api.pricingDetails ?
                { color: "bg-green-500", shadow: "shadow-[0_0_8px_#22c55e]", tooltip: api.pricingDetails } :
                { color: "bg-gray-700", shadow: "", tooltip: "Contact for pricing" };

        case "compliance":
            const hasSecurity = api.features?.some(f => ["security", "fraud", "auth", "mfa", "encryption"].some(k => f.toLowerCase().includes(k)));
            return hasSecurity ?
                { color: "bg-green-500", shadow: "shadow-[0_0_8px_#22c55e]", tooltip: "Enterprise-grade security" } :
                { color: "bg-orange-500", shadow: "shadow-[0_0_8px_#f97316]", tooltip: "Standard security features" };

        case "setupEase":
            if (api.reliabilityScore >= 9.5) return { color: "bg-green-500", shadow: "shadow-[0_0_8px_#22c55e]", tooltip: "Easy integration & high reliability" };
            if (api.reliabilityScore >= 8.5) return { color: "bg-orange-500", shadow: "shadow-[0_0_8px_#f97316]", tooltip: "Moderate setup complexity" };
            return { color: "bg-gray-700", shadow: "", tooltip: "Complex setup or legacy API" };

        case "regionalAvailability":
            const isGlobal = api.features?.some(f => f.toLowerCase().includes("global") || f.toLowerCase().includes("world") || f.toLowerCase().includes("multi-region"));
            return isGlobal ?
                { color: "bg-green-500", shadow: "shadow-[0_0_8px_#22c55e]", tooltip: "Global distribution network" } :
                { color: "bg-orange-500", shadow: "shadow-[0_0_8px_#f97316]", tooltip: "Limited regional support" };

        case "documentation":
            return api.docsUrl ?
                { color: "bg-green-500", shadow: "shadow-[0_0_8px_#22c55e]", tooltip: "Comprehensive documentation" } :
                { color: "bg-gray-700", shadow: "", tooltip: "Documentation unavailable" };

        default:
            return { color: "bg-gray-700", shadow: "", tooltip: "Data not available" };
    }
};

export default function ApiDnaStrand({ api, onRemove }) {
    if (!api) return null;

    return (
        <div className="relative group flex flex-col items-center p-10 rounded-[2.5rem] transition-all duration-700 animate-[fadeIn_0.5s_ease-out] hover:translate-y-[-12px]">
            {/* Visual Highlight Specimen Card */}
            <div className="absolute inset-0 bg-[#0F141B]/40 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-all duration-700 -z-20 border border-white/5 backdrop-blur-[10px] shadow-[inset_0_0_40px_rgba(255,255,255,0.02),0_20px_50px_rgba(0,0,0,0.6)] group-hover:border-cyan-500/20 group-hover:shadow-[0_0_40px_rgba(34,211,238,0.05),0_30px_60px_rgba(0,0,0,0.8)]"></div>

            {/* Premium Close Button - Glass Morphism */}
            <button
                onClick={() => onRemove(api.id)}
                className="absolute top-5 right-5 w-8 h-8 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-gray-500 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center z-30 hover:bg-red-500 hover:border-red-500 hover:text-white hover:rotate-90 hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] active:scale-90"
                title="Remove Analysis"
            >
                <span className="text-xl font-light leading-none">&times;</span>
            </button>

            {/* Specimen Header */}
            <div className="mb-8 text-center px-2 select-none">
                <h4 className="text-cyan-400 font-black text-lg md:text-xl tracking-tighter uppercase drop-shadow-[0_0_8px_rgba(34,211,238,0.2)] group-hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.4)] transition-all">
                    {api.name}
                </h4>
                <div className="flex items-center justify-center gap-2 mt-2">
                    <span className="w-1 h-1 rounded-full bg-gray-700"></span>
                    <p className="text-[9px] text-gray-500 font-black uppercase tracking-[0.3em] brightness-110">
                        {api.provider.name}
                    </p>
                    <span className="w-1 h-1 rounded-full bg-gray-700"></span>
                </div>
            </div>

            {/* The DNA Strand Core */}
            <div className="relative flex flex-col items-center gap-[11px] select-none">
                {/* Vertical Backbone - Cyber Style */}
                <div className="absolute top-[-10px] bottom-[-10px] w-[2px] bg-gradient-to-b from-transparent via-gray-800 to-transparent -z-10 group-hover:via-cyan-900/40 transition-colors duration-700"></div>

                {FEATURES.map((feat, index) => {
                    const { color, shadow, tooltip } = getStatus(api, feat.key);
                    return (
                        <div
                            key={feat.key}
                            className="relative flex items-center justify-center w-36 h-[14px] group/rung"
                        >
                            {/* Horizontal Rung - Cyber Glow */}
                            <div className={`w-full h-[3px] rounded-full ${color} ${shadow} opacity-60 group-hover/rung:opacity-100 group-hover/rung:h-[5px] group-hover/rung:scale-x-105 transition-all duration-300`}></div>

                            {/* Sophisticated Tooltip */}
                            <div className="absolute left-full ml-6 px-4 py-3 bg-[#0A0F16]/95 backdrop-blur-2xl border border-white/10 rounded-xl text-[12px] text-gray-300 whitespace-nowrap opacity-0 pointer-events-none group-hover/rung:opacity-100 transition-all z-40 shadow-[0_15px_30px_rgba(0,0,0,0.8)] translate-x-4 group-hover/rung:translate-x-0 ring-1 ring-white/5">
                                <span className="text-cyan-400 font-bold uppercase tracking-widest mr-3 border-r border-white/10 pr-3">{feat.label}</span>
                                <span className="font-medium text-gray-200">{tooltip}</span>
                                {/* Pointer */}
                                <div className="absolute right-full top-1/2 -translate-y-1/2 border-[8px] border-transparent border-r-[#0A0F16]/95"></div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* CTA Button */}
            <div className="mt-12 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-6 group-hover:translate-y-0">
                <a
                    href={api.provider.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-2.5 bg-gradient-to-r from-cyan-600 to-cyan-400 text-black text-[10px] font-black rounded-lg uppercase tracking-[0.2em] hover:brightness-125 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all active:scale-95 shadow-xl"
                >
                    Initialize Connection
                </a>
            </div>
        </div>
    );
}
