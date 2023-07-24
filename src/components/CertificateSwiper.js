import React from 'react';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import Cert1 from '../assets/certs/Cert1.jpg';
import Cert2 from '../assets/certs/Cert2.png';
import Cert3 from '../assets/certs/Cert3.jpg';
import Cert4 from '../assets/certs/Cert4.png';
import Cert5 from '../assets/certs/Cert5.jpg';
import Cert6 from '../assets/certs/Cert6.jpg';



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
      title: 'KodeGo: Fullstack Web Development',
      image: Cert2,
      url: 'https://assets.kodego.ph/public/isa/cPdmC6ut6jhFAaUbrPiv2lOSXqZoqgiRb3WfyubD.pdf',
    },
    {
        id: 3,
        title: 'SQL for Data Science',
        image: Cert3,
        url:'https://www.coursera.org/account/accomplishments/certificate/BVSD3HHRG6DX',
      },
      {
        id: 4,
        title: 'Foundations: Data, Data, Everywhere',
        image: Cert4,
        url:'https://www.coursera.org/account/accomplishments/certificate/HJS2EFDCEBJE'
      },
      {
        id: 5,
        title: 'Foundations of Project Management',
        image: Cert5,
        url: 'https://www.coursera.org/account/accomplishments/certificate/L9WXS8QLJKLV'
      },
      {
        id: 6,
        title: 'Sustainability',
        image: Cert6,
        url: 'https://asu.badgr.com/public/assertions/f7JUZaUiSU2KDEufTW0C8Q?v=',
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
           <div className="py-12 px-12 h-96">
             <img
               src={certificate.image}
               alt={certificate.title}
               className="object-contain h-full max-w-full rounded-lg shadow-xl dark:shadow-gray-800"
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
