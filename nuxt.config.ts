import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: { enabled: true },

    // Módulos
    modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/fonts', '@nuxt/icon', '@nuxtjs/i18n'],

    // Configuración para Github Pages
    ssr: false,
    app: {
        baseURL: '/Portfolio/',
    },

    // SCSS:
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "~/assets/styles/global/_variables.scss" as *;',
                },
            },
        },
    },

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
