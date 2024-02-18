import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    username: 'أحمد حسني',
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
});

export const { increment, decrement } = userSlice.actions;
export default userSlice.reducer;