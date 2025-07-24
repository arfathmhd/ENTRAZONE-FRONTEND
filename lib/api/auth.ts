import axiosInstance from './axios';

export interface LoginPayload {
  phone: string;
  request_id: string;
}

export interface User {
  id: number;
  username: string;
  phone: string;
  email: string;
  district?: string;
  address?: string;
  image?: string;
}

export interface RegisterPayload {
  email: string;
  password?: string;
  username: string;
  district: string;
  address: string;
  phone: string;
  request_id: string;
}

export interface VerifyOtpPayload {
  phone: string;
  code: string;
  request_id:string;
}

export interface AuthResponse {
  status: string;
  message: string;
  user: {
    id: number;
    name: string;
    image: string;
    phone: string;
    email: string;
    district: string;
  };
  refresh: string;
  access: string;
}

export interface SelectedCoursePayload {
course_id:number
}

export const authApi = {
  login: async (payload: LoginPayload) => {
    const response = await axiosInstance.post('/v1/otp-auth/', payload);    
    console.log(response,"this is backend response");
    
    return response.data;
  },

  register: async (payload: RegisterPayload) => {
    const response = await axiosInstance.post('/v1/register/', payload);
    console.log(response,"chek this");
    
    return response.data;
  },

  verifyOtp: async (payload: VerifyOtpPayload) => {
    const response = await axiosInstance.post('/v1/signup-otp-auth/', payload);
    console.log(response,"what is response show me");
    
    return response.data;
  },

  LoginverifyOtp: async (payload: VerifyOtpPayload) => {
    const response = await axiosInstance.post('/v1/otp-login-verify/', payload);
    console.log(response,"what lgin show me");
    return response.data;
  },




  getCourses: async () => {
        try {
            const response = await axiosInstance.get('/v1/course-list/');             
            return response.data;
        } catch (error) {
            console.error('Error fetching window series:', error);
            throw error;
        }
    },

  selectedCourse: async (payload: SelectedCoursePayload) => {
  const response = await axiosInstance.get('/v1/course-select/', {
    params: payload, 
  });    console.log(response,"what selected");
    return response.data;
  },  

  logout: async () => {
    const response = await axiosInstance.post('/v1/logout/');
    return response.data;
  },

};