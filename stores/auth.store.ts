import { authApi, RegisterPayload, User } from '@/lib/api/auth';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  isProfileComplete: boolean;
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
  checkCourseSelection: () => boolean; // New method
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

      login: async (phone, request_id) => {
        try {
          const response = await authApi.login({ phone, request_id });
          set({ tempPhone: phone, tempRequestId: request_id, route: response.route});
          return response;
        } catch (error) {
          throw error;
        }
      },

      selectCourse: async (courseId: number) => {
        
        try {
          const response = await authApi.selectedCourse({ course_id: courseId });
          console.log(response,"what about this");
          
          set({ hasSelectedCourse: true });
          return response;
        } catch (error) {
          throw error;
        }
      },

      checkCourseSelection: () => {
        return get().hasSelectedCourse;
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
          console.log(response,"what is responseeeeee");
          
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
        hasSelectedCourse: state.hasSelectedCourse,
      })
    }
  )
);