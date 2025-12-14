export const ENDPOINTS = {
    GET_CATEGORIES: '/categorias',
    POST_CATEGORY: '/categorias',
    GET_CATEGORY: '/categorias/:id',
    PATCH_CATEGORY: '/categorias/:id',
    DELETE_CATEGORY: '/categorias/:id',
    GET_CATEGORY_BY_NAME: '/categorias/search/by-name/:nombre',
} as const;