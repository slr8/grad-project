import { configureStore } from '@reduxjs/toolkit';
import userSlice from './Pages/Schedule/userSlice';
import loginSlice from './Pages/Login/loginSlice';

const store = configureStore({
    reducer: {
        user: userSlice,
        auth: loginSlice
    },
});

export default store;