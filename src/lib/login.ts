import { API_URL } from '../constants/env';

export type LoginFormInput = {
    email: string;
    password: string;
};

export async function loginUser(data: LoginFormInput): Promise<{ message: string }> {
    const res = await fetch(`${API_URL}/api/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || `Login failed: ${res.status}`);
    }

    const result = await res.json();
    return result;
}