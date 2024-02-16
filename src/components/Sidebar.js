import React, { useEffect, useState } from 'react'
import mainLogo from '../icons/gazi_university_logo.png';
import leftArrow from '../icons/arrow_back_left_icon.svg';
import { FaUser, FaBuilding } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { IoIosMail, IoMdMenu } from "react-icons/io";
import { FaWpforms } from "react-icons/fa6";
import { RiSurveyFill } from "react-icons/ri";
import { FaAngleDoubleLeft } from "react-icons/fa";


function Sidebar() {

    const navigate = useNavigate()
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            if (window.innerWidth > 1280) {
                setIsSidebarOpen(false);
            } else {
                setIsSidebarOpen(true);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [windowWidth]);
    return (
        <div className='font-roboto '>

            {isSidebarOpen ? (<div className='w-48'><IoMdMenu className='h-12 w-12 ml-6 mt-3  cursor:pointer' onClick={toggleSidebar} /></div>) : (
                <aside id="logo-sidebar" className="bg-dark-blue fixed top-0 left-0 z-40 ${
                    isSidebarOpen 
                        ? 'w-48' 
                        : 'w-32 xl:w-48 2xl:w-64 h-screen' 
                } h-screen transition-transform md-translate-x-full sm:translate-x-0" aria-label="Sidebar">
                    


                    <div className="h-full px-3 py-4 overflow-y-auto ">
                    <div className='bg-dark-blue w-[30px] ml-auto  rounded-full '>
                        <FaAngleDoubleLeft onClick={toggleSidebar} className={` text-3xl font-bold text-slate-400  bg-dark-blue `} />
                    </div>
                        <a href="#" className="flex justify-between items-center ps-2.5 mb-5">
                            <img src={mainLogo} className="h-16 me-3 " alt="Gazi Logo" />
                            <span className="self-center text-xl md:text-lg sm:text-xs font-semibold   text-white">Is Yeri Egitimi Platformu</span>
                        </a>
                        <hr className='text-white pb-3' />
                        <ul className="space-y-2 font-medium">
                            <li className='hover:bg-[#BCDCF5]   ' onClick={() => navigate('/student-profile')}>
                                <a href="#" className="rounded-mg flex items-center p-2 rounded-lg text-white hover:text-dark-blue dark:hover:bg-light-blue group">
                                    <FaUser className='text-xl' />
                                    <span className="ms-3">Kadir Ozer Ozturk</span>
                                </a>
                            </li>
                            <li className='hover:bg-[#BCDCF5]  '>
                                <a href="/companies" className="rounded-mg flex items-center p-2  rounded-lg text-white hover:text-dark-blue  group">
                                    <FaBuilding className='text-xl' />
                                    <span className="ms-3">Firmalar</span>
                                </a>
                            </li>
                            <li className='hover:bg-[#BCDCF5] hover:text-dark-blue'>
                                <a href="#" className="flex items-center p-2  rounded-lg text-white hover:text-dark-blue  group">
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                        <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Başvurular</span>
                                </a>
                            </li>
                            <li className='hover:bg-[#BCDCF5] hover:text-dark-blue'>
                                <a href="#" className="flex items-center p-2  rounded-lg text-white hover:text-dark-blue ">
                                    <IoIosMail className='text-2xl' />
                                    <span className="flex-1 ms-3 whitespace-nowrap">Gelen Kutusu</span>
                                    <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-white ">3</span>
                                </a>
                            </li>
                            <li className='hover:bg-[#BCDCF5] hover:text-dark-blue'>
                                <a href="/forms" className="flex items-center p-2  rounded-lg text-white hover:text-dark-blue ">
                                    <FaWpforms />
                                    <span className="flex-1 ms-3 whitespace-nowrap">Formlar</span>
                                </a>
                            </li>
                            <li className='hover:bg-[#BCDCF5] hover:text-dark-blue'>
                                <a href="#" className="flex items-center p-2  rounded-lg text-white hover:text-dark-blue hover:bg-light-blue ">

                                    <RiSurveyFill />
                                    <span className="flex-1 ms-3 whitespace-nowrap">Anketler</span>
                                </a>
                            </li>
                            <li className='hover:bg-[#BCDCF5] hover:text-dark-blue'>
                                <a href="#" className="flex items-center p-2 rounded-lg text-white hover:text-dark-blue ">
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
                                </a>
                            </li>
                            <li className='hover:bg-[#BCDCF5] hover:text-dark-blue'>
                                <a href="#" className="flex items-center p-2 rounded-lg text-white hover:text-dark-blue  group">
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                                        <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                                        <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </aside>
            )}







        </div>
    )
}

export default Sidebar