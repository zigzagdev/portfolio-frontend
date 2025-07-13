import axios from "axios";
import { API_ENDPOINTS } from '../constants/env';

export async function registerUser(data: FormData) {
    try {
        const response = await axios.post(`${API_ENDPOINTS.users.register}`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error: any) {
        throw new Error(
            error?.response?.data?.message || 'Registration failed. Please try again.'
        );
    }
}