export const usePublicAsset = (path: string) => {
    const { baseURL } = useRuntimeConfig().app;
    return `${baseURL}${path.replace(/^\//, '')}`;
};
