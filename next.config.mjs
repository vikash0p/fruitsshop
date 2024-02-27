/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains: ["images.pexels.com", "demo.7uptheme.net", "www.pexels.com",  ],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    }
};

export default nextConfig;
