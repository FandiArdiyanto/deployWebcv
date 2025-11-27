import React from 'react';

const Profile = ({ data }) => {
  return (
    <section className="bg-white shadow-lg rounded-xl p-6 mb-6 text-center md:text-left md:flex md:items-center md:gap-8 hover:shadow-xl transition-shadow duration-300">
      {/* Foto Profil */}
      <div className="flex-shrink-0 mx-auto md:mx-0">
        <img 
          src={data.photo_url} 
          alt={data.full_name} 
          className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-md"
        />
      </div>

      {/* Detail Profil */}
      <div className="mt-4 md:mt-0 flex-grow">
        <h1 className="text-3xl font-bold text-gray-800">{data.full_name}</h1>
        <p className="text-blue-600 font-semibold text-lg">{data.nim}</p>
        <p className="text-gray-500 text-sm mt-1">{data.prodi} - Angkatan {data.angkatan}</p>
        <div className="my-3 border-t border-gray-200 w-full"></div>
        <p className="text-gray-700 italic">"{data.headline}"</p>
        <p className="text-gray-600 mt-2 text-sm">{data.short_bio}</p>
        
        {/* Lokasi & Tombol */}
        <div className="mt-4 flex items-center justify-center md:justify-start gap-2 text-gray-500 text-sm">
            <span>📍 {data.location}</span>
            <a href={data.portfolio_url} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline ml-4 font-medium">
                Lihat Portfolio →
            </a>
        </div>
      </div>
    </section>
  );
};

export default Profile;