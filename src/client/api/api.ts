import { QueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchInterval: false,
      retry: false,
      staleTime: Infinity,
    },
  },
});

export const pureInstance = axios.create({
  baseURL: 'http://localhost:3001/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});
export const refreshInstance = axios.create({
  baseURL: 'http://localhost:3001/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});
refreshInstance.interceptors.response.use(
  (res) => res,
  async (error) => {
    if (error.response?.status === 401 && error.config) {
      try {
        await pureInstance.get('/refresh');
        return pureInstance.request(error.config);
      } catch (e) {
        throw error;
      }
    }
    throw error;
  }
);
