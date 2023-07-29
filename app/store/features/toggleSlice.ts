import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    toggle: false
}

const toggleSliceCoin = createSlice({
    name: 'toggle',
    initialState,
    reducers: {
        toggleCoins(state) {
            state.toggle = !state.toggle
        }
    }
})

export const { toggleCoins } = toggleSliceCoin.actions
export default toggleSliceCoin.reducer
