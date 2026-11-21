export default defineNuxtPlugin(() => {
    // const wipRoutes: string[] = [];
    const wipRoutes: string[] = ['/blogs', '/games'];

    addRouteMiddleware(
        'under_construction',
        (to) => {
            if (wipRoutes.includes(to.path)) {
                return navigateTo('/under_construction');
            }
        },
        { global: true }
    );
});
