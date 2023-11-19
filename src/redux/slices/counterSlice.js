import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount(state, action) {
            state.value += action.payload;
        },
    },
});

const { increment, decrement, incrementByAmount } = counterSlice.actions;

export { increment, decrement, incrementByAmount };

export default counterSlice.reducer;
