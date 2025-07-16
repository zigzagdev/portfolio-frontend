export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const API_ENDPOINTS = {
    users: {
        register: `${API_BASE_URL}/users/register`,
        login: `${API_BASE_URL}/users/login`,
        detail: (id: string) => `${API_BASE_URL}/users/show/${id}`,
        update: (id: string) => `${API_BASE_URL}/users/${id}`,
        delete: (id: string) => `${API_BASE_URL}/users/${id}`,
    },
    posts: {
        create: `${API_BASE_URL}/posts`,
        list:(id: string) =>  `${API_BASE_URL}/users/${id}/posts`,
        detail: (id: string) => `${API_BASE_URL}/posts/${id}`,
        update: (id: string) => `${API_BASE_URL}/posts/${id}`,
        delete: (id: string) => `${API_BASE_URL}/posts/${id}`,
    },
    auth: {
        logout: `${API_BASE_URL}/auth/logout`,
        me: `${API_BASE_URL}/auth/me`,
    },
};