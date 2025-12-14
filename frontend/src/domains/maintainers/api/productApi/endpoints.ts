export const ENDPOINTS = {
    GET_PRODUCTS: '/productos',
    POST_PRODUCT: '/productos',
    GET_PRODUCT: '/productos/:id',
    PATCH_PRODUCT: '/productos/:id',
    DELETE_PRODUCT: '/productos/:id',
    GET_PRODUCT_BY_DESCRIPTION: '/productos/search/by-description/:descripcion',
    GET_PRODUCT_BY_CATEGORY: '/productos/search/by-category/:categoriaId',
    GET_PRODUCT_LOW_STOCK: '/productos/reports/low-stock',
} as const;