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
    <div className="mbcontainer mx-auto flex flex-col md:flex-row px-4 py-24 items-center justify-center">
      <img
        className="shrink-img w-2/5 mt-3 lg:w-2/6 md:w-2/6 sm:w-2/6 mb-10 md:ml-10 object-cover object-center rounded-full shadow-2xl opacity-95 hover:animate-spin"
        alt="profile"
        src={Profile}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}

        
      />

      <div className="text-center pr-2 lg:w-5/12 w-full">
        <h1 className="my-4 text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold leading-tight">
          Skipper Matthew A. Paloma
        </h1>
        <p className="text-base sm:text-lg md:text-2xl lg:text-2xl mb-8">Front-end Developer</p>
        <DownloadButton />
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

export default MusicPlayOnHover
