import axios from "axios"

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")

export const Signup = createAsyncThunk('Signup' , async({FormData}) => {
    const Response = await axios.post('/Backend/Auth/Signup' , {Data : {FormData}})
    return Response.data
})

const initialState = {
    Success : false,
    Loading : false,
    Error : ""
}

const AuthReducer = createSlice({
    initialState,
    name:"AuthReducer",
    extraReducers : (builder) => {
        builder.addCase(Signup.fulfilled , (state , action) => {
            state.Success = action.payload.Success
        })
        builder.addCase(Signup.pending , (state , action) => {
            state.Success = false
        })  
    }
})