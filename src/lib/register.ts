import axios from "axios";
import { API_ENDPOINTS } from '../constants/env';

export async function registerUser(data: FormData) {
    try {
        console.log('➡️ Registering with:', {
            url: API_ENDPOINTS.users.register,
            data,
        });

        const response = await axios.post(`${API_ENDPOINTS.users.register}`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        console.log();
        return response.data;
    } catch (error: any) {
        throw new Error(
            error?.response?.data?.message || 'Registration failed. Please try again.'
        );
    }
}