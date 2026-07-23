import axios from "axios";

// Create Axios instance
const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "https://frontend-2-3vs9.onrender.com/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Automatically attach JWT token (if available)
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Handle common response errors
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          console.log("Unauthorized");
          break;

        case 403:
          console.log("Access Denied");
          break;

        case 404:
          console.log("Resource Not Found");
          break;

        case 500:
          console.log("Internal Server Error");
          break;

        default:
          console.log(error.response.data.message);
      }
    } else {
      console.log("Unable to connect to server.");
    }

    return Promise.reject(error);
  }
);

export default API;
