import { configureStore } from "@reduxjs/toolkit";
import companyReducer from "../store/companies"
import authReducer from './auth'
const store=configureStore({
    reducer:{
        auth: authReducer,
        companies : companyReducer,
    }
})

export default store