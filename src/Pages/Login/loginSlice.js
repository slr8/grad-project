import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {
            userName: null,
            ssn: null,
            role: null,
        },
        token: null,
        error: null,
        loading: false,
    },
    reducers: {
        loginStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.user.userName = action.payload.userName;
            state.user.ssn = action.payload.ssn;
            state.user.role = action.payload.role;
            state.token = action.payload.token;
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        logout: (state) => {
            state.user.userName = null;
            state.user.ssn = null;
            state.user.role = null;
            state.token = null;
        },
    },
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;
