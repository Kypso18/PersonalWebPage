import React, { useState, useEffect } from 'react';
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiBootstrap, SiJavascript, SiPython } from 'react-icons/si';
import { FaEnvelope, FaPhone, FaViber, FaFacebookMessenger, FaTelegram, FaArrowUp } from 'react-icons/fa';
import Divider from '../components/Divider';
import MusicPlayOnHover from '../components/MusicPlayOnHover';
import SwiperContainer from '../components/Swiper';

function Home() {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 />, level: 'Novice' },
    { name: 'CSS', icon: <FaCss3 />, level: 'Novice' },
    { name: 'Bootstrap', icon: <SiBootstrap />, level: 'Novice' },
    { name: 'Javascript', icon: <SiJavascript />, level: 'Novice' },
    { name: 'React.js', icon: <FaReact />, level: 'Novice' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 'Novice' },
    { name: 'SQL', icon: <FaDatabase />, level: 'Novice' },
    { name: 'Python', icon: <SiPython />, level: 'Beginner' },
    { name: 'Node.js', icon: <FaNodeJs />, level: 'Novice' }
  ];

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowScrollTop(scrollTop > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      className="w-auto h-full text-white"
      style={{
        background:
          'linear-gradient(90deg, rgba(131, 126, 226, 0.55) 24%, rgba(114, 114, 226, 0.55) 58%, rgba(0, 212, 255, 0.55) 100%)'
      }}
    >
      <br></br>
          
      <MusicPlayOnHover />
      <Divider />
      <br />
      <div className="py-12 px-9">
        <h2 className="text-2xl text-center font-bold mb-4">My Top Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-2">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group flex items-center p-4 bg-grey-300/60 rounded shadow hover:bg-white"
            >
              <div className="text-2xl text-white group-hover:text-black mr-4 pl-2">{skill.icon}</div>
              <div>
                <h3 className="font-medium text-white group-hover:text-black">{skill.name}</h3>
                <p className="text-gray-400">{skill.level}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      <br />
      <Divider />
      <br />
      <SwiperContainer />
      
      <Divider />
      <div className="container mx-auto py-10 px-9">
        <h2 className="text-2xl font-bold mb-2 mt-2 text-center">Contact Details</h2>
        <div className="flex flex-wrap justify-center items-center space-x-4">
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-white" />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:skipperpaloma@gmail.com"
              className="text-white hover:underline"
            >
              skipperpaloma@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhone className="text-white" />
            <a href="tel:+639055544025" className="text-white hover:underline">
              09055544025
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <FaFacebookMessenger className="text-white" />
            <a
              href="https://m.me/skipper.paloma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              Messenger: Skipper Paloma
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <FaViber className="text-white" />
            <p className="text-white hover:underline">Viber#: 09055544025</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaTelegram className="text-white" />
            <a
              href="https://t.me/skippspaloma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              Telegram
            </a>
          </div>
        </div>
      </div>
      <br />
      {showScrollTop && (
        <div
          className="animate-bounce hover:bg-blue-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 fixed bottom-8 right-8 bg-white/50 text-gray-900 p-2 rounded-full cursor-pointer shadow"
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </div>
      )}
     <br>
     </br>
     <br>
     </br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     
     
          
          
     
     
 
      
    </section>
  );
}

export default Home;
