import React from 'react';
import logo from '../assets/CAREER FUNDA.png'

const AboutUsPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-full flex justify-center ">
            <img src={logo} alt="Company" className="w-1/2 rounded-lg " />
            
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-lg mb-4">
              We are a passionate team dedicated to providing the best services to our customers.
            </p>
            <p className="text-lg mb-4">
              Our mission is to innovate and deliver cutting-edge solutions that exceed expectations and empower our clients to succeed.
            </p>
            <p className="text-lg mb-4">
              With years of experience in the industry, we have built a reputation for excellence, integrity, and customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
