import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';



const academicBackground = [
  {
    id: 1,
    institution: 'Rizal Technological University',
    degree: 'Bachelor of Science in Industrial Engineering',
    graduationYear: 'the expected year 2023',
    description: 'Attained my Diploma of Industrial Engineering and now finishing the next chapter.',
  },
  {
    id: 2,
    institution: 'KodeGo Philippines',
    degree: 'Fullstack Web Development',
    graduationYear: '2023',
    description: 'Equipped me with the necessary entry level skills to penetrate the tech industry.',
  },
  // Add more academic backgrounds as needed
];

const AcademicBackgroundSection = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-12 xl:px-44 md:px-24 lg:px-32 sm:px-20">
        <h2 className="text-2xl font-bold mb-4 text-center">Academic Background</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
          {academicBackground.map((academic) => (
            <div key={academic.id} className="bg-white/50 rounded-lg p-4 shadow-md">
              <div className="flex items-center mb-2">
                <FaGraduationCap className="w-6 h-6 mr-3" />
                <div>
                  <p className="text-md lg:text-lg font-bold">{academic.degree}</p>
                  <p className="text-gray-600 text-sm lg:text-md">{academic.institution}</p>
                  <p className="text-gray-600 text-sm lg:text-md">Graduated in {academic.graduationYear}</p>
                </div>
              </div>
              <p className="text-gray-800 text-sm lg:text-md px-3">&nbsp; &nbsp;&nbsp;{academic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicBackgroundSection;
