export const getBasePath = () => {
    const isProd = process.env.NODE_ENV === 'production';
    return isProd ? '/portfolio' : '';
};

export const getAssetPath = (path: string) => {
    if (!path) return '';
    if (path.startsWith('http') || path.startsWith('data:')) return path;
    const basePath = getBasePath();
    // Avoid double slashes if path starts with /
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${basePath}${cleanPath}`;
};
