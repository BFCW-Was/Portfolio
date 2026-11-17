import type { RouterConfig } from '@nuxt/schema';

export default {
    scrollBehavior(to, from, savedPosition) {
        const scrollContainer = document.querySelector('#main-container');

        if (scrollContainer) {
            scrollContainer.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
            });
        }

        return savedPosition || false;
    },
} satisfies RouterConfig;
