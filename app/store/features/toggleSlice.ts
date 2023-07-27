import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    completed: false
}

const toggleSliceCoin = createSlice({
    name: 'toggle',
    initialState,
    reducers: {
        toggle(state) {
            state.completed = !state.completed
        }
    }
})

export const { toggle } = toggleSliceCoin.actions
export default toggleSliceCoin.reducer