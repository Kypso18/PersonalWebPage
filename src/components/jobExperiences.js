import React from 'react';
import { FaBriefcase } from 'react-icons/fa';


const jobExperiences = [
  {
    id: 1,
    company: 'Figaro Coffee Company',
    position: 'Marketing Intern',
    duration: 'March 2019 - June 2019',
    description: 'Managed marketing materials and archived files using Microsoft Excel which is used by different departments.',
    more: 'Organized the storage of advertisement products to make its flow of replenishment and delivery easier.',
  },
  {
    id: 2,
    company: 'Harte Hanks',
    position: 'Technical Service Representative',
    duration: 'August 2018 - July 2021',
    description: 'Communicated with the customers to resolve their technical and billing concerns.',
    more: 'Fact-checked and oversaw the accounts of customers if there is a need for information updates securing their accounts from fraud and system issues.',
  },
  {
    id: 3,
    company: 'Starbucks',
    position: 'Barista',
    duration: 'May 2022 - August 2022',
    description: 'Worked as a team player, to serve fast-phase customers with quality and integrity.',
    more: 'Practiced lean principles in every action we do to cater to the demands that our store branch is facing.',
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-8">
    <div className="container mx-auto px-12 xl:px-14 md:px-24 lg:px-32 sm:px-20">
      <h2 className="text-2xl font-bold mb-4 text-center">Previous Job Experiences</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {jobExperiences.map((experience) => (
          <div key={experience.id} className="bg-white/50 rounded-lg p-4 shadow-md">
            <div className="flex items-center mb-2">
              <FaBriefcase className="w-6 h-6 mr-3" />
              <div>
                <p className="text-md lg:text-lg font-bold">{experience.position}</p>
                <p className="text-gray-600 text-sm lg:text-md">{experience.company}</p>
                <p className="text-gray-600 text-sm lg:text-md">{experience.duration}</p>
              </div>
            </div>
            <p className="text-gray-800 text-sm lg:text-md px-3">&nbsp; &nbsp;&nbsp;{experience.description}</p>
            <p className="text-gray-800 text-sm lg:text-md px-3">&nbsp; &nbsp;&nbsp;{experience.more}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default ExperienceSection;
