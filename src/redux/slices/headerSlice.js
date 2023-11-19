import { createSlice } from '@reduxjs/toolkit';

const headerSlider = createSlice({
    name: 'header',
    initialState: {
        isDrawerShowed: false,
    },
    reducers: {
        toggleDrawer(state, action) {
            state.isDrawerShowed = action.payload;
        },
    },
});

export const { toggleDrawer } = headerSlider.actions;

export default headerSlider.reducer;
