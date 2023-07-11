import React, { useRef } from 'react';
import Profile from '../assets/profile.png'
import Music from '../assets/Cupid.mp3';
import DownloadButton from '../components/DownloadButton';
import '../components/MusicPlayOnHover.css';

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
    <div className="mbcontainer mx-auto flex flex-col px-4 py-10 items-center justify-center">
      <img
        className="w-4/6 xl:w-1/4 mt-16 md:mt-12 lg:mt-6 xl:mt-6 lg:w-1/4  md:w-2/6 sm:w-3/6 mb-4 object-cover object-center rounded-full shadow-2xl opacity-95 hover:animate-spin"
        alt="profile"
        src={Profile}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}

        
      />
      
      <div className="text-center py-2 lg:w-6/12 w-full">
      <p className="items-center text-center 
         text-white/60 text-xl font-bold ">
  Hover over me </p>
        <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-bold leading-tight">
          Skipper Matthew A. Paloma
        </h1>
        <p className="text-base sm:text-lg md:text-2xl lg:text-2xl mb-4">Front-end Developer</p>
        <DownloadButton />
        

      </div>
      <audio ref={audioRef}>
        <source src={Music} type="audio/mp3" />
      </audio>
    </div>
  );
};

export default MusicPlayOnHover
