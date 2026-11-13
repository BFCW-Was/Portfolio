export default defineNuxtPlugin(() => {
    const maintenanceRoutes = ['/about', '/experience', '/projects', '/contact', '/blogs', '/games'];

    addRouteMiddleware(
        'under_construction',
        (to) => {
            if (maintenanceRoutes.includes(to.path)) {
                return navigateTo('/under_construction');
            }
        },
        { global: true }
    );
});
