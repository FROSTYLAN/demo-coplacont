export const AUTH_ENDPOINTS = {
    LOGIN: '/auth/login',
    RECOVER_PASSWORD: '/auth/request-password-reset',
    VALIDATE_RESET_TOKEN: '/auth/validate-reset-token',
    RESET_PASSWORD: '/auth/reset-password',
} as const;