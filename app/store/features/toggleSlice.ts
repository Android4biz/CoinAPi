import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    toggle: false,
    modalId: ''
}

const toggleSlice = createSlice({
    name: 'switch',
    initialState,
    reducers: {
        toggleClickOpen(state, action) {
            state.toggle = !state.toggle
            state.modalId = action.payload
        },
    }
})

export const { toggleClickOpen } = toggleSlice.actions
export default toggleSlice.reducer