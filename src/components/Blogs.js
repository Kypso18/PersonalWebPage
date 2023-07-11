import React from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Link } from 'react-router-dom';


// Import your blog data
import projects from './BlogData';
// Import Tailwind CSS classes
import 'tailwindcss/tailwind.css';

// Install required Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Blogs = () => {
  return (
    <div className="container mx-auto my-4 py-18 px-8">
      <h2 className="text-2xl text-center font-bold pt-4 mt-2 mb-3">My Blogs</h2>
      <br />
      <br />
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
            slidesPerView: 1,
          },
        }}
      >
        {projects.map((blog, index) => (
          <SwiperSlide className="px-10 mb-10 mx-auto flex justify-center" key={index}>
            <div className="rounded-lg px-10 items-center shadow">
              <h2 className="text-lg lg:text-xl text-center font-bold mb-2">{blog.title}</h2>
              <img src={blog.coverPhoto} alt={blog.title} className="w-50 h-fit mx-auto py-2" />
              <div className="p-3">
                <p className="text-sm text-center mb-2">{blog.date}</p>
                <h2 className="text-md text-center mb-4">{blog.description}</h2>
                <div className="flex justify-center">
                  <Link
                    to={`/${blog.id}`}
                    className="inline-block bg-blue-500/60 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    View Blog
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Blogs;
