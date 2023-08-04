import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    option: 'USD'
}

const filterSelectSliceCoin = createSlice({
    name: 'USD',
    initialState,
    reducers: {
        selectCoins(state, action) {
            state.option = action.payload
        }
    }
})

export const { selectCoins } = filterSelectSliceCoin.actions
export default filterSelectSliceCoin.reducer
