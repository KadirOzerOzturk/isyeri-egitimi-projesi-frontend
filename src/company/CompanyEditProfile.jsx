import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Toaster, toast } from 'sonner'

export default function CompanyEditProfile() {
    const { company } = useSelector(state => state.auth);
    const dispatch = useDispatch()
    const [changedCompany,setChangedCompany]= useState({...company})

    // Update the state when an input value changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setChangedCompany({ ...company, [name]: value })
        
    };
    console.log('name : ' + changedCompany.name)
    console.log('name : ' + changedCompany.name)
    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     dispatch(setUser({ ...company, [name]: value }))
    //     console.log('email : ' + company.email)
    // };
    const navigate= useNavigate()

    // const handleFormSubmit = (e) => {
    //     const { name, value } = e.target;
    //     toast.success('Bilgileriniz Guncellendi')
    //     e.preventDefault()
    //     dispatch(setUser({ ...company, [name]: value }))

    //   };

   
    return (
        <form className="container mx-auto my-5 pl-24 pt-5 z-40  ">
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">
                        Profile
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                        This information will be displayed publicly so be careful what you
                        share.
                    </p>

                    <div className="mt-10 grid grid-cols-1  gap-y-8 ">
                        <div className="grid grid-cols-3 w-full gap-12">
                            <div className="flex items-center gap-2">
                                <h1
                                    htmlFor="name"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Firma Adi :
                                </h1>
                                <p className="text-sm  text-slate-600">{company.name}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <h1
                                    htmlFor="sector"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Sektor
                                </h1>
                                <p className="text-sm  text-slate-600">{company.sector }</p>

                            </div>
                            <div className="flex items-center gap-2">
                                <h1
                                    htmlFor="address"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Adres : 
                                </h1>
                                <p className="text-sm  text-slate-600">{company.address}</p>
                            </div>
                            
                            
                            <div className="flex items-center gap-2">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    E-mail
                                </label>
                                <input defaultValue={company.email} name="email" onChange={handleInputChange} className="text-sm  border-2 rounded-md p-1 text-slate-600" />
                            </div>
                            <div className="flex items-center gap-2">
                                <label
                                    htmlFor="phone"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Telefon No.
                                </label>
                                <input defaultValue={company.phone} name="phone" onChange={handleInputChange} className="text-sm  border-2 rounded-md p-1 text-slate-600" />
                            </div>
                            <div className="flex items-center gap-2">
                                <label
                                    htmlFor="address"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Adres
                                </label>
                                <input defaultValue={company.address} name="address" onChange={handleInputChange} className="text-sm  border-2 rounded-md p-1 text-slate-600" />
                            </div>

                        </div>

                        <div className="col-span-full">
                            <label
                                htmlFor="about"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                About
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="about"
                                    name="about"
                                    rows={3}
                                    className=" p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                // onChange={handleInputChange}
                                />
                            </div>
                            <p className="mt-3 text-sm leading-6 text-gray-600">
                                Write a few sentences about yourself.
                            </p>
                        </div>
                        <div className="flex justify-between items-center ">


                            <div className="col-span-full ">
                                <label
                                    htmlFor="photo"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Photo
                                </label>
                                <div className="mt-2 flex items-center gap-x-3">
                                    <img
                                        className="h-12 w-12 rounded-full"
                                        alt=""
                                        src={company.logo}
                                    ></img>
                                    <button
                                        type="button"
                                        className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                    >
                                        Change
                                    </button>
                                </div>
                            </div>
                            <div className="mx-auto pl-12 border-l-2">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Password
                                </label>
                                <button onClick={()=>navigate('/change-password')} className="border-l-2 bg-gray-200  py-1 px-2 rounded-md">
                                    Change Password
                                </button>
                            </div>

                        </div>
                    </div>
                </div>

              

                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">
                        Yetenekler
                    </h2>
                    

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label
                                htmlFor="first-name"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Istenen Nitelikler 
                            </label>
                            <div className="mt-2 flex gap-4">
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    
                                    autoComplete="given-name"
                                    className=" p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                // onChange={handleInputChange}
                                />
                                 <button  className="bg-slate-300 w-24 rounded-md">ekle</button>
                            </div>
                        </div>
                       
                        

                        



                    </div>
                </div>


            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                onClick={()=>navigate(`/company-profile/${changedCompany.id}`)}
                    type="button"
                    className="text-sm font-semibold leading-6 text-gray-900"
                >
                    Cancel
                </button>
                <button
                    //  onClick={handleFormSubmit}
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >

                    Save
                </button>
            </div>
            <Toaster richColors position="top-right" />

        </form>
    );
}
