import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaHeart} from 'react-icons/fa';


const ReviewSlider = ({ reviews }) => {
  return (
    <div className="container mx-auto my-4 py-18 px-8">
     <h2 className="text-2xl font-bold mb-3 mt-7 text-center">Reviews</h2>
    <br></br>
    <br></br>
    <Swiper
      slidesPerView={1}
      navigation
      spaceBetween={1}
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
      {reviews.map((review, index) => (
        <SwiperSlide key={index} className="px-10 mb-10 mx-auto flex justify-center">
          <div className="rounded-lg px-auto items-center shadow">
            <img
              src={review.picture}
              alt={`Review by ${review.name}`}
              className="rounded-full w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-center">{review.name}</h3>
            <p className="text-center">{review.opinion}</p>
            <div className="flex items-center justify-center mt-4">
            <h3 className="text-sm pb-3 font-semibold text-center"> <FaHeart className="text-red-500 text-2xl" /><br></br>{review.text}</h3>
            
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};

export default ReviewSlider;
