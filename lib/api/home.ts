import axiosInstance from './axios';




export const homeApi = {
  fetchHomeData:  async () => {
        try {
            const response = await axiosInstance.get('/v1/home/'); 
            console.log(response,"this is home data");
            
            return response.data;
        } catch (error) {
            console.error('Error fetching window series:', error);
            throw error;
        }
    },
};