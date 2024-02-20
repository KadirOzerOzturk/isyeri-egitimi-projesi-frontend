import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCompaniesAsync } from '../store/companies';

function ApplyToCompany() {
    const { companies } = useSelector(state => state.companies);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getCompaniesAsync());
    }, [dispatch]);

    const [selectedCompanies, setSelectedCompanies] = useState([]);
    const [selectedCompanyDetails, setSelectedCompanyDetails] = useState([]);

    const handleChange = (e) => {
        const { value, checked } = e.target;
    
        setSelectedCompanies(prevSelectedCompanies => {
            if (checked) {
                return [...prevSelectedCompanies, value];
            } else {
                return prevSelectedCompanies.filter(id => id !== value);
            }
        });
    };
    
    useEffect(() => {
        console.log("selectedCompanies:", selectedCompanies);
        
        
        // Filter companies based on selected company IDs
        const selectedDetails = companies.filter(company => selectedCompanies.includes(company.id));
        setSelectedCompanyDetails(selectedDetails);
        console.log("selectedCompanyDetails:", selectedDetails);
    }, [selectedCompanies, companies]);
    return (
        <div className="flex justify-center items-center pt-14 mx-auto my-5 pl-24 z-40 font-roboto ">
            <div className='grid grid-cols-2 gap-12 '>
                <div className=' shadow-lg border-b-2'>
                    <h1 className='text-center  shadow-lg border-b-2'>Firma Secim</h1>
                    <hr />

                    <div className=" ">
                        <div className="max-w-sm mx-14  my-10">
                            <div className="bg-white  shadow-lg rounded-lg overflow-hidden">
                                <ul className="divide-y divide-gray-200">
                                    {companies.map((company) => (
                                        <li key={company.id} className="p-3 flex justify-between items-center user-card">
                                            <div className="flex items-center">
                                                <img className="w-10 h-10 rounded-full" src={company.logo} alt={company.name} />
                                                <span className="ml-3 font-medium">{company.name}</span>
                                            </div>
                                            <div>
                                                <input
                                                    className="form-check-input cursor-pointer"
                                                    type="checkbox"
                                                    name="companyId"
                                                    value={company.id}
                                                    id={`company-${company.id}`}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='bg-gray-200 mx-auto '>
                    <h1>Selected Companies</h1>
                    
                    <ul>
                        {selectedCompanyDetails.map(company => (
                            <li key={company.id}>{company.name}</li>
                        ))}
                    </ul>
                    
                    <hr />
                </div>
            </div>
        </div>
    );
}

export default ApplyToCompany;
