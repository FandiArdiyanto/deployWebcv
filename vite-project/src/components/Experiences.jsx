import React from 'react';

const Experiences = ({ data }) => {
  return (
    <section className="bg-white shadow-md rounded-xl p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-blue-500 pl-3">
        Experiences
      </h2>

      <div className="space-y-6">
        {data.map((exp) => (
          <div key={exp.id} className="flex flex-col sm:flex-row gap-4 border-b border-gray-100 pb-4 last:border-0 last:pb-0">
            {/* Logo Organisasi/Project */}
            <div className="flex-shrink-0">
                <img src={exp.image_url} alt={exp.organization} className="w-16 h-16 rounded-md object-cover bg-gray-200 border border-gray-200" />
            </div>
            
            {/* Detail Pengalaman */}
            <div className="flex-grow">
              <div className="flex justify-between items-start flex-col sm:flex-row mb-1">
                <div>
                    <h3 className="text-lg font-bold text-gray-800 leading-tight">{exp.title}</h3>
                    <p className="text-blue-600 font-medium text-sm">{exp.organization}</p>
                </div>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded mt-2 sm:mt-0 whitespace-nowrap">
                    {exp.start_date} - {exp.is_current ? 'Sekarang' : exp.end_date}
                </span>
              </div>
              
              <p className="text-gray-600 text-sm mb-3 leading-relaxed">{exp.description}</p>
              
              {/* Tech Stack Tags */}
              {exp.technologies && (
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, index) => (
                    <span key={index} className="text-xs bg-blue-50 text-blue-600 border border-blue-100 px-2 py-0.5 rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;