import React, { useState } from 'react'
import { CiEdit } from "react-icons/ci";
import { FaUser } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function StudentProfile() {

    const navigate = useNavigate()
    const { user } = useSelector(state => state.auth);
    const [cv, setCv] = useState()
    // Now you can use the user object here
    console.log(user);
    
    return (

        <div className="container mx-auto my-5 pl-24 pt-5 z-40 font-roboto ">
            <div className="md:flex no-wrap md:-mx-2 ">

                <div className="w-full md:w-3/12 md:mx-2">

                    <div className="bg-white p-3 border-t-4 border-dark-blue">
                        <div className="image h-24 w-24 overflow-hidden">
                            <img className="h-auto w-full rounded-full mx-auto "
                                src={user.avatar}
                                alt="" />
                        </div>
                        <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">{user.firstname + " " + user.lastname} </h1>
                        <h3 className="text-gray-600 font-lg text-semibold leading-6">Owner at Her Company Inc.</h3>
                        <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">Lorem ipsum dolor sit amet
                            consectetur adipisicing elit.
                            Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt</p>
                        <ul
                            className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                            <li className="flex items-center py-3">
                                <span>Status</span>
                                <span className="ml-auto"><span
                                    className="bg-dark-blue py-1 px-2 rounded text-white text-sm">Active</span></span>
                            </li>
                            <li className="flex items-center py-3">
                                <span>Tahmini Mezuniyet Tarihi</span>
                                <span className="ml-auto">Temmuz 2025</span>
                            </li>
                        </ul>
                    </div>

                    <div className="my-4"></div>

                    <div className="bg-white p-3 hover:shadow">
                        <div className="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                            <span className="text-dark-blue">
                                <svg className="h-5 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </span>
                            <span>Similar Profiles</span>
                        </div>
                        <div className="grid grid-cols-3">
                            <div className="text-center my-2">
                                <img className="h-16 w-16 rounded-full mx-auto"
                                    src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg"
                                    alt="" />
                                <a href="#" className="text-main-color">Kojstantin</a>
                            </div>
                            <div className="text-center my-2">
                                <img className="h-16 w-16 rounded-full mx-auto"
                                    src="https://avatars2.githubusercontent.com/u/24622175?s=60&amp;v=4"
                                    alt="" />
                                <a href="#" className="text-main-color">James</a>
                            </div>

                        </div>
                    </div>

                </div>
                {/* hakkinda kismi */}
                <div className="w-full md:w-9/12 mx-2 h-64">

                    <div className="bg-white p-3 shadow-sm rounded-sm">
                        <div className='flex  justify-between'>


                            <div className="flex items-center  space-x-2 font-semibold text-gray-900 leading-8">
                                <span clas="text-dark-blue ">
                                <FaUser/> 

                                </span>
                                <span className="tracking-wide">Hakkinda</span>

                            </div>
                            <div onClick={() => navigate('/edit-profile')} className='cursor-pointer bg-gray-100 p-1 rounded-lg flex justify-between items-center gap-2'>
                                <span>Profili Duzenle</span>
                                <CiEdit className='text-2xl' />
                            </div>

                        </div>
                        <div className="text-gray-700">
                            <div className="grid md:grid-cols-2 text-sm">
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">Isim</div>
                                    <div className="px-4 py-2">{user.firstname}</div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">Soyisim</div>
                                    <div className="px-4 py-2">{user.lastname}</div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">Sinif</div>
                                    <div className="px-4 py-2">3</div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">Telefon No:</div>
                                    <div className="px-4 py-2">{user.phone}</div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">Address</div>
                                    <div className="px-4 py-2">{user.address} </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">Permanant Address</div>
                                    <div className="px-4 py-2">Arlington Heights, IL, Illinois</div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">Email.</div>
                                    <div className="px-4 py-2">
                                        <a className="text-blue-800" href="mailto ????????">{user.email}</a>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">Dogum Tarihi</div>
                                    <div className="px-4 py-2">8 Mart 2003</div>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="my-4"></div>


                    <div className="bg-white p-3 shadow-sm rounded-sm">

                        <div className="grid grid-cols-2">
                            <div>
                                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                    <span clas="text-dark-blue">
                                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </span>
                                    <span className="tracking-wide">Yetenekler </span>

                                </div><ul className="list-inside space-y-2">
                                {/* {user.skills.map((skill, index) => (
                                    
                                    <li key={index}>
                                    <div className="text-dark-blue">{skill.skill} </div>
                                    <div className="text-gray-500 text-xs">{skill.grade}</div>
                                </li>
                                ))} */}
                                
                                    
                                    
                                </ul>
                                <p className="text-slate-500 text-sm pt-4"> *Seviye (Cok Az-Az-Orta-iyi-Cok iyi)</p>
                                <p className="text-slate-500  pt-4">
                                    CV yeri
                                </p>
                                
                                <input type='file' name="cv"  />
                                <p></p>
                            </div>
                            <div>
                                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                    <span clas="text-dark-blue">
                                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                                            <path fill="#fff"
                                                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                        </svg>
                                    </span>
                                    <span className="tracking-wide">Sertifikalar</span>
                                </div>
                                <ul className="list-inside space-y-2">
                                    <li>
                                        <div className="text-dark-blue">Masters Degree in Oxford</div>
                                        <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                    </li>
                                    <li>
                                        <div className="text-dark-blue">Bachelors Degreen in LPU</div>
                                        <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                    </li>
                                </ul>
                                <input type='file' />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default StudentProfile