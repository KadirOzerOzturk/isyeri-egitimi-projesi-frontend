import axios from 'axios';
import React, { useEffect, useState } from 'react'
import mainLogo from '../icons/gazi_university_logo.png';
import rektorluk from "../icons/gazi_rektorluk.jpg"
import { FaRegStar, FaStar } from "react-icons/fa";
import { useSelector } from 'react-redux';

function Home() {
  const [announcements, setAnnouncements] = useState([])
  const { user } = useSelector(state => state.auth)
  const [favorites, setFavorites] = useState([])
  const [pendingApiCall, setPendingApiCall] = useState(true)

  useEffect(() => {
    if (user) { // Eğer user tanımlı ise API isteği yap
      axios.get(`/announcements`)
        .then(res => {
          loadFavorites()
          console.log(res.data);
          setAnnouncements(res.data);
        })
        .catch(error => {
          console.error("Error fetching announcements:", error);
          // announcements isteği hata aldığında pendingApiCall false yapılır
          setPendingApiCall(false);
        });
    }
  }, [user]);

  const calculateTimeDifference = (announcementDate) => {
    const now = new Date();
    const announcementTime = new Date(announcementDate);
    const difference = now.getTime() - announcementTime.getTime();

    // Milisaniyeleri saniyeye dönüştür
    const seconds = Math.floor(difference / 1000);

    if (seconds < 60) {
      return `${seconds} saniye önce`;
    } else if (seconds < 3600) {
      const minutes = Math.floor(seconds / 60);
      return `${minutes} dakika önce`;
    } else if (seconds < 86400) {
      const hours = Math.floor(seconds / 3600);
      return `${hours} saat önce`;
    } else if (seconds < 604800) {
      const days = Math.floor(seconds / 86400);
      return `${days} gün önce`;
    } else {
      const weeks = Math.floor(seconds / 604800);
      return `${weeks} hafta önce`;
    }
  }

  function handleFavorite(announcement) {
    const favoriteAnnouncementDto = {
      ogrenci: user,
      ilan: announcement // İlan bilgilerini announcement nesnesinden alınacak
    };
  
    // İlgili ilanın favori listesinde olup olmadığını kontrol et
    const isAlreadyFavorited = favorites.some(favorite => favorite.ilan.ilanId === announcement.ilanId && favorite.ogrenci.ogrenciNo === user.ogrenciNo);
  
    // Favori zaten varsa, favoriyi kaldır
    if (isAlreadyFavorited) {
      axios.delete(`/favorites/${user.ogrenciNo}/${announcement.ilanId}`)
        .then(response => {
          console.log("Favori ilan başarıyla kaldırıldı:", response.data);
          // Favori ilan başarıyla kaldırıldıktan sonra gerekli işlemleri yapabilirsiniz
          // Örneğin, favorileri güncelleyebilirsiniz
          const updatedFavorites = favorites.filter(favorite => !(favorite.ilan.ilanId === announcement.ilanId && favorite.ogrenci.ogrenciNo === user.ogrenciNo));
          setFavorites(updatedFavorites);
        })
        .catch(error => {
          console.error("Favori ilan kaldırılırken hata oluştu:", error);
          // Favori ilan kaldırılırken bir hata oluşursa gerekli işlemleri yapabilirsiniz
        });
    } else { // Favori yoksa, favoriyi ekle
      axios.post('/favorites/setFavorite', favoriteAnnouncementDto)
        .then(response => {
          console.log("Favori ilan başarıyla eklendi:", response.data);
          // Favori ilan başarıyla eklendikten sonra gerekli işlemleri yapabilirsiniz
          // Örneğin, favorileri güncelleyebilirsiniz
          loadFavorites()
        })
        .catch(error => {
          console.error("Favori ilan eklenirken hata oluştu:", error);
          // Favori ilan eklenirken bir hata oluşursa gerekli işlemleri yapabilirsiniz
        });
    }
  }
  function loadFavorites() {
    axios.get(`/favorites/${user.ogrenciNo}`)
      .then(res => {
        console.log("Favorites loaded successfully:", res.data);
        setFavorites(res.data);
        setPendingApiCall(false)
      })
      .catch(error => {
        console.error("Error fetching favorites:", error);
        // Favoriler yüklenirken bir hata oluşursa gerekli işlemleri yapabilirsiniz
      });
  }

  return (
    <div className='container mx-auto my-12  pt-5 z-40 grid-cols-1 w-1/4 text-xl  grid'>

      {
        pendingApiCall ?
          <div className="border border-slate-200  shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-700 h-10 w-10"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-700 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
          :
          null
      }
      {announcements.map((announcement) => (
        <div key={announcement.ilanId} className='px-3 py-2  mt-6  shadow-lg rounded-md '>
          <div className='flex my-2 gap-3'>
            <img src={mainLogo} alt="" className='h-12 w-12 rounded-full' />
            <div>
              <p>{announcement.firma.firmaAd}</p>
              <p className='text-sm text-slate-700'>{calculateTimeDifference(announcement.baslangic_tarihi)} </p>
            </div>
          </div>

          <hr />
          <h1 className='pt-3 text-md text-slate-800'>{announcement.aciklama}</h1>
          <hr />
          <div>
            <img src={rektorluk} alt="" className='rounded-lg mt-2 h-full w-full' />
          </div>
          {
            favorites.some(favorite => favorite.ilan.ilanId === announcement.ilanId && favorite.ogrenci.ogrenciNo === user.ogrenciNo) ?
            <FaStar onClick={() => handleFavorite(announcement)} className='mt-4 text-3xl text-yellow-400 cursor-pointer' /> :  
            <FaRegStar onClick={() => handleFavorite(announcement)} className='mt-4 text-3xl cursor-pointer' />
      }
        </div>
      ))}

    </div>
  )
}

export default Home
