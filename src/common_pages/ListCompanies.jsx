import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import companies, { setCompanies } from '../store/companies';

import { getCompaniesAsync } from '../store/companies';
import { useNavigate } from 'react-router-dom';


function ListCompanies() {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const {companies} = useSelector(state=>state.companies)
  // useEffect(() => {

  //   axios.get(`https://api.thecompaniesapi.com/v1/companies`)
  //     .then(res => {

  //       console.log(res.data.companies)
  //       dispatch(setCompanies(res.data.companies))

  //     })
  //     .catch(error => {
  //       console.error("Error fetching comp:", error);
  //     });
  // }, [])
  useEffect(() => {
    dispatch(getCompaniesAsync());
  }, []);
console.log(companies+' 111111')
  return (
    
    <div className='container mx-auto my-5 pl-24 pt-5 z-40 grid-cols-1 md:grid-cols-2 grid '>
                  

      {companies.map((company) => (
        <ul key={company.firmaId} onClick={()=> navigate(`/company-profile/${company.firmaId}`)} className='p-2 cursor-pointer '>


          <li className="col-span-1 divide-y  border-2 divide-gray-200 rounded-lg bg-white shadow">
            <div className="flex w-full items-center justify-between space-x-6 p-6">
              <div className="flex-1 truncate">
                <div className="flex items-center space-x-3">
                  <h3 className="truncate text-sm font-medium text-gray-900">{company.firmaAd}</h3>
                </div>
                <p className="mt-1 truncate text-sm text-gray-500">{company.firmaHakkinda}</p>
              </div>
              <img className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300" src={company.firmaLogo} alt="" />
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="flex w-0 flex-1">
                  <a href={company.firmaEposta} className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                    <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                      <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                    </svg>
                    {company.firmaEposta}
                  </a>
                </div>
                <div className="-ml-px flex w-0 flex-1">
                  <a href="tel:+1-202-555-0170" className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                    <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
                    </svg>
                    Call
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      ))}
    </div>
  )
}

export default ListCompanies