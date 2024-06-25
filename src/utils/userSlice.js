import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState:null,
    reducers:{
        adduser:(state,action)=>action.payload,
        removeUser:(state,action)=>null
    }
})

export const {adduser,removeUser}=userSlice.actions;
export default userSlice.reducer;