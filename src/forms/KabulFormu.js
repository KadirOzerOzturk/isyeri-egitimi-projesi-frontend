import React from 'react'
import FormInput from '../components/FormInput'

function KabulFormu() {
    return (
        <div className='container mx-auto my-5 pl-24 pt-5 z-40  grid font-roboto'>
            <h1 className='text-3xl pb-8 font-extrabold'>Kabul Formu</h1>

            <div className='grid  grid-cols-1 md:grid-cols-2'>
                <FormInput Label="Adi Soyadi" isDisable={true} inputText={"Kadir Ozer Ozturk"} />
                <FormInput Label="TC Kimlik No" isDisable={true} inputText={"40159701816"} />

                <FormInput Label="Ogrenci No" isDisable={true} inputText={"1111111111"} />
                <FormInput Label="Ogretim Yili" isDisable={true} inputText={"11/11/2024"} />

                <FormInput Label="E-posta Adresi" isDisable={true} inputText={"kadir@gmail.com"} />
                <FormInput Label="Telefon No(GSM)" isDisable={true} inputText={"111111111"} />

                <FormInput Label="Akademik Birim" isDisable={true} inputText={"Teknoloji Fakultesi"} />
                <FormInput Label="Önlisans/Lisans Programı " isDisable={true} inputText={"Bilgisayar Muhendisligi"} />
                <FormInput Label="İkametgâh Adresi" isDisable={true} inputText={"Kirsehir/Merkez"} />
            </div>


            <h1 className='py-6 font-extrabold text-lg'>STAJ/İŞYERİ EĞİTİMİ YAPILAN YER İLE İLGİLİ BİLGİLER </h1>
            <div className='grid grid-cols-2'>

                <FormInput Label="Staj/İşyeri Eğitimi Başlangıç ve Bitiş Tarihi" inputText={"Tarih Alinacak"} />
                <FormInput Label="Staj/İşyeri Eğitimi Yapılan Yerin Adı" />
                <FormInput Label="Staj/İşyeri Eğitimi Yapılan Yerin Adresi" i />
                <FormInput Label="Faaliyet Alanı (Sektör) " />


                <FormInput Label="Telefon No(GSM)" />
                <FormInput Label="Faks Numarasi" />



                <FormInput Label="E-posta Adresi" />
                <FormInput Label="Web Adresi" />
            </div>
            <h1 className='py-6 font-extrabold text-lg'>İŞVEREN VEYA YETKİLİNİN </h1>
            <FormInput Label="Adi Soyadi" />
            <FormInput Label="Gorevı" />
            <FormInput Label="E-posta adresı" />
            <FormInput Label="Tarih" />
            <FormInput Label="Isveren S.G.K. Tescil No." />

            <h1 className='py-6 font-extrabold text-lg'>ÖĞRENCİNİN NÜFUS KAYIT BİLGİLERİ (Staj/ İşyeri eğitim başvurusu kabul edildiği takdirde öğrenci
                tarafından doldurulur.)  </h1>
            <div className='grid grid-cols-2'>
                <FormInput Label="Adı" />
                <FormInput Label="Soyadı" />
                <FormInput Label="Baba Adi" />
                <FormInput Label="Anne Adi" />
                <FormInput Label="Dogum Yeri" />
                <FormInput Label="Dogum Tarihi" />
                <FormInput Label="T.C. Kimlik No" />
                <FormInput Label="N. Cuzdani Seri No" />
                <FormInput Label="S.G.K No." />
                <FormInput Label="Cilt No." />
                <FormInput Label="Aile Sira No." />
                <FormInput Label="Sira No" />
                <FormInput Label="Verildigi Nufus Dairesi" />
                <FormInput Label="Verilis Nedeni" />
                <FormInput Label="Verilis Tarihi" />
                <FormInput Label="Nüfusa Kayıtlı Olduğu İl " />
                <FormInput Label="Ilce" />
                <FormInput Label="Mahalle-Koy" />

            </div>
            <button className='p-2 bg-green-600 text-white w-24 rounded-lg'>Kaydet</button>
        </div>
    )
}

export default KabulFormu