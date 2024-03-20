import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../store/auth';
import moment from "moment";
import { FaTrash } from "react-icons/fa";
import { Toaster, toast } from 'sonner'
function WeeklyReport() {
    const [content, setContent] = useState("");
    const { user } = useSelector(state => state.auth);
    const [reports, setReports] = useState([]);
    const dispatch = useDispatch()
    const [pendingApiCall, setPendingApiCall] = useState(true)
    const [isUpdate, setIsUpdate] = useState(false)
    const [changedReport, setChangedReport] = useState({})

    useEffect(() => {
        if (user) {
            axios.get(`/report/${user.ogrenciNo}`)
                .then((res) => {
                    if (res.status === 200) {
                        setReports(res.data)
                        setPendingApiCall(false)
                    }
                })
                .catch(error => {
                    console.error("Haftalik rapor yuklenirken hata oluştu:", error);
                });
        }
    }, [user, dispatch])

    function handleSubmit(e) {



        axios.post('/report/setReport', {
            ogrenci: user,
            raporIcerigi: content,
            tarih: new Date()
        })
            .then(response => {
                toast.success("Haftalik rapor başarıyla eklendi:");
            })
            .catch(error => {
                toast.error("Haftalik rapor eklenirken hata oluştu:");
            });


    }
    function handleUpdate(e) {
        e.preventDefault();

        axios.put(`/report/update/${changedReport.raporId}`, {
            ogrenci: user,
            raporIcerigi: content,
        })
            .then(response => {
                toast.success("Haftalık rapor başarıyla güncellendi");
                setIsUpdate(false); // Güncelleme modunu kapat
                setChangedReport({}); // Değişen raporu temizle
                setContent(""); // İçeriği temizle
                // Gerekirse raporları yeniden yükleme işlemi burada yapılabilir.
            })
            .catch(error => {
                toast.error("Haftalık rapor güncellenirken hata oluştu");
            });
            window.location.reload()
    }


    function handleEdit(e, report) {
        e.preventDefault()
        setChangedReport(report)
        setIsUpdate(true)
    }
    function handleDelete(e, raporId) {
        axios.delete(`/report/delete/${user.ogrenciNo}/${raporId}`)
            .then(response => {

                toast.success("Haftalik rapor başarıyla silindi:");
                if (response.status === 200) {
                    window.location.reload()
                }
            })
            .catch(error => {
                toast.error("Haftalik rapor silinirken hata oluştu:");
            });

    }
    return (
        <div className='flex container  mx-auto my-5 pl-24 pt-5 z-40 '>
            <div className="w-1/3 ml-24 p-4">
                <form className="bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Weekly Report</h2>
                    <div className="mb-4">
                        <label htmlFor="message" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Your message</label>
                        <textarea
                            onChange={(e) => setContent(e.target.value)}
                            id="message"
                            rows="4"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Leave a comment..."
                            defaultValue={isUpdate ? changedReport.raporIcerigi : null}
                            required
                        ></textarea>
                    </div>
                    {isUpdate ?
                        <div className="flex justify-end">
                            <button onClick={(e) => handleUpdate(e)} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Güncelle</button>
                        </div> :
                        <div className="flex justify-end">
                            <button onClick={(e) => handleSubmit(e)} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Kaydet</button>
                        </div>
                    }


                </form>
            </div>
            <div className="flex-1 p-4 overflow-y-auto">
                {reports.map((report, index) => (
                    <div key={index} className='w-2/3 mb-4'>
                        <div className="w-full px-4 py-2 bg-white rounded-lg shadow-md">
                            <div className="flex justify-between items-center">
                                <span className="font-light text-gray-600">{moment(report.tarih).format("MM/DD/YYYY")}</span>
                                <span className='cursor-pointer relative' onClick={(e) => handleDelete(e, report.raporId)}>
                                    <FaTrash className='text-gray-500' />
                                    <span className="absolute top-0 left-0 right-0 bottom-0 border  border-gray-300 rounded-full pointer-events"> </span>
                                </span>
                            </div>

                            <div className="mt-2">
                                <p className="mt-2 text-gray-600">{report.raporIcerigi}</p>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <a className="text-blue-600 hover:underline" onClick={(e) => handleEdit(e, report)} href="">Duzenle</a>
                                <div>
                                    <div className="flex items-center">
                                        <img className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block" src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80" alt="avatar" />
                                        <h1 className="text-gray-700 font-bold">{report.ogrenci.ogrenciAd} {report.ogrenci.ogrenciSoyad}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Toaster richColors position="top-right" />

        </div>

    );
}

export default WeeklyReport;
