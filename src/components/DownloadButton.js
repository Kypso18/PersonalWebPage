import React from 'react';
import { saveAs } from 'file-saver';
import resumePDF from '../assets/Skipper_PalomaResume2023.pdf';
import { motion } from 'framer-motion';


const DownloadButton = () => {
  const handleDownload = () => {
    // Fetch the PDF file and save it
    saveAs(resumePDF, 'Skipper_PalomaResume2023.pdf');
  };

  return (
    <div className="flex justify-center mx-auto">
      <button
        className="bg-white text-gray-800 font-bold rounded-full py-4 px-8 items-center  hover:underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        
        onClick={handleDownload}
      >
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} />
        Get my Resume/CV
      </button>
    </div>
  );
};

export default DownloadButton;
