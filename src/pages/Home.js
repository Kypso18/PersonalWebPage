import React from 'react';
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { FaEnvelope, FaPhone, FaViber, FaFacebookMessenger, FaTelegram } from 'react-icons/fa';
import Divider from '../components/Divider';
import MusicPlayOnHover from '../components/MusicPlayOnHover'
import SwiperContainer from '../components/Swiper';

function Home() {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 />, level: 'Advanced' },
    { name: 'CSS', icon: <FaCss3 />, level: 'Advanced' },
    { name: 'React.js', icon: <FaReact />, level: 'Expert' },
    { name: 'Node.js', icon: <FaNodeJs />, level: 'Intermediate' },
    { name: 'Database', icon: <FaDatabase />, level: 'Intermediate' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 'Advanced' },
  ];
 return (
   <section className="w-auto h-full text-white" style={{
     background: "linear-gradient(90deg, rgba(131, 126, 226, 0.55) 24%, rgba(114, 114, 226, 0.55) 58%, rgba(0, 212, 255, 0.55) 100%)"
   
   }}>
     <MusicPlayOnHover />
     <Divider  />
     <br></br>
     <div className='py-12 px-9'>
        <h2 className="text-2xl text-center font-bold mb-4">My Top Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-2">
          {skills.map((skill, index) => (
            <div key={index} className="group flex items-center p-4 bg-grey-300/60 rounded shadow hover:bg-white">
              <div className="text-2xl text-white group-hover:text-black mr-4 pl-2">{skill.icon}</div>
              <div>
                <h3 className="font-medium text-white group-hover:text-black">{skill.name}</h3>
                <p className="text-gray-400">{skill.level}</p>
              </div>
            </div>
          ))}
        </div>
    
    </div>
    <br></br>
    <br></br>
    <br></br>
    <Divider  />
    <br></br>
    <SwiperContainer />
    <br></br>
    <br></br>
    <br></br>
    <Divider  />
    <br></br>
    <br></br>
    <div className="container mx-auto py-10 px-9">
      <h2 className="text-2xl font-bold mb-4 text-center">Contact Details</h2>
      <div className="flex flex-wrap justify-center items-center space-x-4">
        <div className="flex items-center space-x-2">
          <FaEnvelope className="text-white" />
          <a href="mailto:your-email@gmail.com" className="text-white hover:underline">
            your-email@gmail.com
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <FaPhone className="text-white" />
          <span className="text-white hover:underline">123-456-7890</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaFacebookMessenger className="text-white" />
          <a
            href="https://www.messenger.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline"
          >
            Messenger
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <FaViber className="text-white" />
          <span className="text-white hover:underline">Viber</span>
        
        </div>
        <div className="flex items-center space-x-2">
          <FaTelegram className="text-white" />
          <a
            href="https://telegram.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline"
          >
            Telegram
          </a>
        </div>
      </div>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <Divider  />
    <br></br>
    <br></br>
   </section>
 );
}

export default Home