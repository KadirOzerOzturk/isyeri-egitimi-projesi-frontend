import React from 'react'
import mainLogo from '../icons/gazi_university_logo.png';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
function LoginOptions() {

    const navigate = useNavigate()
    const navigateToLogin = (name) => {
        navigate(`/${name}-login`)
    }

    return (
        <div className='h-screen flex justify-center items-center font-roboto '>
            <div className="flex flex-col items-center">
                <img src={mainLogo} className='h-52' />
                <div className="max-w-xs flex flex-col rounded-lg shadow-sm mt-4">
                    <button type="button" onClick={() => navigateToLogin("student")} className="w-full py-3 px-6 inline-flex items-center gap-x-2 rounded-md text-sm font-medium focus:z-10 border  bg-dark-blue  shadow-sm text-white hover:bg-light-blue hover:text-dark-blue ">
                        Ogrenci Girisi
                    </button>
                    <button type="button" onClick={() => navigateToLogin("lecturer")} className="w-full py-3 px-6 inline-flex items-center gap-x-2 rounded-md text-sm font-medium focus:z-10 border  bg-dark-blue  shadow-sm text-white hover:bg-light-blue hover:text-dark-blue ">
                        Izleyici Girisi
                    </button>
                    <button type="button" onClick={() => navigateToLogin("comission")} className="w-full py-3 px-6 inline-flex items-center gap-x-2 rounded-md text-sm font-medium focus:z-10 border  bg-dark-blue  shadow-sm text-white hover:bg-light-blue hover:text-dark-blue ">
                        Komisyon Girisi
                    </button>
                    <button type="button" onClick={() => navigateToLogin("company")} className="w-full py-3 px-6 inline-flex items-center gap-x-2 rounded-md text-sm font-medium focus:z-10 border  bg-dark-blue  shadow-sm text-white hover:bg-light-blue hover:text-dark-blue ">
                        Firma Girisi
                    </button>
                </div>
            </div>
        </div>

    )
}

export default LoginOptions