import React from 'react'
import FormInput from '../components/FormInput'

function KabulFormu() {
    return (
        <div className='container mx-auto my-5 pl-24 pt-5 z-40  grid font-roboto'>
            <h1 className='text-3xl pb-8 font-extrabold'>Kabul Formu</h1>

            <div className='grid  grid-cols-1 md:grid-cols-2'>
                <FormInput Label="Adi Soyadi" isDisable={true} inputText={"Kadir Ozer Ozturk"} />
                <FormInput Label="TC Kimlik No" isDisable={true} inputText={"40159701816"} />
            </div>
            <div className='grid grid-cols-2'>
                <FormInput Label="Ogrenci No" isDisable={true} inputText={"1111111111"} />
                <FormInput Label="Ogretim Yili" isDisable={true} inputText={"11/11/2024"} />
            </div>
            <div className='grid grid-cols-2'>
                <FormInput Label="E-posta Adresi" isDisable={true} inputText={"kadir@gmail.com"} />
                <FormInput Label="Telefon No(GSM)" isDisable={true} inputText={"111111111"} />
            </div>
            <FormInput Label="Akademik Birim" isDisable={true} inputText={"Teknoloji Fakultesi"} />
            <FormInput Label="Önlisans/Lisans Programı " isDisable={true} inputText={"Bilgisayar Muhendisligi"} />
            <FormInput Label="İkametgâh Adresi" isDisable={true} inputText={"Kirsehir/Merkez"} />


        
            <h1 className='py-6 font-extrabold text-lg'>STAJ/İŞYERİ EĞİTİMİ YAPILAN YER İLE İLGİLİ BİLGİLER </h1>
            <FormInput Label="Staj/İşyeri Eğitimi Başlangıç ve Bitiş Tarihi" inputText={"Tarih Alinacak"} />
            <FormInput Label="Staj/İşyeri Eğitimi Yapılan Yerin Adı" />
            <FormInput Label="Staj/İşyeri Eğitimi Yapılan Yerin Adresi" i />
            <FormInput Label="Faaliyet Alanı (Sektör) " />

            <div className='grid grid-cols-2'>
                <FormInput Label="Telefon No(GSM)" />
                <FormInput Label="Faks Numarasi" />

            </div>
            <div className='grid grid-cols-2'>
                <FormInput Label="E-posta Adresi" />
                <FormInput Label="Web Adresi" />
            </div>
        </div>
    )
}

export default KabulFormu