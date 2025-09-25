export const API_BASE_URL = 'http://192.168.8.235:5000/api';

export const API_ROUTES = {
    AUTH: {
        LOGIN: `${API_BASE_URL}/users/login`,
        FORGOT_PASSWORD: `${API_BASE_URL}/user/forgot-password`,
        VERIFY_OTP: `${API_BASE_URL}/user/verify-otp`,
        RESET_PASSWORD: `${API_BASE_URL}/user/reset-password`,
    },
    USER: {
        GET_USERS: `${API_BASE_URL}/users`,
        CREATE_USER: `${API_BASE_URL}/users`,
        UPDATE_USER: (userId) => `${API_BASE_URL}/users/${userId}`,
        DELETE_USER: (userId) => `${API_BASE_URL}/users/${userId}`,
    }
}