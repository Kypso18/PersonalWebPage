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
        className="bg-white/90 text-gray-800 font-bold rounded-full py-4 px-8 items-center animate-pulse hover:underline"
        onClick={handleDownload}
      >
        Get my Resume/CV
      </button>
    </div>
  );
};

export default DownloadButton;
