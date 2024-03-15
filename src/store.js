import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './Pages/Login/loginSlice';
import labs from './Pages/ITHallDevices/hallSlice';

const store = configureStore({
    reducer: {
        auth: loginSlice,
        lab: labs
    },
});

export default store;