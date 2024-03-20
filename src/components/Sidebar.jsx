import React, { useEffect, useState } from 'react'
import mainLogo from '../icons/gazi_university_logo.png';
import { FaUser, FaBuilding } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { IoIosMail, IoMdMenu } from "react-icons/io";
import { FaWpforms } from "react-icons/fa6";
import { RiSurveyFill } from "react-icons/ri";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { logout, setUser } from '../store/auth';
import { CiLogout } from 'react-icons/ci';

import { MdEdit, MdGroups, MdOutlineAppRegistration } from "react-icons/md";

function Sidebar() {

    const navigate = useNavigate()
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.auth);
    const { userRole } = useSelector(state => state.auth);


    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {

        
            axios.get(`/students/${JSON.parse(localStorage.getItem("userData"))?.ogrenciNo}`)
            .then((res) => {
                if (res.status === 200) {
                    dispatch(setUser(res.data));
                }
            })
        

    }, [dispatch])

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

    console.log(user)
    if (!user) {
        return null; // Kullanıcı giriş yapmamışsa, sidebar'ı gösterme
    }
    return (

        <div className=''>

            {isSidebarOpen ? (
                <div className=' mr-3'>
                    <IoMdMenu className='text-3xl ml-6 mt-3  cursor:pointer' onClick={toggleSidebar} />
                </div>) : (
                <aside id="logo-sidebar" className="bg-dark-blue  fixed top-0 left-0 z-40 ${
                isSidebarOpen 
                    ? 'w-48' 
                    : 'w-32 xl:w-48 2xl:w-64 h-screen' 
            } h-screen transition-transform md-translate-x-full sm:translate-x-0" aria-label="Sidebar">



                    <div className="h-full px-3 py-4 overflow-y-auto ">
                        <div className='bg-dark-blue mb-3 w-[30px] ml-auto  rounded-full '>
                            <IoMdMenu onClick={toggleSidebar} className={` text-3xl font-bold text-slate-400  bg-dark-blue `} />
                        </div>
                        <a href="/" className="flex justify-between items-center ps-2.5 mb-5">
                            <img src={mainLogo} className="h-16 me-3 " alt="Gazi Logo" />
                            <span className="self-center text-xl md:text-lg sm:text-xs font-semibold   text-white">Is Yeri Egitimi Platformu</span>
                        </a>
                        <hr className='text-white pb-3' />
                        <ul className="space-y-2 font-medium">
                            <li className='hover:bg-[#BCDCF5]   ' onClick={() => navigate('/student-profile')}>
                                <a href="" className="rounded-mg flex items-center p-2 rounded-lg text-white hover:text-dark-blue dark:hover:bg-light-blue group">
                                    <FaUser className='text-xl' />
                                    <span className="ms-3">{user?.ogrenciAd} {user.ogrenciSoyad}</span>
                                </a>
                            </li>
                            <li className='hover:bg-[#BCDCF5]  '>
                                <a href="/companies" className="rounded-mg flex items-center p-2  rounded-lg text-white hover:text-dark-blue  group">
                                    <FaBuilding className='text-xl' />
                                    <span className="ms-3">Firmalar</span>
                                </a>
                            </li>
                            {
                            userRole === 'LECTURER' && ( 
                            <li className='hover:bg-[#BCDCF5] hover:text-dark-blue'>
                                <a href="/student-group" className="flex items-center p-2  rounded-lg text-white hover:text-dark-blue  group">
                                    <MdGroups className='text-2xl'/>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Gruptaki Ogrenciler</span>
                                </a>
                            </li>
                            
                            )
                        }  {
                            userRole === 'STUDENT' && (<>
                           
                            <li className='hover:bg-[#BCDCF5] hover:text-dark-blue'>
                                <a href="/apply-to-company" className="flex items-center p-2  rounded-lg text-white hover:text-dark-blue  group">
                                <MdOutlineAppRegistration className='text-2xl'/>

                                    <span className="flex-1 ms-3 whitespace-nowrap">Başvurular</span>
                                </a>
                            </li>  
                            <li className='hover:bg-[#BCDCF5] hover:text-dark-blue'>
                                <a href="/weekly-report" className="flex items-center p-2  rounded-lg text-white hover:text-dark-blue  group">
                                    <MdEdit  className='text-2xl'/>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Haftalık Rapor</span>
                                </a>
                            </li>
                            </>
                             )
                       }  

                            <li className='hover:bg-[#BCDCF5] hover:text-dark-blue'>
                                <a href="#" className="flex items-center p-2  rounded-lg text-white hover:text-dark-blue ">
                                    <IoIosMail className='text-2xl' />
                                    <span className="flex-1 ms-3 whitespace-nowrap">Gelen Kutusu</span>
                                    <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-white ">3</span>
                                </a>
                            </li>
                            <li className='hover:bg-[#BCDCF5] hover:text-dark-blue'>
                                <a href="/forms" className="flex items-center p-2  rounded-lg text-white hover:text-dark-blue ">
                                    <FaWpforms className='text-2xl'/>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Formlar</span>
                                </a>
                            </li>
                            <li className='hover:bg-[#BCDCF5] hover:text-dark-blue'>
                                <a href="#" className="flex items-center p-2  rounded-lg text-white hover:text-dark-blue " >

                                    <RiSurveyFill className='text-2xl'/>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Anketler</span>
                                </a>
                            </li>
                            <li className='hover:bg-[#BCDCF5] hover:text-dark-blue'>
                                <a onClick={() => {
                                    dispatch(logout());
                                    navigate("/login-options");
                                }}  className="flex items-center p-2  rounded-lg text-white hover:text-dark-blue hover:bg-light-blue ">
                                    <CiLogout className='text-2xl' />
                                    <span className="flex-1 ms-3 whitespace-nowrap">Çıkış Yap</span>
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