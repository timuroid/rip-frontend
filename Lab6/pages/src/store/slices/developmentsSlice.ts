import {createSlice} from "@reduxjs/toolkit";

type T_DevelopmentsSlice = {
    development_name: string
}

const initialState:T_DevelopmentsSlice = {
    development_name: "",
}


const developmentsSlice = createSlice({
    name: 'developments',
    initialState: initialState,
    reducers: {
        updateDevelopmentName: (state, action) => {
            state.development_name = action.payload
        }
    }
})

export const { updateDevelopmentName} = developmentsSlice.actions;

export default developmentsSlice.reducer