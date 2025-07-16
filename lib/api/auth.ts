import axiosInstance from './axios';

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  email: string;
  password: string;
  name: string;
}

export interface VerifyOtpPayload {
  phone: string;
  code: string;
  request_id:string;
}

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
}
export const authApi = {
  login: async (payload: LoginPayload) => {
    const response = await axiosInstance.post('/v1/login/', payload);
    return response.data;
  },

  register: async (payload: RegisterPayload) => {
    const response = await axiosInstance.post('/v1/register/', payload);
    return response.data;
  },

  verifyOtp: async (payload: VerifyOtpPayload) => {
    const response = await axiosInstance.post('/v1/otp-login-verify/', payload);
    return response.data;
  },

  logout: async () => {
    const response = await axiosInstance.post('/v1/logout/');
    return response.data;
  },

};