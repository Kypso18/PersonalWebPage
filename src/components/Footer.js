
import { Footer } from 'flowbite-react';
import {  BsFacebook, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';

export default function FooterWithSocialMediaIcons() {
  return (
    <Footer className='px-9  bg-blue-300/80 rounded-none' container >
      <div className="w-full text-center">
        <div className= "px-9 text-bold w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright className='text-white hover:text-black'
            by="Skipper Paloma"
            href="#"
            year={2023}
          />
          <div className="mt-4 flex space-x-6 justify-center sm:mt-0 sm:justify-center">
          <Footer.Icon 
              href="https://www.facebook.com/skipper.paloma/"
              icon={BsFacebook}
              className="text-black-100 hover:text-gray-200"
            />
            <Footer.Icon
              href="https://www.instagram.com/skippah.m_a.p/"
              icon={BsInstagram}
              className="text-black-100  hover:text-gray-200"
            />
            <Footer.Icon
              href="https://www.linkedin.com/in/skipper-paloma/"
              icon={BsLinkedin}
              className="text-black-100  hover:text-gray-200"
            />
            <Footer.Icon
              href="https://github.com/Kypso18"
              icon={BsGithub}
              className="text-black-100  hover:text-gray-200"
            />
          </div>
        </div>
      </div>
    </Footer>
  )
}


