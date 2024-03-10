import { loginStart, loginSuccess, loginFailure } from './Pages/Login/loginSlice';
import authService from './authService'; // Your authentication service

export const login = (ssn, password) => async (dispatch) => {
    try {
        dispatch(loginStart());
        const { user, token } = await authService.login(ssn, password);

        // Set the Authorization header
        authService.setAuthHeader(token);

        dispatch(loginSuccess({ user, token }));
    } catch (error) {
        dispatch(loginFailure(error.message));
    }
};
