/** @type {import('next').NextConfig} */
// const nextConfig = {};
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.ytimg.com',
                port: '',
            }
        ]
    },
    compiler: {
        styledComponents: true,
    }
};

export default nextConfig;