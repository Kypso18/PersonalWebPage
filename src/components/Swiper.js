import React from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

// Import your project data
import projects from './projectsData'
// Import Tailwind CSS classes
import 'tailwindcss/tailwind.css';

// Install required Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const SwiperContainer = () => {
  return (
    
    <div className="container mx-auto my-4 py-18 px-8">
        <h2 className="text-2xl text-center font-bold pt-4 mt-2 mb-3">My Projects</h2>
        <br></br>
        <br></br>
        <Swiper
  spaceBetween={1}
  navigation
  pagination={{ clickable: true }}
  breakpoints={{
    // When window width is >= 640px
    640: {
      slidesPerView: 1,
    },
    // When window width is >= 768px
    768: {
      slidesPerView: 1,
    },
    // When window width is >= 1024px
    1024: {
      slidesPerView: 2,
    },
  }}
>

        {projects.map((project, index) => (
          <SwiperSlide className='px-10  mb-10 mx-auto flex justify-center' key={index}>
            <div className="rounded-lg px-10 items-center shadow">
            <h2 className="text-2xl text-center font-bold mb-2">{project.title}</h2>
              <img src={project.coverPhoto} alt={project.title} className="w-42 h-fit py-2" />
              <div className="p-3">
                <h2 className="text-lg mb-2">{project.description}</h2>
                <a
                  href={project.redirectionLink}
                  className="inline-block bg-blue-500/60 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperContainer;
