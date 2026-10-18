export default defineNuxtConfig({
    modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxt/image', '@nuxtjs/i18n'],
    devtools: { enabled: true },
    eslint: { config: { stylistic: false } },
    compatibilityDate: '2026-06-30',

    app: {
        // GitHub Pages
        baseURL: '/Portfolio/',
        // SEO
        head: {
            link: [{ rel: 'icon', type: 'image/svg+xml', href: '/images/logos/MyPortfolio.png' }],
        },
    },

    // Diseño
    css: ['~/assets/css/main.css'],
    colorMode: { preference: 'dark', fallback: 'dark' },

    // Internacionalización
    i18n: {
        defaultLocale: 'es',
        strategy: 'prefix_except_default',
        locales: [
            { code: 'es', language: 'es-ES', name: 'Español', file: 'es.json' },
            { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
        ],
    },
});
