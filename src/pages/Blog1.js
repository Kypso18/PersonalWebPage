import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import BlogPic1 from '../assets/blogs/Blog1.png'

const Blog1 = () => {
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

    <div className='flex flex-col items-center py-40'>
    
    
       
    <div className='rounded-md xl:h-fit lg:h-fit w-3/4 px-10 bg-gray-300/60 shadow-lg ml-4 mr-4 mt-2 drop-shadow-2xl'>    
      <header className="mb-8">
        <img
          className="object-center object-cover mx-auto w-4/6 h-auto pt-5"
          src= {BlogPic1}
          alt="Blog Header"
        />
      </header>
      <div className="container mx-auto pb-10">
        <h1 className="text-3xl font-bold mb-4">What's next?</h1>
        <p className="text-lg text-gray-700 mb-6">Published on July 11, 2023</p>
        <div className="prose">
          <p className="text-lg mb-6">
          &nbsp; &nbsp;As I approach the end of my Bootcamp, I find myself wondering what to do next. I have spent months learning, exploring, and growing as a career changer, but now I have to face the reality of the world outside the classroom. What are my options? What are my goals? What are my passions? What do I have?
          </p>
          <p className="text-lg mb-6">
          &nbsp; &nbsp;I know that there is no one right answer to these questions. Everyone has their own path and their own challenges. Some of my peers may already have a clear vision of their future, while others may feel lost and confused. Some may pursue further education, while others may enter the workforce or start their own ventures. 
          </p>
          <p className="text-lg mb-6">
          &nbsp; &nbsp;I do not think there is a wrong choice, as long as it is aligned with one’s values and interests. But how do I find out what those are? How do I discover what makes me happy and fulfilled in this field that is ever evolving?
          </p>
          <p className="text-lg mb-6">
          &nbsp; &nbsp;I think the best way to do that is to try new things, to experiment with pet projects, to learn from others, and to reflect on my experiences. I don’t have to commit to anything right away, but I can explore different possibilities and see what resonates with me. I can also seek feedback and advice from people who know me well or who have gone through similar transitions.
          </p>
          <p className="text-lg mb-6">
          &nbsp; &nbsp;I also think it’s important to remember that nothing is permanent. Whatever I choose to do next, I can always change my mind later if it doesn’t work out or if I find something better. I don’t have to be afraid of making mistakes or taking risks, because they are part of the learning process. I don’t have to have everything figured out right now, because life is unpredictable and full of surprises.
          </p>
          <p className="text-lg mb-6">
          &nbsp; &nbsp;I believe what Professor Ryan Azur said that finishing this Bootcamp is not the end, but the beginning of a new journey. A journey that will be exciting, challenging, rewarding, and meaningful. A journey that will shape me into who I want to be.
          </p>
        </div>
      </div>
    </div>
    </div>
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

export default Blog1;