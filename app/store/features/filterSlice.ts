import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    filter: '',
}

const filterSliceCoin = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setFilter(state, action){
            state.filter = action.payload
        }
    }
})

export const { setFilter } = filterSliceCoin.actions
export default filterSliceCoin.reducer