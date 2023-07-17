import React, { useState, useEffect } from 'react';
import Divider from '../components/Divider';
import { FaArrowUp, FaSchool  } from 'react-icons/fa';
import { MdDateRange } from 'react-icons/md';
import AboutPic from '../assets/AboutPic.jpg';
import { BsChevronDoubleDown } from 'react-icons/bs';
import '../pages/About.css';
import Blogs from '../components/Blogs';
import MoreAbout from '../assets/Picv1 (3).jpg';




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

  const timelineData = [
    { id: 1, school: 'Pembo Elementary school', title: 'Elementary School', year: '2006 - 2011' },
    { id: 2, school: 'Benigno "Ninoy" S. Aquino High School ', title: 'High School', year: '2012 - 2015' },
    { id: 3, school: 'Rizal Technological University', title: 'College-BS in Industrial Engineering', year: '2015 - Present' }
  ];


  

  return (
    <section className="w-auto h-full text-white" style={{
      background: "linear-gradient(90deg, rgba(131, 126, 226, 0.55) 24%, rgba(114, 114, 226, 0.55) 58%, rgba(0, 212, 255, 0.55) 100%)"
    }}>
      <br />
      <br />
      <br />
      <div className='flex flex-col items-center'>
        <div className='rounded-md xl:h-fit lg:h-fit w-3/4 px-10 bg-gray-300/60 shadow-lg ml-4 mr-4 mt-2 drop-shadow-2xl'>
          <img
            className="mt-6 sm:w-2/4 lg:w-2/6 xl:w-2/6 md:w-2/6 w-3/6 mx-auto mb-2 pt-1 object-cover object-center rounded-full shadow-2xl opacity-95"
            alt="aboutpic"
            src={AboutPic}
          />
          <h2 className="text-2xl text-center lg:text-center font-bold mb-1">&nbsp; About me</h2>
          <p className="text-base text-center lg:text-left font-bold mb-1 text-gray-800 px-3">
            &nbsp; &nbsp; Allow me to introduce myself. I am a passionate individual with a knack for problem-solving and effective communication. With a diverse range of experiences and a thirst for knowledge, I strive to make a positive impact in both my professional and personal life.
          </p>
          <p className="text-base text-center lg:text-left font-bold mb-1 text-gray-800 px-3">
            &nbsp; &nbsp; In my previous roles, I gained valuable skills and certifications that have shaped my professional journey. As a Marketing Intern at Figaro Coffee Company, I excelled in managing inventory of marketing materials and helping produce social media contents. Additionally, as a Customer Service Representative at Harte Hanks, I honed my abilities to address billing concerns and provide technical assistance, all while maintaining a focus on fraud prevention and account security.
          </p>
          <p className="text-base text-center lg:text-left font-bold mb-1 text-gray-800 px-3">
            &nbsp; &nbsp; Beyond my professional endeavors, I have actively contributed to my community as a volunteer and leader. Serving as the Vice President for Development at Core PH (NGO) and Project Manager at IET Society at RTU, I developed and executed strategies for leadership events, fostering an environment of learning and enjoyment. My ability to analyze situations, empathize with others, and multitask efficiently has greatly aided me in these roles.
          </p>
          <div className="text-center pb-1" onClick={toggleModal}>
            <button className="text-black/60 font-bold py-1 px-4 mt-1 rounded underline">
              Read More
              <div className='text-center pt-1 px-10'>
                <BsChevronDoubleDown className='animate-bounce' />
              </div>
            </button>
            
          </div>
          {showModal && (
            <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-90 rounded">
              <div className="bg-grey-300/60 p-6 mx-1 md:mx-0 rounded shadow-lg max-h-screen overflow-y-auto">
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
                  className="text-white bg-gray-300/30 py-1 px-4 mx-auto rounded mt-4 hover:underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                  onClick={toggleModal}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
        </div>
        <Divider />
        <div className='flex flex-col items-center'>
        <div className='rounded-md xl:h-fit lg:h-fit w-3/4 px-10 bg-gray-300/60 shadow-lg ml-4 mr-4 mt-2 drop-shadow-2xl'>
      
  <h2 className="text-2xl text-center lg:text-center font-bold mt-4">Academic Background</h2>
  <div className="container mx-auto px-4 py-8">
    <div className="flex justify-center mx-10 px-auto">
      <div className="timeline flex flex-row mx-auto px-auto">
        {timelineData.map((item) => (
          <div className="timeline-item items-center text-center flex-1" key={item.id}>
            <div className="timeline-icon flex items-center justify-center">
              <FaSchool className="text-3xl" />
            </div>
            <div className="timeline-content">
              <h2 className="text-sm sm:text-md md:text-lg lg:text-lg font-bold mb-1 text-black/60">{item.school}</h2>
              <h3 className="text-md md:text-md lg:text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm md:text-base lg:text-lg text-black mb-2">
                <MdDateRange className="inline-block mr-2" />
                {item.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
</div>

      <Divider />
      <div className='flex flex-col items-center'>
        <div className='pb-20 rounded-md xl:h-fit lg:h-fit w-3/4 px-10 bg-gray-300/60 shadow-lg ml-4 mr-4 mt-2 drop-shadow-2xl'>
        <br></br>
          <h2 className="text-2xl text-center lg:text-center font-bold mb-4 mt-4">Hobbies, other skills and more about me...</h2>
        
        
          <p className="text-base text-center lg:text-left font-bold mb-1 text-gray-800 ">
            &nbsp; &nbsp;Welcome to my space. I like to share a little bit of myself here; I love engaging in a variety of activities that keep life fun and fulfilling. Whether I'm diving into exciting online games, getting lost in captivating books, staying fit at the gym, or capturing beautiful moments through photography and remembering them in the future as pieces of myself that made me who I am and be able to share my experience through it to the next generation. </p>

            <p className="text-base text-center lg:text-left font-bold mb-1 text-gray-800 ">
            &nbsp; &nbsp;Aside from my website development skills, there's more! <span className='text-white bold underline'>I'm also well-versed in using Canva, Microsoft office programs, and Google workspace. I have a knack for event management, research, and data collection too. And let's not forget about my excellent communication skills, both in verbal and written forms.</span></p>

            <p className="text-base text-center lg:text-left font-bold mb-1 text-gray-800 ">
            &nbsp; &nbsp;As a volunteer and student leader, I've had the privilege of meeting incredible people from diverse backgrounds. It's an absolute joy to interact with individuals who bring unique perspectives and experiences to the table.</p>

            <p className="text-base text-center lg:text-left font-bold mb-1 text-gray-800 ">
            &nbsp; &nbsp;I'm happy I'm able to share some pictures  that capture the parts of my adventures that I've had. Take a peek and join me on this walk through my lense as I journey life and stuff!
          </p>
          <img
              src= {MoreAbout}
              alt= 'aboutPics'
              className="w-fit h-auto mx-auto pt-5"
            />
          
        </div>
        </div>
      
        <br></br>
        <br></br>
        <Divider />
        <Blogs />
         <br></br>
         <br></br>
      {showScrollTop && (
        <div
          className="animate-bounce hover:bg-blue-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 fixed bottom-8 right-8 bg-white/50 text-gray-900 p-2 rounded-full cursor-pointer shadow"
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </div>
      )}
    </section>
  );
};

export default About;
