import axios from 'axios';

const api = axios.create({
  // Use Vite proxy in development or absolute URL if proxy isn't set up
  baseURL: 'http://localhost:8080/api', 
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to attach the JWT token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor to handle errors globally (optional)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // We could handle global 401 Unauthorized errors here to log the user out
    return Promise.reject(error);
  }
);

export default api;
