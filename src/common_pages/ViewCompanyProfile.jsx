import React from 'react'
import { CiEdit } from "react-icons/ci";
import { FaUser } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';

function ViewCompanyProfile() {

    const location = useLocation();
    const { pathname } = location;
    const parts = pathname.split("/")
    const companyId = parts[parts.length - 1]
    const { companies } = useSelector(state => state.companies)
    const findCompanyById = (companies, companyId) => {
        for (const company of companies) {
            if (company.id === parseInt(companyId)) {
                return company;
            }
        }
        return null; // Eşleşen şirket bulunamadı
    };



    const company = findCompanyById(companies, companyId);
    console.log(" company: ", company);



    return (
        <div>
            <div className="container mx-auto my-5 pl-24 pt-5 z-40  ">
                <div className="md:flex no-wrap md:-mx-2 ">

                    <div className="w-full md:w-3/12 md:mx-2">

                        <div className="bg-white p-3 border-t-4 border-dark-blue">
                            <div className="image h-24 w-24 overflow-hidden">
                                <img className="h-auto w-full mx-auto rounded-full "
                                    src={company.logo}
                                    alt="" />
                            </div>
                            <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">{company.name}</h1>
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
                                <div className="text-center my-2">
                                    <img className="h-16 w-16 rounded-full mx-auto"
                                        src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                                        alt="" />
                                    <a href="#" className="text-main-color">Natie</a>
                                </div>
                                <div className="text-center my-2">
                                    <img className="h-16 w-16 rounded-full mx-auto"
                                        src="https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/f04b52da-12f2-449f-b90c-5e4d5e2b1469_361x361.png"
                                        alt="" />
                                    <a href="#" className="text-main-color">Casey</a>
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
                                <div className='flex justify-between items-center gap-2 bg-green-300 rounded-md py-1 px-2'>
                                    <span>Basvur</span>
                                    <CiEdit className='text-2xl' />
                                </div>

                            </div>
                            <div className="text-gray-700">
                                <div className="grid md:grid-cols-2 text-sm">
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Sirket Adi</div>
                                        <div className="px-4 py-2">{company.name}</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Sektor</div>
                                        <div className="px-4 py-2">{company.industryMain}</div>
                                    </div>


                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Address</div>
                                        <div className="px-4 py-2">{company.city.address} </div>
                                    </div>

                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Iletisim</div>
                                        <div className="px-4 py-2">
                                            <a className="text-blue-800" href=""> {company.phoneNumber}</a>
                                        </div>
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
                                        <span className="tracking-wide">Istenilen Nitelikler </span>

                                    </div>
                                    <ul className="list-inside space-y-2">
                                        <li>
                                            <div className="text-dark-blue">Ortalama</div>
                                            <div className="text-gray-500 text-xs">3.00 ve uzeri</div>
                                        </li>

                                    </ul>

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
                                        <span className="tracking-wide">Sertifikalar (Bu Bolum Degisecek )</span>
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
        </div>
    )
}

export default ViewCompanyProfile