import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:{
        firstname:"Kadir Ozer",
        lastname:"Ozturk",
        agno:3.44,
        grade:3,
        tcno:40159701816,
        studentNo:21181616039,
        email:"oztrkkadirozer@gmail.com",
        password:"Diamond0201",
        phone:"+90 (545) 657 77 27",
        address:"Cankaya/Ankara",
        avatar:"https://pbs.twimg.com/media/DBtlktyXcAATi3S.jpg" 
    }
}

const authSlice =createSlice({
    name: 'auth',
    initialState,
    reducers:{
        setUser:(state,action)=>{
            state.user=action.payload
        }
    }
})

export const {setUser} =authSlice.actions
export default authSlice.reducer