import React, { useState, useEffect } from 'react';
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiBootstrap, SiJavascript, SiPython } from 'react-icons/si';
import { FaEnvelope, FaPhone, FaGithub, FaViber, FaFacebookMessenger, FaTelegram, FaArrowUp } from 'react-icons/fa';
import Divider from '../components/Divider';
import MusicPlayOnHover from '../components/MusicPlayOnHover';
import SwiperContainer from '../components/Swiper';
import ReviewSlider from '../components/ReviewSlider';
import ContactForm from '../components/ContactForm';
import Drei from '../assets/reviews/drei.jpg';
import Adas from '../assets/reviews/Adas.jpg';

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
    { name: 'Node.js', icon: <FaNodeJs />, level: 'Novice' },
    { name: 'Github', icon: <FaGithub />, level: 'Novice' }
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

  const reviews = [
    {
      picture: Drei,
      name: 'Meldred Loreto',
      opinion: 'Skipper is a very cooperative and collaborative teammate. He is confident of his suggestions and ideas but is always open for corrections if necessary. He is someone I would like to work with again in the future.',
      text: '5/5' ,
    },
    {
      picture: Adas,
      name: 'Mahdi Adas S. Adad',
      opinion: 'He is good friend we learned a lot from each other, I wish for him all best',
      text: '5/5' ,
    },
    {
      picture: 'path/to/pic1.jpg',
      name: 'John Doe',
      opinion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      text: '4/5' ,
    },
    {
      picture: 'path/to/pic1.jpg',
      name: 'John Doe',
      opinion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      text: '4/5' ,
    },
    {
      picture: 'path/to/pic1.jpg',
      name: 'John Doe',
      opinion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      text: '4/5' ,
    },
    {
      picture: 'path/to/pic1.jpg',
      name: 'John Doe',
      opinion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      text: '4/5' ,
    },
    
    // Add more reviews as needed
  ];

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
 
    
      <div className="py-10 px-6 topskills">
  <h2 className="text-2xl text-center font-bold mb-4">My Top Skills</h2>
  <div className="grid px-16 grid-cols sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 gap-2">
    {skills.map((skill, index) => (
      <div
        key={index}
        className="group flex items-center px-8 py-4 bg-grey-300/60 rounded shadow hover:bg-white w-full"
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

     

     
      <Divider />
     
      <SwiperContainer />
      <Divider />
      
     
      
      <ReviewSlider reviews={reviews} />
      <Divider />
      <div className="contact container mx-auto py-2 px-8 my-auto">
        <h2 className="text-2xl font-bold mb-3 mt-7 text-center">Contact Details</h2>
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
          <h3 className="text-lg font-semibold text-center">
          <FaPhone className="text-white" />
          </h3>
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
        <br></br>
        <br></br>
      </div>
      <Divider />
      <br></br>
      <br></br>
      <ContactForm />
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
