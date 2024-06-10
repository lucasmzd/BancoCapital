import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: {},
    userAppointments:[]
};

export const userSlice = createSlice({
    name: 'actualUser',
    initialState,
    reducers: { 
        setUser:(state,action)=>{state.userData = action.payload;},
        setAppointments:(state,action)=>{state.userAppointments = action.payload;}
    }
});
export const {setUser, setAppointments} = userSlice.actions;
export default userSlice.reducer;