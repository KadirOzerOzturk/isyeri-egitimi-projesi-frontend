import { useDispatch, useSelector } from "react-redux";
import { setUser, setUserPhoto } from "../store/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Toaster, toast } from 'sonner'
import axios from "axios";
export default function StudentEditProfile() {
    const { user } = useSelector(state => state.auth);
    const dispatch = useDispatch()
    const [changedUser, setChangedUser] = useState({ ...user })
    const [skill, setSkill] = useState()

    // Update the state when an input value changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setChangedUser({ ...user, [name]: value })

    };
  
    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     dispatch(setUser({ ...user, [name]: value }))
    //     console.log('email : ' + user.email)
    // };
    const navigate = useNavigate()

    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        axios.put(`/students/update/${user.ogrenciNo}`, changedUser)
             .then(response => {
                 // Başarılı bir şekilde güncellendiğinde yapılacak işlemler
                 if (response.status==200) {
                    console.log('Bilgiler güncellendi:', response.data);
                 toast.success('Bilgileriniz Güncellendi');
                 }
                 console.log('changedUser : ' + changedUser.ogrenciEposta)
             })
             .catch(error => {
                 // Hata durumunda yapılacak işlemler
                 console.error('Hata:', error);
             });
    };
    
    const uploadPhoto = (e) => {
        e.preventDefault()
        dispatch(setUserPhoto(e.target.files[0]))
    }
   
    
    console.log(user.ogrenciFotograf)
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
                                    htmlFor="tcno"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    TC Kimlik NO :
                                </h1>
                                <p className="text-sm  text-slate-600">{user.ogrenciKimlikNo}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <h1
                                    htmlFor="fullname"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Isim Soyisim
                                </h1>
                                <p className="text-sm  text-slate-600">{user.ogrenciAd + " " + user.ogrenciSoyad}</p>

                            </div>
                            <div className="flex items-center gap-2">
                                <h1
                                    htmlFor="ogrenciSinif"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Sinif
                                </h1>
                                <p className="text-sm  text-slate-600">{user.ogrenciSinif}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <label
                                    htmlFor="ogrenciAgno"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    AGNO
                                </label>
                                <p className="text-sm  text-slate-600">{user.ogrenciAgno}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <label
                                    htmlFor="ogrenciNo"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Ogrenci Numarasi
                                </label>
                                <p className="text-sm  text-slate-600">{user.ogrenciNo }</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <label
                                    htmlFor="ogrenciEposta"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    E-mail
                                </label>
                                <input defaultValue={user.ogrenciEposta} name="ogrenciEposta" onChange={handleInputChange} className="text-sm  border-2 rounded-md p-1 text-slate-600" />
                            </div>
                            <div className="flex items-center gap-2">
                                <label
                                    htmlFor="phone"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Telefon No.
                                </label>
                                <input defaultValue={user.ogrenciTelNo} name="ogrenciTelNo" onChange={handleInputChange} className="text-sm  border-2 rounded-md p-1 text-slate-600" />
                            </div>
                            <div className="flex items-center gap-2">
                                <label
                                    htmlFor="ogrenciAdres"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Adres
                                </label>
                                <input defaultValue={user.ogrenciAdres} name="ogrenciAdres" onChange={handleInputChange} className="text-sm  border-2 rounded-md p-1 text-slate-600" />
                            </div>

                        </div>

                        <div className="col-span-full">
                            <div className="flex justify-between">
                            <label
                                htmlFor="ogrenciHakkinda"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                About
                            </label>
                            <p>{`Char Count: ${changedUser.ogrenciHakkinda.length}`}/1000</p>
                            </div>
                            <div className="mt-2">
                                <textarea
                                    id="ogrenciHakkinda"
                                    name="ogrenciHakkinda"
                                    rows={8}
                                    defaultValue={user.ogrenciHakkinda}
                                    maxLength={1000}
                                    className=" p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={handleInputChange}
                                />
                            </div>
                            <p className="mt-3 text-sm leading-6 text-gray-600">
                                Write a few sentences about yourself.
                            </p>
                        </div>
                        <div className="flex justify-between items-center ">


                            <div className="col-span-full ">
                                <label
                                    htmlFor="ogrenciFotograf"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Photo
                                </label>
                                <div className="mt-2 flex items-center gap-x-3">
                                    <img
                                        className="h-12 w-12 rounded-full"
                                        alt=""
                                        src=""
                                    ></img>
                                    <div className="mt-2 flex items-center gap-x-3">
                                        <label htmlFor="ogrenciFotograf" className="mr-2">
                                            Change
                                        </label>
                                        <input
                                            onChange={(e) => uploadPhoto(e)}
                                            type="file"
                                            className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                        />
                                    </div>

                                </div>
                            </div>
                            <div className="mx-auto pl-12 border-l-2">
                                <label
                                    htmlFor="ogrenciParola"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Password
                                </label>
                                <button onClick={() => navigate('/change-password')} className="border-l-2 bg-gray-200  py-1 px-2 rounded-md">
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
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                        {skill}
                    </p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label
                                htmlFor="first-name"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Yetenek
                            </label>
                            <div className="mt-2 flex gap-4">
                                {/* <input
                                    type="text"
                                    name="skill"
                                    id="skill"
                                    autoComplete="given-name"
                                    className=" p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                // onChange={handleInputChange}
                                /> */}
                                <button  className="bg-slate-300 w-24 rounded-md">ekle</button>
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label
                                htmlFor="last-name"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Seviye
                            </label>
                            <div className="mt-2">
                                {/* <input
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    autoComplete="family-name"
                                    className=" p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                                // onChange={handleInputChange}
                                /> */}

                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className=" p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                                // onChange={handleInputChange}
                                />
                            </div>
                        </div>



                    </div>
                </div>


            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                    onClick={() => navigate("/student-profile")}
                    type="button"
                    className="text-sm font-semibold leading-6 text-gray-900"
                >
                    Cancel
                </button>
                <button
                    onSubmit={handleFormSubmit}
                    onClick={handleFormSubmit}
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
