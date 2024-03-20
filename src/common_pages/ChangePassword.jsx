import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'sonner'



function ChangePassword() {
    const { user } = useSelector(state => state.auth);
    const [currentPassword, setCurrentPassword] = useState();
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [changedUser, setChangedUser] = useState({ ...user })
    const [isDisabled, setIsDisabled] = useState(false)

    const hasUppercase = /[A-Z]/.test(newPassword);
    const hasLowerCase = /[a-z]/.test(newPassword)
    const hasNumber = /[0-9]/.test(newPassword);
    const isLengthValid = newPassword.length >= 8;

    const navigate=useNavigate()

    // Şifre gereksinimlerini kontrol eden işlev
    useEffect(() => {
        // Şifre kriterlerini kontrol etmek ve submit butonunu etkinleştirmek için bir etkileşim oluşturuyoruz
        if (hasUppercase && hasLowerCase && hasNumber && isLengthValid && newPassword === confirmPassword) {
            setIsDisabled(false); // Tüm kriterler sağlandığında submit butonunu etkinleştir
        } else {
            setIsDisabled(true); // Herhangi bir kriter sağlanmadığında submit butonunu devre dışı bırak
        }
    }, [hasUppercase, hasLowerCase, hasNumber, isLengthValid, newPassword, confirmPassword]);


    const submitChanges = (e) => {
        e.preventDefault()
        changedUser.ogrenciParola = newPassword;
        if (currentPassword === user.ogrenciParola) {

            axios.put(`/students/update/${user.ogrenciNo}`, changedUser)
                .then(response => {
                    // Başarılı bir şekilde güncellendiğinde yapılacak işlemler
                    if (response.status == 200) {
                        console.log('Parolaniz güncellendi:', response.data);
                        toast.success('Parolaniz Güncellendi');
                        navigate("/student-profile")
                    }
                })
                .catch(error => {
                    // Hata durumunda yapılacak işlemler
                    console.error('Hata:', error);
                });

        } else {
            toast.error("Mevcut parolanizi yanlis girdiniz!!!")
        }

    }

    return (
        <div className="bg-gray-100 flex items-center justify-center h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                <div className="flex items-center space-x-2 mb-6">
                    <img src={user.avatar} alt="Lock Icon" className="rounded-full w-12 h-12 mr-4" />
                    <h1 className="text-xl font-semibold">Change Password</h1>
                </div>
                <p className="text-sm text-gray-600 mb-6">Update password for enhanced account security.</p>
                <form id="changePasswordForm" className="space-y-6">
                    <div>
                        <label htmlFor="currentPassword" className="text-sm font-medium text-gray-700 block mb-2">Current Password *</label>
                        <input type="password" id="currentPassword" className="p-1 password-input form-input block w-full border border-gray-300 rounded-md shadow-sm" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} required />
                    </div>
                    <div>
                        <label htmlFor="newPassword" className="text-sm font-medium text-gray-700 block mb-2">New Password *</label>
                        <input type="password" id="newPassword" className="p-1 password-input form-input block w-full border border-gray-300 rounded-md shadow-sm" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700 block mb-2">Confirm New Password *</label>
                        <input type="password" id="confirmPassword" className="p-1 password-input form-input block border w-full border-gray-300 rounded-md shadow-sm" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                        {newPassword !== confirmPassword && confirmPassword !== '' && (
                            <p className="text-red-500">Passwords do not match.</p>
                        )}
                    </div>
                    <div id="passwordCriteria" className="text-sm space-y-2">
                        <p className={hasUppercase ? 'text-green-500' : 'text-red-500'}>
                            {hasUppercase ? '✓ At least 1 uppercase' : '✘ At least 1 uppercase'}
                        </p>
                        <p className={hasLowerCase ? 'text-green-500' : 'text-red-500'}>
                            {hasLowerCase ? '✓ At least 1 lowercase' : '✘ At least 1 lowercase'}
                        </p>
                        <p className={hasNumber ? 'text-green-500' : 'text-red-500'}>
                            {hasNumber ? '✓ At least 1 number' : '✘ At least 1 number'}
                        </p>
                        <p className={isLengthValid ? 'text-green-500' : 'text-red-500'}>
                            {isLengthValid ? '✓ At least 8 characters' : '✘ At least 8 characters'}
                        </p>
                    </div>
                    <button
                        type="submit"
                        onClick={submitChanges}
                        className={`px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300 ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={isDisabled} // Devre dışı bırakma durumu
                    >
                        Apply Changes
                    </button>
                </form>
            </div>
            <Toaster richColors position="top-right" />
        </div>
    );
}

export default ChangePassword;
