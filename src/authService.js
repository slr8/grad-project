// authService.js
import axios from 'axios';

const BASE_URL = 'your-api-endpoint';

const authService = {
    login: async (ssn, password) => {
        const response = await axios.post(`${BASE_URL}/login`, { ssn, password });
        return response.data;
    },
    // Function to set the authorization header for Axios
    setAuthHeader: (token) => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    },
};

export default authService;
