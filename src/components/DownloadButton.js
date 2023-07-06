import React from 'react';
import { saveAs } from 'file-saver';
import resumePDF from '../assets/Skipper_PalomaResume2023.pdf';

const DownloadButton = () => {
  const handleDownload = () => {
    // Fetch the PDF file and save it
    saveAs(resumePDF, 'Skipper_PalomaResume2023.pdf');
  };

  return (
    <div className="flex justify-center mx-auto">
      <button
        className="bg-white text-gray-800 font-bold rounded-full py-4 px-8 items-center animate-pulse hover:underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        onClick={handleDownload}
      >
        Get my Resume/CV
      </button>
    </div>
  );
};

export default DownloadButton;
