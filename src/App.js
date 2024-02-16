import React from "react";
import Sidebar from "./components/Sidebar";
import LoginOptions from "./common_pages/LoginOptions";
import { Routes, Route } from "react-router-dom";

import NoPage from "./common_pages/NoPage";
import ListForms from "./forms/ListForms";
import ListCompanies from "./common_pages/ListCompanies";
import StudentLogin from "./student/StudentLogin";
import StudentProfile from "./student/StudentProfile";
import ComissionLogin from "./comission/ComissionLogin";
import LecturerLogin from "./lecturer/LecturerLogin";
import CompanyLogin from "./company/CompanyLogin";
import KabulFormu from "./forms/KabulFormu";

function App() {
  return (
    <div className="grid-cols-2">
      <Sidebar />
      <div className="">
        <Routes>
          <Route path="/" element={<LoginOptions />} />
          <Route path="/forms" element={<ListForms />} />
          <Route path="/companies" element={<ListCompanies />} />
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/student-profile" element={<StudentProfile />} />
          <Route path="/comission-login" element={<ComissionLogin />} />
          <Route path="/lecturer-login" element={<LecturerLogin />} />
          <Route path="/company-login" element={<CompanyLogin />} />
          <Route path="*" element={<NoPage />} /> 

          {/* Formlar  */}
          <Route path="/kabul-formu" element={<KabulFormu />} /> 


        </Routes>
      </div>
    </div>
  );
}

export default App;
