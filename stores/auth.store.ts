import { authApi, RegisterPayload, User } from '@/lib/api/auth';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  isProfileComplete: boolean;
  isRegisterPageVisible: boolean;
  tempPhone: string | null;
  tempRequestId: string | null;
  hasSelectedCourse: boolean; // New field
  route: 'signup' | 'login' | null;
  login: (phone: string, request_id: string) => Promise<any>;
  verifyOtp: (phone: string, code: string, request_id: string) => Promise<any>;
  register: (payload: RegisterPayload) => Promise<any>;
  logout: () => void;
  checkProfileCompletion: () => boolean;
  selectCourse: (courseId: number) => Promise<any>; // New method
  setIsRegisterPageVisible: (visible: boolean) => void;
  setHasSelectedCourse: (value: boolean) => void;

}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,
      isProfileComplete: false,
      tempPhone: null,
      tempRequestId: null,
      route: null,
      hasSelectedCourse: false, 
      isRegisterPageVisible: false,

      login: async (phone, request_id) => {
        try {
          const response = await authApi.login({ phone, request_id });
          console.log(response,"login response");
          
          set({ tempPhone: phone, tempRequestId: request_id, route: response.route});
          return response;
        } catch (error) {
          throw error;
        }
      },

      selectCourse: async (courseId: number) => {
        
        try {
          const response = await authApi.selectedCourse({ course_id: courseId });          
          set({ hasSelectedCourse: true });
          return response;
        } catch (error) {
          throw error;
        }
      },

      setHasSelectedCourse: (value: boolean) => {
        set({ hasSelectedCourse: value });
      },

      setIsRegisterPageVisible: (visible: boolean) => {
        set({ isRegisterPageVisible: visible });
      },


    verifyOtp: async (phone, code, request_id) => {
      try {
        let response;
        const route = get().route;
        
        if (route === 'signup') {
          response = await authApi.verifyOtp({ phone, code, request_id });
        } else if (route === 'login') {
          response = await authApi.LoginverifyOtp({ phone, code, request_id });
        } else {
          throw new Error('Invalid authentication route');
        }
        
        set({
          user: response.user,
          accessToken: response.access,
          refreshToken: response.refresh,
          isAuthenticated: true,
          isProfileComplete: Boolean(response.user.name),
        });

        return response;
      } catch (error) {
        throw error;
      }
    },

      register: async (payload) => {
        try {
          const response = await authApi.register(payload);          
          const currentUser = get().user;
          
          set({
            user: {
              ...currentUser,
              ...payload,
              id: currentUser?.id || 0, 
            },
            isProfileComplete: true
          });

          return response;
        } catch (error) {
          throw error;
        }
      },

      logout: () => {
        set({
          user: null,
          accessToken: null,
          refreshToken: null,
          isAuthenticated: false,
          isProfileComplete: false,
          tempPhone: null,
          tempRequestId: null,
          hasSelectedCourse: false, 

        });
        authApi.logout();
      },

      checkProfileCompletion: () => {
        const user = get().user;
        return Boolean(user?.username && user?.email && user?.district);
      }
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
        isAuthenticated: state.isAuthenticated,
        isProfileComplete: state.isProfileComplete,
        tempPhone: state.tempPhone,        
        tempRequestId: state.tempRequestId,
        hasSelectedCourse: state.hasSelectedCourse,
        isRegisterPageVisible: state.isRegisterPageVisible,
        
      })
    }
  )
);