import { configureStore } from "@reduxjs/toolkit"
import filterReducer from '../store/features/filterSlice'
import toggleReducer from '../store/features/toggleSlice'

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        toggle: toggleReducer
    },
});