import React, { useState } from 'react';
import mainLogo from '../icons/gazi_university_logo.png';
import { useDispatch } from 'react-redux';
import { Toaster, toast } from 'sonner';
import axios from 'axios';
import { setUser, setUserRole } from '../store/auth';
import rektorluk from '../icons/gazi_rektorluk.jpg';
import { useNavigate } from 'react-router-dom';

function StudentLogin() {
  const dispatch = useDispatch();
  const [studentNumber, setStudentNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const handleStudentNumberChange = (e) => {
    setStudentNumber(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/auth/student-login', {
        ogrenciNo: studentNumber,
        parola: password,
      });
      if (res.status === 200) {
        console.log("res" + res)
        toast.success("Giriş başarılı ")

        localStorage.setItem('userData', JSON.stringify(res.data));

        localStorage.setItem('userRole', 'STUDENT');
        
        dispatch(setUser(res.data)); 
        navigate("/");
      }
    } catch (error) {
      if (error.response.data === "User not found" || error.response.data === "Password is not correct") {
        toast.error('Kullanıcı adı veya parola yanlış !!');
      }
      console.log(error)
    }
  };


  return (
    <div className='relative h-screen flex justify-center items-center '>
      <img src={rektorluk} className='absolute z-0 w-full h-full object-cover opacity-60' alt="Rectorate Background" />

      <div className="  flex flex-col justify-center py-12 px-6 lg:px-8 z-10">
        <div className="sm:mx-auto sm:w-full  sm:max-w-md">
          <img className="mx-auto h-24 w-auto" src={mainLogo} alt="Workflow" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Login your account</h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-slate-100  py-8 px-6 shadow rounded-lg sm:px-10">
            <form className="mb-0 space-y-6" onSubmit={handleLogin}>
              <div>
                <label htmlFor="studentNumber" className="block text-sm font-medium text-gray-700">Student Number</label>
                <div className="mt-1">
                  <input
                    onChange={handleStudentNumberChange}
                    value={studentNumber}
                    id="studentNumber"
                    name="studentNumber"
                    type="number"
                    autoComplete="off"
                    required
                    className="p-1 border-2 border-opacity-70 w-full rounded-md appearance-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <div className="mt-1">
                  <input
                    onChange={handlePasswordChange}
                    value={password}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="p-2 border-2 border-opacity-70 w-full rounded-md"
                  />
                </div>
              </div>

              <div className="flex items-center">
                <input id="terms-and-privacy" name="terms-and-privacy" type="checkbox" className="text-2xl" required />
                <label htmlFor="terms-and-privacy" className="ml-2 block text-sm text-gray-900">
                  I agree to the
                  <a href="#" className="text-indigo-600 hover:text-indigo-500" > Terms </a>
                  and
                  <a href="#" className="text-indigo-600 hover:text-indigo-500" > Privacy Policy</a>.
                </label>
              </div>

              <div>
                <button onClick={(e) => handleLogin(e)} type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md  text-sm font-medium  bg-dark-blue  shadow-sm text-white hover:bg-light-blue hover:text-dark-blue ">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Toaster richColors position="top-right" />

    </div>
  );
}

export default StudentLogin;
