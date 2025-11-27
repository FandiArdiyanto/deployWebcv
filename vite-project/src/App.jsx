import React from 'react';
import dataMahasiswa from './data/dataMahasiswa.json';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Experiences from './components/Experiences';

function App() {
  const { profile, skills, experiences } = dataMahasiswa;

  return (
    <div className="min-h-screen py-10 px-4 font-sans bg-gray-50 text-gray-900">
      <div className="max-w-5xl mx-auto">
        
        <header className="mb-12 text-center relative">
            <h1 className="text-3xl font-serif font-bold text-gray-800 tracking-wide z-10 relative inline-block px-4 bg-gray-50">
                Curriculum Vitae
            </h1>
            <div className="absolute top-1/2 left-0 w-full h-px bg-gray-300 -z-0"></div>
        </header>

        <Profile data={profile} />

        <div className="flex flex-col gap-6">
          
          <div className="w-full">
            <Skills data={skills} />
          </div>

          <div className="w-full">
            <Experiences data={experiences} />
          </div>

        </div>

        <footer className="text-center mt-12 pt-8 border-t border-gray-200 font-serif">
          <p className="text-gray-500 text-sm italic">
            &copy; 2025 {profile.full_name}. All rights reserved.
          </p>
        </footer>

      </div>
    </div>
  );
}

export default App;