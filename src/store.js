import { configureStore } from '@reduxjs/toolkit';
import userSlice from './Pages/Schedule/userSlice';

const store = configureStore({
    reducer: {
        user: userSlice,
    },
});

export default store;