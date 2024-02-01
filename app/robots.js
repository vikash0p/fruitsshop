export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: ['/','/shop'],
            disallow: ['/product', ],
        },
        sitemap: 'http://localhost:3000',
    }
}