import React from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

// Import your photos and videos here
import photo1 from '../assets/picv/Picv1 (1).jpeg';
import photo2 from '../assets/picv/Picv1 (2).jpg';
import photo3 from '../assets/picv/KodegoGrad.png';
import photo4 from '../assets/picv/Picv1 (3).jpg';
import photo5 from '../assets/picv/Picv1 (3).jpeg';
import photo6 from '../assets/picv/Dota2.jpg';
import photo7 from '../assets/picv/Picv1 (4).jpg';
import photo8 from '../assets/picv/Picv1 (5).jpeg';
import photo9 from '../assets/picv/Picv1 (5).jpg';
import photo10 from '../assets/picv/Picv1 (6).jpg';
import photo11 from '../assets/picv/Picv1 (7).jpg';
import photo12 from '../assets/picv/Picv1 (8).jpg';
import photo13 from '../assets/picv/Picv2 (1).jpg';
import photo14 from '../assets/picv/Picv2 (2).jpg';
import photo15 from '../assets/picv/Picv2 (3).jpg';
import photo16 from '../assets/picv/Picv2 (4).jpg';
import photo17 from '../assets/picv/Picv2 (5).jpg';
import photo18 from '../assets/picv/Picv2 (6).jpg';
import video1 from '../assets/picv/Vid1.mp4';
import video2 from '../assets/picv/Vid2.mp4';
import video3 from '../assets/picv/Vid3.mp4';
import photo19 from '../assets/picv/Picv1 (4).jpeg';

// Install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const PhotoVideoSwiper = () => {
  const photovideo = [
    {
      id: 1,
      image: photo1,
    },
    {
      id: 2,
      image: photo2,
    },
    {
      id: 3,
      video: video1,
    },
    {
      id: 4,
      image: photo3,
    },
    {
      id: 5,
      image: photo4,
    },
    {
      id: 6,
      video: video2,
    },
    {
      id: 7,
      image: photo5,
    },
    {
      id: 8,
      image: photo6,
    },
    {
      id: 9,
      video: video3,
    },
    {
      id: 10,
      image: photo7,
    },
    {
      id: 11,
      image: photo8,
    },
    {
      id: 12,
      image: photo9,
    },
    {
      id: 13,
      image: photo10,
    },
    {
      id: 14,
      image: photo11,
    },
    {
      id: 15,
      image: photo12,
    },
    {
      id: 16,
      image: photo13,
    },
    {
      id: 17,
      image: photo14,
    },
    {
      id: 18,
      image: photo15,
    },
    {
      id: 19,
      image: photo16,
    },
    {
      id: 20,
      image: photo17,
    },
    {
      id: 21,
      image: photo18,
    },
    {
      id: 22,
      image: photo19,
    },
  ];

  return (
    <div className="container mx-auto px-9">
      <Swiper
        pagination={{ clickable: true }}
        slidesPerView={1}
        spaceBetween={10}

      >
        {photovideo.map((item) => (
          <SwiperSlide className="pt-20 pb-10" key={item.id}>
            
              <div className="px-12 mx-auto">
                {item.video ? (
                  <video
                    controls
                    className="object-contain h-auto max-w-full rounded-lg shadow-xl dark:shadow-gray-800 mx-auto"
                  >
                    <source src={item.video} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-contain h-auto max-w-full rounded-lg shadow-xl dark:shadow-gray-800 mx-auto"
                  />
                )}
              </div>
            
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PhotoVideoSwiper;
