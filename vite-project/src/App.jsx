import React from 'react';
import dataMahasiswa from './data/dataMahasiswa.json'; // Pastikan path ini benar
import Profile from './components/Profile';
import Skills from './components/Skills';
import Experiences from './components/Experiences';

function App() {
  const { profile, skills, experiences, statistics } = dataMahasiswa;

  return (
    <div className="min-h-screen py-10 px-4 font-sans bg-gray-50 text-gray-900">
      <div className="max-w-5xl mx-auto">
        
        <header className="mb-8 text-center">
            <h1 className="text-gray-400 text-xs tracking-[0.2em] uppercase font-bold">Curriculum Vitae</h1>
        </header>

        {/* 1. Profile Section */}
        <Profile data={profile} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* KIRI: Skills & Stats */}
          <div className="lg:col-span-1 space-y-6">
            <Skills data={skills} />
            
            {/* Statistik Box */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl p-6 shadow-lg">
                <p className="text-sm opacity-80 mb-1">Profile Completion</p>
                <div className="flex items-end gap-2 mb-3">
                    <span className="text-4xl font-bold">{statistics.profile_complete_percent}%</span>
                    <span className="text-sm opacity-80 mb-1">Completed</span>
                </div>
                <div className="w-full bg-blue-900/30 h-2 rounded-full overflow-hidden">
                    <div 
                        className="bg-white h-2 rounded-full transition-all duration-1000 ease-out" 
                        style={{ width: `${statistics.profile_complete_percent}%` }}
                    ></div>
                </div>
                <p className="text-xs mt-4 text-blue-100 opacity-80 pt-4 border-t border-blue-500/30">
                   Page Views: <strong>{statistics.views_count}</strong>
                </p>
            </div>
          </div>

          {/* KANAN: Experiences */}
          <div className="lg:col-span-2">
            <Experiences data={experiences} />
          </div>
        </div>

        <footer className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-400 text-sm">
            &copy; 2025 {profile.full_name}. Dibuat dengan React & Tailwind CSS.
          </p>
        </footer>

      </div>
    </div>
  );
}

export default App;