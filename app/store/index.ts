import { configureStore } from "@reduxjs/toolkit"
import filterReducer from '../store/features/filterSlice'
import selectReducer from './features/filterSelectSlice'
import toggleSlice from "./features/toggleSlice";

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        selectCoins: selectReducer,
        toggle: toggleSlice
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
