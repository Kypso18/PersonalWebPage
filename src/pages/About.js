import React, { useState, useEffect } from 'react';
import { Timeline } from 'flowbite-react';
import { TbSchool } from "react-icons/tb";
import Divider from '../components/Divider';
import CertificateSwiper from '../components/CertificateSwiper';
import { FaArrowUp } from 'react-icons/fa';
import AboutPic from '../assets/AboutPic.jpg'

const About = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
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
    <section className="w-auto h-full text-white" style={{
      background: "linear-gradient(90deg, rgba(131, 126, 226, 0.55) 24%, rgba(114, 114, 226, 0.55) 58%, rgba(0, 212, 255, 0.55) 100%)"
    }}>
      <br></br>
        <br></br>
        <br></br>
      <div className='flex flex-col lg:flex-row'>
        
      <div className='lg:w-3/5 px-10 bg-gray-300/60 shadow-lg ml-4 mr-4 mt-2 drop-shadow-2xl'>
      <img
  className="mt-3 lg:w-2/6 md:w-4/6 w-4/6 mx-auto mb-2 pt-1 object-cover object-center rounded-full shadow-2xl opacity-95"
  alt="aboutpic"
  src={AboutPic}
/>

      <h2 className="text-2xl text-center lg:text-left font-bold mb-1">&nbsp; About Me</h2>
      <p className="text-base text-center lg:text-left font-bold mb-1 text-gray-800 px-3">
      &nbsp; &nbsp; Allow me to introduce myself. I am a passionate individual with a knack for problem-solving and effective communication. With a diverse range of experiences and a thirst for knowledge, I strive to make a positive impact in both my professional and personal life.
      </p>
      <p className="text-base text-center lg:text-left font-bold mb-1 text-gray-800 px-3">
      &nbsp; &nbsp; In my previous roles, I gained valuable skills and certifications that have shaped my professional journey. As a Marketing Intern at Figaro Coffee Company, I excelled in managing inventory, organizing marketing materials, and ensuring customer satisfaction through empathetic support. Additionally, as a Customer Service Representative at Harte Hanks, I honed my abilities to address billing concerns and provide technical assistance, all while maintaining a focus on fraud prevention and account security.
            </p>
            
      <div className="text-center pb-1">
        <button
          className="text-black/60 font-bold py-1 px-4 rounded hover:underline"
          onClick={toggleModal}
        >
          Read More
        </button>
      </div>
      {showModal && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-90">
          <div className="bg-grey-300/60 p-6 mx-1 md:mx-0 rounded shadow-lg max-h-screen overflow-y-auto">
          <p className="text-base text-center lg:text-left font-bold mb-1 text-gray-800 px-3">
            &nbsp; &nbsp;Beyond my professional endeavors, I have actively contributed to my community as a volunteer and leader. Serving as the Vice President for Development at Core PH and Project Manager at IET Society at RTU, I developed and executed strategies for leadership events, fostering an environment of learning and enjoyment. My ability to analyze situations, empathize with others, and multitask efficiently has greatly aided me in these roles.
            </p>
          <p className="text-base font-bold mb-4 px-4">
          &nbsp; &nbsp;My commitment to personal growth is reflected in my educational accomplishments. I hold a Diploma in Industrial Engineering Technology from Rizal Technological University, where I gained a strong foundation in problem-solving and critical thinking. Furthermore, I have obtained certifications such as Lean Six Sigma Yellow Belt, Google Certificates in Project Management and Data Analytics, and TESDA NCII in Consumer Electronics.
            </p>
            <p className="text-base font-bold mb-4 px-4">
            &nbsp; &nbsp;In addition to my certifications, I possess a wide range of technical skills, including proficiency in HTML, CSS, JavaScript, SQL, and various Microsoft Office programs. I am adept at utilizing Google Workspace, conducting research, managing events, and utilizing Canva for creative projects. With my exceptional communication skills, both written and verbal, I excel at building connections and facilitating productive conversations.
            </p>
            
            <p className="text-base font-bold mb-4 px-4">
            &nbsp; &nbsp;In summary, I am a friendly and intelligent individual with a passion for continuous learning and making a difference. I bring a combination of technical expertise, interpersonal skills, and leadership abilities to every endeavor I undertake. I firmly believe that productive conversations start with listening, and I am excited to contribute my unique skill set to future opportunities.
            </p>
            <button
              className="text-white bg-gray-300/40 py-1 px-4 mx-auto rounded mt-4 hover:underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              onClick={toggleModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
     
      <div className='lg:w-1/5'>
        <div>
      
          
          <h2 className="text-2xl text-center justify lg:text-left font-bold mb-2 ml-2 mt-3">Academic Background</h2>
        </div>
        <div className='px-20 items-center place-content-center'>
          <br></br>
          <Timeline vertical>
            <Timeline.Item>
              <Timeline.Point icon={TbSchool} />
              <br></br>
              <Timeline.Content>
                <Timeline.Title>
                  Flowbite Library v1.0.0
                </Timeline.Title>
                <Timeline.Time>
                  Released on December 2, 2021
                </Timeline.Time>
                <Timeline.Body>
                  Get started with dozens of web components and interactive elements.
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Point icon={TbSchool} />
              <br></br>
              <Timeline.Content>
                <Timeline.Title>
                  Flowbite Library v1.0.0
                </Timeline.Title>
                <Timeline.Time>
                  Released on December 2, 2021
                </Timeline.Time>
                <Timeline.Body>
                  Get started with dozens of web components and interactive elements.
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Point icon={TbSchool} />
              <br></br>
              <Timeline.Content>
                <Timeline.Title>
                  Flowbite Library v1.3.0
                </Timeline.Title>
                <Timeline.Time>
                  Released on January 5, 2022
                </Timeline.Time>
                <Timeline.Body>
                  Get started with dozens of web components and interactive elements.
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
          </Timeline>
        </div>
      </div>
    </div>
    <Divider  />
    <br></br>
    
    <div>
      <h2 className="text-2xl text-center font-bold">My Certificates</h2>
      <CertificateSwiper />
      </div>
      <br></br>
      <br></br>
    
      
    <br></br>{showScrollTop && (
        <div
          className="animate-bounce hover:bg-blue-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 fixed bottom-8 right-8 bg-white/50 text-gray-900 p-2 rounded-full cursor-pointer shadow"
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </div>
      )}
    


    </section>
  )
}

export default About