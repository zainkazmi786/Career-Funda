import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-bold">Career Funda</h2>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <a href="#home" className="hover:text-gray-400 transition-colors duration-300">Home</a>
          <a href="#about" className="hover:text-gray-400 transition-colors duration-300">About</a>
          <a href="#services" className="hover:text-gray-400 transition-colors duration-300">Services</a>
          <a href="#contact" className="hover:text-gray-400 transition-colors duration-300">Contact</a>
          <a href="#privacy" className="hover:text-gray-400 transition-colors duration-300">Privacy Policy</a>
        </div>
      </div>
      <div className="mt-4 text-center text-gray-500">
        &copy; 2024 Company Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
