import { useNavigate } from 'react-router-dom';
import { loginStart, loginSuccess, loginFailure, logout } from './Pages/Login/loginSlice';
import authService from './authService'; // Your authentication service

export const login = (ssn, password) => async (dispatch) => {
    const navigate = useNavigate(); // Initialize the useNavigate hook
    try {
        dispatch(loginStart());
        const response = await authService.login(ssn, password);
        // Log the entire response
        console.log('API Response:', response);

        const { token, ssn, role, userName } = response;

        // Set the Authorization header
        authService.setAuthHeader(token);

        dispatch(loginSuccess({ ssn, role, userName, token }));
        console.log("Login succ: ", userName, "Token", token, "role", role);


        if (response.role === 'ITTechnical') {
            navigate('/ithome');
        } else {
            navigate('/home');
        }

    } catch (error) {
        dispatch(loginFailure(error.message));
    }
};

export const logoutUser = () => async (dispatch) => {
    const navigate = useNavigate(); // Initialize the useNavigate hook
    dispatch(logout());
    navigate('/');
};