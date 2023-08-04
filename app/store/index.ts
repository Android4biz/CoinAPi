import { configureStore } from "@reduxjs/toolkit"
import filterReducer from '../store/features/filterSlice'
import selectReducer from './features/filterSelectSlice'

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        selectCoins: selectReducer
    },
});