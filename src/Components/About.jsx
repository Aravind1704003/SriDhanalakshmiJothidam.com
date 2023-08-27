import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold mb-6 text-center">About</h1>
        <div className="bg-white p-8 rounded-lg shadow-md flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:mr-8 mb-4 lg:mb-0">
            <img src="/vaastucover.jpg" alt="Office 1" className="w-full h-auto rounded-lg shadow-md mb-4" />
            <img src="/vaastucover.jpg" alt="Office 2" className="w-full h-auto rounded-lg shadow-md" />
          </div>
          <div className="lg:w-1/2">
            <p className="text-3xl text-gray-700">
              Welcome to Sri Dhanalakshmi Jothidam! I am an experienced astrologer dedicated to providing expert guidance in the fields of astrology, numerology, vaasthu, and more. With <span className='text-red-500'>32 years of experience</span> and a deep understanding of these ancient sciences, I aim to help individuals lead a prosperous and balanced life by offering insightful and accurate predictions and remedies.
            </p>
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md mt-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <img src="/vaastucover.jpg" alt="Image 3" className="w-full h-auto rounded-lg shadow-md" />
            <img src="/vaastucover.jpg" alt="Image 4" className="w-full h-auto rounded-lg shadow-md" />
            <img src="/vaastucover.jpg" alt="Image 5" className="w-full h-auto rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
