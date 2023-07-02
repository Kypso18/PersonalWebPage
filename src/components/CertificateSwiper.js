import React from 'react';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import Cert1 from '../assets/certs/Cert1.jpg';
import Cert2 from '../assets/certs/Cert2.jpg';
import Cert3 from '../assets/certs/Cert3.jpg';



SwiperCore.use([Navigation, Pagination]);

const CertificateSwiper = () => {
  const certificates = [
    {
      id: 1,
      title: 'Lean Six Sigma Yellow Belt',
      image: Cert1,
      url: 'https://www.linkedin.com/feed/update/urn:li:activity:7002855057377427456/',
    },
    {
      id: 2,
      title: 'Sustainability',
      image: Cert2,
      url: 'https://asu.badgr.com/public/assertions/f7JUZaUiSU2KDEufTW0C8Q?v=',
    },
    {
        id: 3,
        title: 'SQL for Data Science',
        image: Cert3,
        url:'https://www.coursera.org/account/accomplishments/certificate/BVSD3HHRG6DX',
      },
      {
        id: 4,
        title: 'Certificate 4',
        image: 'path/to/certificate2.jpg',
      },
      {
        id: 5,
        title: 'Certificate 5',
        image: 'path/to/certificate2.jpg',
      }
   
  ];
  const handleClick = (url) => {
    window.open(url, '_blank');
  };
  return (
    <div className="container mx-auto px-9">
    <Swiper
      navigation
      pagination={{ clickable: true }}
      slidesPerView={1}
      spaceBetween={10}
      breakpoints={{
        // When window width is >= 640px
        640: {
          slidesPerView: 1,
        },
        // When window width is >= 768px
        768: {
          slidesPerView: 2,
        },
        // When window width is >= 1024px
        1024: {
          slidesPerView: 2,
        },
      }}
    >
      {certificates.map((certificate) => (
        <SwiperSlide className='mb-5' key={certificate.id} onClick={() => handleClick(certificate.url)}>
        <div className="flex justify-center">
          <div className="py-12 px-9">
            <img
              src={certificate.image}
              alt={certificate.title}
              className="px-4 h-auto max-w-xl w-full rounded-lg shadow-xl dark:shadow-gray-800 cursor-pointer"
            />
          </div>
        </div>
      </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};

export default CertificateSwiper;
