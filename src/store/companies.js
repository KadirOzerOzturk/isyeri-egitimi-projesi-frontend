import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    companies:[]
}

const companiesSlice =createSlice({
    name: 'company',
    initialState,
    reducers:{
        setCompanies:(state, action)=>{
            state.companies = action.payload;
        }
    }
})

export const {setCompanies} =companiesSlice.actions

export const getCompaniesAsync = () => async dispatch => {
    try {
        const response = await axios.get('https://api.thecompaniesapi.com/v1/companies');
        console.log(response.data.companies + " asdasd")
        dispatch(setCompanies(response.data.companies));
        console.log(response.data.companies + " 22222")

    } catch (error) {
        console.log("Error fetching users:", error);
    }
    
};
export default companiesSlice.reducer