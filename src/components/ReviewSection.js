import React from 'react';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';

SwiperCore.use([Navigation, Pagination]);

const ReviewSection = () => {
  const reviews = [
    {
      id: 1,
      picture: 'path_to_picture1',
      reviewText: 'This is the first review.',
      stars: 4,
    },
    {
      id: 2,
      picture: 'path_to_picture2',
      reviewText: 'This is the second review.',
      stars: 5,
    },
    {
      id: 2,
      picture: 'path_to_picture2',
      reviewText: 'This is the second review.',
      stars: 5,
    },
    {
      id: 2,
      picture: 'path_to_picture2',
      reviewText: 'This is the second review.',
      stars: 5,
    },
    {
      id: 2,
      picture: 'path_to_picture2',
      reviewText: 'This is the second review.',
      stars: 5,
    },
    // Add more reviews here
  ];

  return (
    <div className="container mx-auto px-9">
      <Swiper
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1}
        spaceBetween={5}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
      >
        {reviews.map((review) => (
      
           
       
          <SwiperSlide className="mb-5" key={review.id}>
            
            <div className="rounded-lg mx-12 p-4 mb-4 shadow-md flex flex-col items-center bg-white/60">
                
              <img src={review.picture} alt="Review" className="w-24 h-24 rounded-full mb-4" />
              <p className="text-lg text-center mb-2">{review.reviewText}</p>
              <div className="flex">
                {Array.from(Array(review.stars)).map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-yellow-500 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 .67l2.56 6.425L19.336 7.88l-5.892 4.925L15.536 20 10 16.375 4.464 20l1.092-7.195L.664 7.879 7.44 7.095 10 .67zM10 15.625V3.125L6.472 7.095l-4.528.785L5.828 10l-3.884 3.07 4.528.785L10 15.625z"
                    />
                  </svg>
                ))}
              </div>
            </div>
          </SwiperSlide>
          
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewSection;
