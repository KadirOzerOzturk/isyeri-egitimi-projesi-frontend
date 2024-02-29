import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaCheck, FaUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

function ListStudentGroups() {
    const [students, setStudents] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [showTasks, setShowTasks] = useState()
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                console.log(res.data);
                setStudents(res.data);
            })
            .catch(error => {
                console.error("Error fetching comp:", error);
            });
    }, []);

    const handleAddClick = (e, student) => {
        e.preventDefault();
        setSelectedStudent(student);
    };
    const handleShowTaskBtn = (e) => {
        e.preventDefault();
        setShowTasks(!showTasks);
    };



    return (
        <div className='container grid grid-cols-2 mx-auto my-5 pl-24 pt-5 z-40 font-roboto'>
            <div className='flex justify-between gap-6'>
                <div className="border-slate-200 border-2 p-3 text-sm font-medium text-gray-900 bg-white rounded-lg">
                    <h1 className='py-2 text-center text-lg'> Ogrenciler</h1>
                    <table className="mx-auto text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Ad-Soyad
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    E-posta
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Calistigi Firma
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Baslama Tarihi
                                </th>
                                <th scope="col" className="px-6 py-3 text-center">
                                    
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student) => (
                                <tr key={student.id} className="odd:bg-white  even:bg-gray-50 border-b">
                                    <th onClick={()=> navigate(`/student-profile/${student.id}`)} scope="row" className="cursor-pointer px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        {student.name}
                                    </th>
                                    <td  className="px-6 py-4">
                                        {student.email}
                                    </td>
                                    <td  className="px-6 py-4">
                                        firma ismi
                                    </td>
                                    <td  className="px-6 py-4">
                                        baslama tarihi
                                    </td>
                                    <td className="px-6 py-4 flex items-center border-r-2 ">
                                        <div onClick={() => navigate(`/student-profile/${student.id}`)} className='flex w-full gap-1 items-center cursor-pointer text-nowrap hover:underline rounded-lg p-2    ' >
                                            <FaUser className='text-xl ' />
                                            <p>Öğrencinin Profili</p>
                                        </div>
                                        <a href="#" onClick={(e) => handleAddClick(e, student)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Görüntüle</a>


                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='border-slate-200 border-2 p-3 text-sm font-medium text-gray-900 bg-white top-0 rounded-lg'>
                    <h1 className='py-2 text-center text-lg'>Öğrenci Bilgileri</h1>
                    <table className="mx-auto text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Ad-Soyad
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    E-posta
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Calistigi Firma
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Baslama Tarihi
                                </th>
                                <th scope="col" className="px-6 py-3 text-center">
                                 
                                 
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {selectedStudent ? (
                                <tr className="odd:bg-white even:bg-gray-50 border-b">
                                    <th onClick={()=> navigate(`/student-profile/${selectedStudent.id}`)} scope="row" className="cursor-pointer px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        {selectedStudent.name}
                                    </th>
                                    <td  className="px-6 py-4">
                                        {selectedStudent.email}
                                    </td>
                                    <td  className="px-6 py-4">
                                        aaaaa
                                    </td>
                                    <td  className="px-6 py-4">
                                        aaaaa
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className='flex items-center border-b-4 cursor-pointer' onClick={handleShowTaskBtn}>
                                            <h1 className='text-md'>Görevler</h1>
                                            {showTasks ? <MdArrowDropUp className='text-2xl' /> : < MdArrowDropDown className='text-2xl' />}

                                        </div>
                                    </td>
                                </tr>

                            ) : (
                                <tr>
                                    <td className='p-2' colSpan="3">Henüz seçim yapılmadı</td>
                                </tr>
                            )}
                            {showTasks &&
                                (<div className='p-3 '>
                                    <div className='flex items-center gap-2 '>
                                    <FaCheck />
                                        <tr>task 1</tr>
                                    </div>
                                    
                                    <tr>task 2</tr>
                                    <tr>task 3</tr>
                                    <tr>task 4</tr>
                                </div>
                                )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ListStudentGroups;
