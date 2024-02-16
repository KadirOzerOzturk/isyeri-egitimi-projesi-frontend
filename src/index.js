import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import NoPage from './common_pages/NoPage';
import StudentLogin from './student/StudentLogin';
import ComissionLogin from './comission/ComissionLogin';
import LecturerLogin from './lecturer/LecturerLogin';
import CompanyLogin from './company/CompanyLogin';
import StudentProfile from './student/StudentProfile';
import Sidebar from './components/Sidebar';
import ListCompanies from './common_pages/ListCompanies';
import ListForms from './forms/ListForms';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <App/>
</BrowserRouter>
);


