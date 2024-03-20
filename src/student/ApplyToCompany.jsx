import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCompaniesAsync } from '../store/companies';
import { useNavigate } from 'react-router-dom';

function ApplyToCompany() {
    const { companies } = useSelector(state => state.companies);
    const dispatch = useDispatch();
    const navigate=useNavigate  ()
    const [selectedCompanies, setSelectedCompanies] = useState([]);
    useEffect(() => {
        dispatch(getCompaniesAsync());
        // if (localStorage.getItem(selectedCompanies)!==null) {
        //     setSelectedCompanies(localStorage.getItem(selectedCompanies))
        // }
        
    }, []);

    

    const handleAddClick = (e, company) => {
        e.preventDefault();
        // Seçilen şirketin daha önce seçilip seçilmediğini kontrol et
        if (!selectedCompanies.some(selectedCompany => selectedCompany.id === company.firmaId)) {
            setSelectedCompanies([...selectedCompanies, company]);
        }
        localStorage.setItem("selectedCompanies",selectedCompanies)

    };

    const handleRemoveClick = (companyId) => {
        setSelectedCompanies(selectedCompanies.filter(company => company.firmaId !== companyId));
    };


    return (
   <div>
        <div className="flex justify-center border-2  items-center pt-14 mx-auto my-5 pl-24 z-40  ">
            <div className='flex justify-between gap-6 '>

                <div className=" border-slate-200 border-2 p-3 text-sm font-medium text-gray-900 bg-white  rounded-lg ">
                    <h1 className='py-2 text-center text-lg'> Başvurabileceğiniz Firmalar</h1>
                    <table className=" mx-auto text-sm text-left rtl:text-right text-gray-500 ">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Firma Adı
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    E-posta
                                </th>

                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        {companies.length > 0 ? (
                            companies.map((company) => (
                                <tbody  key={company.id}>
                                    <tr className="odd:bg-white  even:bg-gray-50  border-b ">
                                        
                                        <th onClick={()=> navigate(`/company-profile/${company.firmaId}`)} scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap hover:underline cursor-pointer ">
                                            {company.firmaAd}
                                        </th>
                                        <td onClick={()=> navigate(`/company-profile/${company.firmaId}`)} className="px-6 py-4  hover:underline cursor-pointer">
                                            {company.firmaEposta}
                                        </td>
                                        


                                        <td className="px-6 py-4">
                                            <a href="#" onClick={(e) => handleAddClick(e, company)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline ">Ekle</a>
                                        </td>
                                    </tr>
                                </tbody>


                            ))
                        ) : (
                            <p>Loading...</p>
                        )}
                    </table>
                </div>
                <div className='border-slate-200 border-2 p-3 text-sm font-medium text-gray-900 bg-white top-0  rounded-lg'>
                    <h1 className='py-2 text-center text-lg'>Başvuru İçin Seçtiğiniz  Firmalar</h1>

                    <table className="mx-auto text-sm text-left rtl:text-right text-gray-500 ">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Firma Adı
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    E-posta
                                </th>

                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        {selectedCompanies.length > 0 ? (
                            selectedCompanies.map((company) => (
                                <tbody key={company.firmaId}>
                                    <tr className="odd:bg-white  even:bg-gray-50  border-b ">
                                        <th onClick={()=> navigate(`/company-profile/${company.firmaId}`)} scope="row" className="px-6 py-4 font-medium hover:underline cursor-pointer text-gray-900 whitespace-nowrap ">
                                            {company.firmaAd}
                                        </th>
                                        <td onClick={()=> navigate(`/company-profile/${company.id}`)} className="px-6 py-4 hover:underline cursor-pointer">
                                            {company.firmaEposta}
                                        </td>


                                        <td className="px-6  py-4">
                                            <button onClick={() => handleRemoveClick(company.id)} className="font-medium text-orange-600 hover:underline">Cıkar</button>
                                        </td>
                                    </tr>
                                    
                                </tbody>


                            ))
                        ) : (
                            <p className='p-2'>Henüz seçim yapılmadı</p>
                        )}
                        
                    </table>
                    
                </div>
                
            </div>
            <div className='  bottom-0'>
                <button type="submit" className='bg-green-500 text-white px-4 py-2 rounded-md'>Başvur</button>
            </div>
        </div>
        </div>
        
    );
}

export default ApplyToCompany;
