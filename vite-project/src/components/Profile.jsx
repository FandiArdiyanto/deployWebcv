import React, { useState } from 'react';

const Profile = ({ data }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      <section className="bg-white shadow-lg rounded-xl p-6 mb-6 text-center md:text-left md:flex md:items-center md:gap-8 hover:shadow-xl transition-shadow duration-300 relative">
        <div className="flex-shrink-0 mx-auto md:mx-0">
          <img 
            src={data.photo_url} 
            alt={data.full_name} 
            onClick={() => setIsZoomed(true)}
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-md mx-auto cursor-pointer hover:opacity-80 transition-opacity duration-300"
            title="Klik untuk memperbesar foto"
          />
        </div>

        <div className="mt-4 md:mt-0 flex-grow">
          <h1 className="text-3xl font-bold text-gray-800">{data.full_name}</h1>
          <p className="text-blue-600 font-semibold text-lg">{data.nim}</p>
          <p className="text-gray-500 text-sm mt-1">{data.prodi} - Angkatan {data.angkatan}</p>
          <div className="my-3 border-t border-gray-200 w-full"></div>
          <p className="text-gray-700 italic">"{data.headline}"</p>
          <p className="text-gray-600 mt-2 text-sm">{data.short_bio}</p>
          
          <div className="mt-4 flex items-center justify-center md:justify-start gap-2 text-gray-500 text-sm">
              <span>📍 {data.location}</span>
              <a href={data.portfolio_url} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline ml-4 font-medium">
                  Lihat Portfolio →
              </a>
          </div>
        </div>
      </section>

      {isZoomed && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4 transition-opacity duration-300 backdrop-blur-sm"
          onClick={() => setIsZoomed(false)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={data.photo_url} 
              alt={data.full_name} 
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain animate-[zoomIn_0.3s_ease-out]"
            />
            
            <button 
              onClick={() => setIsZoomed(false)}
              className="absolute -top-4 -right-4 bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shadow-lg hover:bg-red-700 transition-colors"
            >
              ✕
            </button>
            
            <p className="text-white text-center mt-4 text-sm bg-black/50 px-3 py-1 rounded-full mx-auto w-fit">
              Klik di mana saja untuk menutup
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;