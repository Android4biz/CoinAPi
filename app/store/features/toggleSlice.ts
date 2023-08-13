import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    toggle: false,
    modalId: ''
}

const toggleSlice = createSlice({
    name: 'switch',
    initialState,
    reducers: {
        toggleClick(state, action) {
            state.toggle = !state.toggle
            state.modalId = action.payload
        }
    }
})

export const { toggleClick } = toggleSlice.actions
export default toggleSlice.reducer