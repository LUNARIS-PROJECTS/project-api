import "dotenv/config";
import prisma from "../src/prisma.js";

/**
 * Seed Script - Populates database with real API data
 * Run with: node scripts/seed.js
 */

async function main() {
    console.log("🌱 Starting database seed...\n");

    // -------------------------------------------------------------------------
    // CATEGORIES
    // -------------------------------------------------------------------------
    console.log("📁 Creating categories...");
    const categories = await Promise.all([
        prisma.category.upsert({
            where: { slug: "ai" },
            update: {},
            create: { name: "AI & Machine Learning", slug: "ai", icon: "🤖", description: "Artificial intelligence and ML APIs" },
        }),
        prisma.category.upsert({
            where: { slug: "payments" },
            update: {},
            create: { name: "Payments", slug: "payments", icon: "💳", description: "Payment processing and billing APIs" },
        }),
        prisma.category.upsert({
            where: { slug: "weather" },
            update: {},
            create: { name: "Weather", slug: "weather", icon: "🌤️", description: "Weather data and forecasting APIs" },
        }),
        prisma.category.upsert({
            where: { slug: "communication" },
            update: {},
            create: { name: "Communication", slug: "communication", icon: "💬", description: "SMS, email, and messaging APIs" },
        }),
        prisma.category.upsert({
            where: { slug: "maps" },
            update: {},
            create: { name: "Maps & Location", slug: "maps", icon: "🗺️", description: "Geolocation and mapping APIs" },
        }),
        prisma.category.upsert({
            where: { slug: "crypto" },
            update: {},
            create: { name: "Cryptocurrency", slug: "crypto", icon: "₿", description: "Crypto data and blockchain APIs" },
        }),
        prisma.category.upsert({
            where: { slug: "storage" },
            update: {},
            create: { name: "Cloud Storage", slug: "storage", icon: "☁️", description: "File storage and CDN APIs" },
        }),
        prisma.category.upsert({
            where: { slug: "authentication" },
            update: {},
            create: { name: "Authentication", slug: "authentication", icon: "🔐", description: "Auth and identity APIs" },
        }),
    ]);

    const categoryMap = {};
    categories.forEach((c) => (categoryMap[c.slug] = c.id));
    console.log(`   ✅ Created ${categories.length} categories\n`);

    // -------------------------------------------------------------------------
    // PROVIDERS
    // -------------------------------------------------------------------------
    console.log("🏢 Creating providers...");
    const providers = await Promise.all([
        prisma.provider.upsert({
            where: { name: "OpenAI" },
            update: {},
            create: { name: "OpenAI", website: "https://openai.com", description: "AI research and deployment company" },
        }),
        prisma.provider.upsert({
            where: { name: "Stripe" },
            update: {},
            create: { name: "Stripe", website: "https://stripe.com", description: "Payment infrastructure for the internet" },
        }),
        prisma.provider.upsert({
            where: { name: "OpenWeather" },
            update: {},
            create: { name: "OpenWeather", website: "https://openweathermap.org", description: "Weather data provider" },
        }),
        prisma.provider.upsert({
            where: { name: "Twilio" },
            update: {},
            create: { name: "Twilio", website: "https://twilio.com", description: "Cloud communications platform" },
        }),
        prisma.provider.upsert({
            where: { name: "Google" },
            update: {},
            create: { name: "Google", website: "https://cloud.google.com", description: "Google Cloud Platform services" },
        }),
        prisma.provider.upsert({
            where: { name: "CoinGecko" },
            update: {},
            create: { name: "CoinGecko", website: "https://coingecko.com", description: "Cryptocurrency data aggregator" },
        }),
        prisma.provider.upsert({
            where: { name: "Anthropic" },
            update: {},
            create: { name: "Anthropic", website: "https://anthropic.com", description: "AI safety company" },
        }),
        prisma.provider.upsert({
            where: { name: "SendGrid" },
            update: {},
            create: { name: "SendGrid", website: "https://sendgrid.com", description: "Email delivery platform" },
        }),
        prisma.provider.upsert({
            where: { name: "Auth0" },
            update: {},
            create: { name: "Auth0", website: "https://auth0.com", description: "Identity platform" },
        }),
        prisma.provider.upsert({
            where: { name: "Cloudinary" },
            update: {},
            create: { name: "Cloudinary", website: "https://cloudinary.com", description: "Media management platform" },
        }),
        prisma.provider.upsert({
            where: { name: "Mapbox" },
            update: {},
            create: { name: "Mapbox", website: "https://mapbox.com", description: "Maps and location platform" },
        }),
        prisma.provider.upsert({
            where: { name: "WeatherAPI" },
            update: {},
            create: { name: "WeatherAPI", website: "https://weatherapi.com", description: "Weather and geo data provider" },
        }),
    ]);

    const providerMap = {};
    providers.forEach((p) => (providerMap[p.name] = p.id));
    console.log(`   ✅ Created ${providers.length} providers\n`);

    // -------------------------------------------------------------------------
    // APIs
    // -------------------------------------------------------------------------
    console.log("🔌 Creating APIs...");

    const apisData = [
        // AI APIs
        {
            name: "OpenAI API",
            slug: "openai-api",
            description: "Access GPT-4, DALL-E, Whisper and more for AI-powered applications. Industry-leading language models for text generation, code completion, and image creation.",
            baseUrl: "https://api.openai.com/v1",
            docsUrl: "https://platform.openai.com/docs",
            pricingType: "PAID",
            pricingDetails: "$0.002 per 1K tokens (GPT-4 Turbo)",
            authType: "API_KEY",
            rateLimit: "Variable by tier",
            hasFreeTier: false,
            reliabilityScore: 9.5,
            features: ["Text Generation", "Image Creation", "Code Completion", "Embeddings", "Speech-to-Text"],
            providerId: providerMap["OpenAI"],
            categoryId: categoryMap["ai"],
        },
        {
            name: "Claude API",
            slug: "claude-api",
            description: "Anthropic's Claude is a next-generation AI assistant for safe, accurate, and reliable AI applications with exceptional reasoning abilities.",
            baseUrl: "https://api.anthropic.com/v1",
            docsUrl: "https://docs.anthropic.com",
            pricingType: "PAID",
            pricingDetails: "$0.008 per 1K input tokens (Claude 3 Opus)",
            authType: "API_KEY",
            rateLimit: "Tier-based rate limits",
            hasFreeTier: false,
            reliabilityScore: 9.3,
            features: ["Text Generation", "Code Analysis", "Document Processing", "Long Context", "Vision"],
            providerId: providerMap["Anthropic"],
            categoryId: categoryMap["ai"],
        },

        // Payments APIs
        {
            name: "Stripe API",
            slug: "stripe-api",
            description: "Complete payment platform for internet businesses. Accept payments, manage recurring billing, prevent fraud, and expand globally.",
            baseUrl: "https://api.stripe.com/v1",
            docsUrl: "https://stripe.com/docs/api",
            pricingType: "PAID",
            pricingDetails: "2.9% + $0.30 per transaction",
            authType: "API_KEY",
            rateLimit: "100 requests/sec",
            hasFreeTier: true,
            reliabilityScore: 9.8,
            features: ["Payments", "Subscriptions", "Invoicing", "Fraud Detection", "Global Payouts"],
            providerId: providerMap["Stripe"],
            categoryId: categoryMap["payments"],
        },

        // Weather APIs
        {
            name: "OpenWeatherMap API",
            slug: "openweathermap-api",
            description: "Real-time weather data, forecasts, and historical weather information for any location on Earth. Trusted by millions of developers.",
            baseUrl: "https://api.openweathermap.org/data/2.5",
            docsUrl: "https://openweathermap.org/api",
            pricingType: "FREEMIUM",
            pricingDetails: "Free: 60 calls/min, Pro starts at $40/mo",
            authType: "API_KEY",
            rateLimit: "60 calls/min (free)",
            hasFreeTier: true,
            reliabilityScore: 9.0,
            features: ["Current Weather", "5-Day Forecast", "Historical Data", "Weather Maps", "Air Pollution Data"],
            providerId: providerMap["OpenWeather"],
            categoryId: categoryMap["weather"],
        },
        {
            name: "WeatherAPI",
            slug: "weatherapi",
            description: "Fast and reliable weather data API with forecasts, historical data, and astronomy info. Includes geocoding and time zone APIs.",
            baseUrl: "https://api.weatherapi.com/v1",
            docsUrl: "https://www.weatherapi.com/docs/",
            pricingType: "FREEMIUM",
            pricingDetails: "Free: 1M calls/mo, Pro starts at $9/mo",
            authType: "API_KEY",
            rateLimit: "1M calls/month (free)",
            hasFreeTier: true,
            reliabilityScore: 8.7,
            features: ["Real-time Weather", "14-Day Forecast", "Historical Data", "Astronomy", "Time Zone"],
            providerId: providerMap["WeatherAPI"],
            categoryId: categoryMap["weather"],
        },

        // Communication APIs
        {
            name: "Twilio API",
            slug: "twilio-api",
            description: "Programmable communication tools for making and receiving phone calls, send and receive SMS, and perform other communication functions.",
            baseUrl: "https://api.twilio.com",
            docsUrl: "https://www.twilio.com/docs",
            pricingType: "PAID",
            pricingDetails: "SMS: $0.0075/msg, Voice: $0.0085/min",
            authType: "BASIC",
            rateLimit: "Concurrency-based",
            hasFreeTier: true,
            reliabilityScore: 9.2,
            features: ["SMS", "Voice Calls", "Video", "WhatsApp", "Email"],
            providerId: providerMap["Twilio"],
            categoryId: categoryMap["communication"],
        },
        {
            name: "SendGrid API",
            slug: "sendgrid-api",
            description: "Cloud-based email delivery service. Send transactional and marketing emails with high deliverability and detailed analytics.",
            baseUrl: "https://api.sendgrid.com/v3",
            docsUrl: "https://docs.sendgrid.com",
            pricingType: "FREEMIUM",
            pricingDetails: "Free: 100 emails/day, Pro starts at $19.95/mo",
            authType: "API_KEY",
            rateLimit: "100 emails/day (free)",
            hasFreeTier: true,
            reliabilityScore: 8.9,
            features: ["Transactional Email", "Marketing Campaigns", "Email Templates", "Analytics", "Deliverability Tools"],
            providerId: providerMap["SendGrid"],
            categoryId: categoryMap["communication"],
        },

        // Maps APIs
        {
            name: "Google Maps Platform",
            slug: "google-maps-api",
            description: "Embed maps, get directions, find places, and access street view images. The most comprehensive mapping platform available.",
            baseUrl: "https://maps.googleapis.com/maps/api",
            docsUrl: "https://developers.google.com/maps/documentation",
            pricingType: "FREEMIUM",
            pricingDetails: "$200 free credit/month, then pay-as-you-go",
            authType: "API_KEY",
            rateLimit: "Unlimited (billed)",
            hasFreeTier: true,
            reliabilityScore: 9.7,
            features: ["Maps", "Routes & Directions", "Places API", "Geocoding", "Street View"],
            providerId: providerMap["Google"],
            categoryId: categoryMap["maps"],
        },
        {
            name: "Mapbox API",
            slug: "mapbox-api",
            description: "Custom maps, navigation, and location search. Developer-friendly alternative to Google Maps with beautiful default styles.",
            baseUrl: "https://api.mapbox.com",
            docsUrl: "https://docs.mapbox.com",
            pricingType: "FREEMIUM",
            pricingDetails: "50K free loads/mo, then $0.50 per 1K",
            authType: "API_KEY",
            rateLimit: "600 requests/min",
            hasFreeTier: true,
            reliabilityScore: 9.1,
            features: ["Custom Styles", "Navigation", "Geocoding", "Static Maps", "3D Maps"],
            providerId: providerMap["Mapbox"],
            categoryId: categoryMap["maps"],
        },

        // Crypto APIs
        {
            name: "CoinGecko API",
            slug: "coingecko-api",
            description: "Comprehensive cryptocurrency data including live prices, trading volume, market cap, and historical data for thousands of coins.",
            baseUrl: "https://api.coingecko.com/api/v3",
            docsUrl: "https://www.coingecko.com/en/api/documentation",
            pricingType: "FREEMIUM",
            pricingDetails: "Free: 10-30 calls/min, Pro starts at $129/mo",
            authType: "API_KEY",
            rateLimit: "30 calls/min (free)",
            hasFreeTier: true,
            reliabilityScore: 8.5,
            features: ["Live Prices", "Market Cap", "Exchange Data", "Historical Data", "NFT Data"],
            providerId: providerMap["CoinGecko"],
            categoryId: categoryMap["crypto"],
        },

        // Storage APIs
        {
            name: "Cloudinary API",
            slug: "cloudinary-api",
            description: "End-to-end image and video management. Upload, store, transform, optimize, and deliver media at scale.",
            baseUrl: "https://api.cloudinary.com/v1_1",
            docsUrl: "https://cloudinary.com/documentation",
            pricingType: "FREEMIUM",
            pricingDetails: "Free: 25 credits/mo, Plus starts at $89/mo",
            authType: "BASIC",
            rateLimit: "500 requests/hour",
            hasFreeTier: true,
            reliabilityScore: 9.0,
            features: ["Image Upload", "Video Upload", "Transformations", "AI Features", "CDN Delivery"],
            providerId: providerMap["Cloudinary"],
            categoryId: categoryMap["storage"],
        },

        // Auth APIs
        {
            name: "Auth0 API",
            slug: "auth0-api",
            description: "Universal authentication & authorization platform. Add secure login, MFA, and user management to any app.",
            baseUrl: "https://YOUR_DOMAIN.auth0.com/api/v2",
            docsUrl: "https://auth0.com/docs/api",
            pricingType: "FREEMIUM",
            pricingDetails: "Free: 7K users, Essentials starts at $23/mo",
            authType: "OAUTH2",
            rateLimit: "Tier-based limits",
            hasFreeTier: true,
            reliabilityScore: 9.4,
            features: ["Social Login", "MFA", "SSO", "User Management", "Passwordless"],
            providerId: providerMap["Auth0"],
            categoryId: categoryMap["authentication"],
        },
    ];

    for (const apiData of apisData) {
        await prisma.api.upsert({
            where: { slug: apiData.slug },
            update: apiData,
            create: apiData,
        });
    }

    console.log(`   ✅ Created ${apisData.length} APIs\n`);

    // -------------------------------------------------------------------------
    // ENDPOINTS (sample for OpenAI)
    // -------------------------------------------------------------------------
    console.log("🔗 Creating sample endpoints...");

    const openaiApi = await prisma.api.findUnique({ where: { slug: "openai-api" } });
    if (openaiApi) {
        const endpoints = [
            { path: "/chat/completions", method: "POST", summary: "Create chat completion", apiId: openaiApi.id },
            { path: "/completions", method: "POST", summary: "Create text completion", apiId: openaiApi.id },
            { path: "/images/generations", method: "POST", summary: "Create image", apiId: openaiApi.id },
            { path: "/embeddings", method: "POST", summary: "Create embeddings", apiId: openaiApi.id },
            { path: "/audio/transcriptions", method: "POST", summary: "Create transcription", apiId: openaiApi.id },
        ];

        for (const ep of endpoints) {
            await prisma.endpoint.upsert({
                where: { apiId_path_method: { apiId: ep.apiId, path: ep.path, method: ep.method } },
                update: {},
                create: ep,
            });
        }
        console.log(`   ✅ Created ${endpoints.length} sample endpoints\n`);
    }

    console.log("✨ Seed complete!\n");
}

main()
    .catch((e) => {
        console.error("❌ Seed error:", e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
