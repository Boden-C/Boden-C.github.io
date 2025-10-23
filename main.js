/**
 * Client-side router for GitHub Pages
 * @module Router
 */

/**
 * Route configuration mapping clean URLs to actual HTML files
 * @type {Record<string, string>}
 */
const routes = {
    '/games': '/games.html',
    '/keytest': '/keytest.html'
};

/**
 * Navigates to a specified route
 * @param {string} route - The route path (e.g., '/games')
 * @returns {void}
 */
function navigateTo(route) {
    const normalizedRoute = route.startsWith('/') ? route : `/${route}`;
    const targetFile = routes[normalizedRoute];

    if (targetFile) {
        window.location.href = targetFile;
    } else {
        console.error(`Route not found: ${normalizedRoute}`);
    }
}

/**
 * Removes the current route and navigates back to home
 * @returns {void}
 */
function navigateFrom() {
    window.location.href = '/';
}

/**
 * Gets the route configuration
 * @returns {Record<string, string>}
 */
function getRoutes() {
    return { ...routes };
}

/**
 * Checks if a route exists in the configuration
 * @param {string} route - The route path to check
 * @returns {boolean}
 */
function routeExists(route) {
    const normalizedRoute = route.startsWith('/') ? route : `/${route}`;
    return normalizedRoute in routes;
}

if (typeof window !== 'undefined') {
    window.Router = {
        navigateTo,
        navigateFrom,
        getRoutes,
        routeExists,
        routes
    };
}

// Normalize certain file-based URLs to their clean route names (for GitHub Pages).
// Example: /keytest.html -> /keytest
if (typeof window !== 'undefined' && window.history && window.history.replaceState) {
    const path = window.location.pathname || '';
    if (path.endsWith('/keytest.html')) {
        window.history.replaceState(null, '', '/keytest');
    }
}
