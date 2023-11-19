import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import headerReducer from './slices/headerSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        header: headerReducer,
    },
});

export { store };
