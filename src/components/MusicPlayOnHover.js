import React, { useRef } from 'react';
import Profile from '../assets/profile.png'
import Music from '../assets/Cupid.mp3';

const MusicPlayOnHover = () => {
  const audioRef = useRef(null);

  const handleMouseEnter = () => {
    audioRef.current.play();
  };

  const handleMouseLeave = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  return (
    <div className="mbcontainer mx-auto flex flex-col md:flex-row px-5 py-24 items-center justify-center">
      <img
        className="lg:w-2/6 md:w-4/6 w-5/6 mb-10 object-cover object-center rounded-full shadow-2xl opacity-95 hover:animate-spin"
        alt="profile"
        src={Profile}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}

        
      />

      <div className="text-center pr-2 lg:w-5/12 w-full">
        <h1 className="my-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Skipper Matthew A. Paloma
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8">Front-end Developer</p>
        <div className="flex justify-center mx-auto">
          <button className="bg-white/90 text-gray-800 font-bold rounded-full py-4 px-8 items-center animate-pulse">
            <a className="hover:underline" href="../assetsSkipper_PalomaResume2023.pdf" download="Skipper_PalomaResume2023.pdf">
              Get my Resume/CV
            </a>
          </button>
        </div>
        <p className="mt-6 items-center text-center l
         text-white/60 text-xl font-bold ">
  Hover Over Me
</p>
      </div>
      <audio ref={audioRef}>
        <source src={Music} type="audio/mp3" />
      </audio>
    </div>
  );
};

export default MusicPlayOnHover;
