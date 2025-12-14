export const ENDPOINTS = {
    GET_WAREHOUSES: '/almacenes',
    POST_WAREHOUSE: '/almacenes',
    GET_WAREHOUSE: '/almacenes/:id',
    PATCH_WAREHOUSE: '/almacenes/:id',
    DELETE_WAREHOUSE: '/almacenes/:id',
    GET_WAREHOUSE_BY_NAME: '/almacenes/search/by-name/:nombre',
    GET_WAREHOUSE_BY_LOCATION: '/almacenes/search/by-location/:ubicacion',
    GET_WAREHOUSE_BY_RESPONSIBLE: '/almacenes/search/by-responsible/:responsable',
    GET_WAREHOUSE_BY_MIN_CAPACITY: '/almacenes/search/by-min-capacity/:minCapacidad',
} as const;