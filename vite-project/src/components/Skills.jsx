import React from 'react';

const Skills = ({ data }) => {
  return (
    <section className="bg-white shadow-md rounded-xl p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-blue-500 pl-3">
        Skills
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4">
        {data.map((skill) => (
          <div 
            key={skill.id} 
            className={`p-3 border rounded-lg flex items-center gap-3 hover:shadow-md transition-all ${skill.is_main ? 'border-blue-200 bg-blue-50' : 'border-gray-100'}`}
          >
            <img src={skill.icon_url} alt={skill.name} className="w-8 h-8" />
            <div>
              <h3 className="font-semibold text-gray-800 text-sm">{skill.name}</h3>
              <p className="text-xs text-gray-500 capitalize">{skill.level}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;