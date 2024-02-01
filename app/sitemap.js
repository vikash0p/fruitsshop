export default function sitemap() {
    return [
        {
            url: 'http://localhost:3000',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'http://localhost:3000/shop',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://acme.com/product',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.2,
        },
    ]
}