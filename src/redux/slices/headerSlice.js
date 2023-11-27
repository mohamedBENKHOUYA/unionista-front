import { createSlice } from '@reduxjs/toolkit';

const headerSlider = createSlice({
    name: 'header',
    initialState: {
        isBottomModalOpen: false,
        currentContent: null,
    },
    reducers: {
        toggleBottomModal(state, action) {
            ({
                isBottomModalOpen: state.isBottomModalOpen,
                currentContent: state.currentContent,
            } = action.payload);
        },
    },
});

export const { toggleBottomModal } = headerSlider.actions;

export default headerSlider.reducer;
