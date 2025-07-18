import { API_ENDPOINTS } from "../constants/env";
import { LoginFormInput, LoginResponse } from "../components/forms/login-form/LoginForm.types";
import axios from "axios";


export async function loginUser(data: LoginFormInput): Promise<LoginResponse> {
    const res = await axios.post<LoginResponse>(API_ENDPOINTS.auth.login, data);

    localStorage.setItem('userId', res.data.data.user.id.toString());
    localStorage.setItem('auth_token', res.data.data.user.token || '');

    return res.data;
}