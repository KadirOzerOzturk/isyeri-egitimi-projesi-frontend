import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Sidebar from "./components/Sidebar";
import LoginOptions from "./common_pages/LoginOptions";
import NoPage from "./common_pages/NoPage";
import ListForms from "./forms/ListForms";
import ListCompanies from "./common_pages/ListCompanies";
import StudentLogin from "./student/StudentLogin";
import StudentProfile from "./student/StudentProfile";
import ComissionLogin from "./comission/ComissionLogin";
import LecturerLogin from "./lecturer/LecturerLogin";
import CompanyLogin from "./company/CompanyLogin";
import KabulFormu from "./forms/KabulFormu";
import CompanyProfile from "./company/CompanyProfile";
import ApplyToCompany from "./student/ApplyToCompany";
import ChangePassword from "./common_pages/ChangePassword";
import ListStudentGroups from "./lecturer/ListStudentGroups";
import ViewStudentProfile from "./common_pages/ViewStudentProfile";
import ViewCompanyProfile from "./common_pages/ViewCompanyProfile";
import StudentEditProfile from "./student/StudentEditProfile";
import CompanyEditProfile from "./company/CompanyEditProfile";
import Navbar from "./components/Navbar";
import Home from "./common_pages/Home";
import WeeklyReport from "./student/WeeklyReport";

function App() {
  const { user } = useSelector(state => state.auth);
console.log(user)
  return (
    <div className="grid-cols-2">
      <div className="flex">
        
        <Sidebar />
      </div>
      
      <div className="font-roboto">
        <Routes>
        

          <Route path="/login-options" element={user==null ?<LoginOptions />:null} />
         
              <Route path="/student-login" element={user==null ? <StudentLogin />:null} />
              <Route path="/company-login" element={user==null ? <CompanyLogin />:null} />
              <Route path="/lecturer-login" element={user==null ? <LecturerLogin />:null} />
              <Route path="/comission-login" element={user==null ? <ComissionLogin />:null} />
              
            
              
              <Route path="*" element={<NoPage />} />
              <Route path="/change-password" element={user!==null ?<ChangePassword />:(<Navigate to="/login-options" replace />)} />
              <Route path="/" element={user!==null ?<Home />:(<Navigate to="/login-options" replace />)} />

              {/* students */}
              <Route path="/student-profile" element={user!==null ?<StudentProfile />:(<Navigate to="/login-options" replace />)} />
              <Route path="/weekly-report" element={user!==null ?<WeeklyReport />:(<Navigate to="/login-options" replace />)} />
              <Route path="/student-profile/:id" element={user!==null ?<ViewStudentProfile />:(<Navigate to="/login-options" replace />)} />
              <Route path="/apply-to-company" element={user!==null ?<ApplyToCompany />:(<Navigate to="/login-options" replace />)} />
              <Route path="/student-edit-profile" element={user!==null ?<StudentEditProfile />:(<Navigate to="/login-options" replace />)} />

              {/* companies */}
              <Route path="/companies" element={user!==null ?<ListCompanies />:(<Navigate to="/login-options" replace />)} />
              <Route path="/company-profile/:id" element={user!==null ?<ViewCompanyProfile />:(<Navigate to="/login-options" replace />)} />
              <Route path="/company-edit-profile" element={user!==null ?<CompanyEditProfile />:(<Navigate to="/login-options" replace />)} />

              {/* lecturer */}
              <Route path="/student-group" element={user!==null ?<ListStudentGroups />:(<Navigate to="/login-options" replace />)} />

              {/* comission */}

              {/* Forms */}
              <Route path="/kabul-formu" element={user!==null ?<KabulFormu />:(<Navigate to="/login-options" replace />)} />
              <Route path="/forms" element={user!==null ?<ListForms />:(<Navigate to="/login-options" replace />)} />
      
   
        </Routes>
      </div>
    </div>
  );
}

export default App;
