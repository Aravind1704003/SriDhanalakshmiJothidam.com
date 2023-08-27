import React, { useState, useEffect } from 'react';

const colors = [
  "text-red-500",
  "text-orange-500",
  "text-amber-500",
  "text-yellow-500",
  "text-lime-500",
  "text-green-500",
  "text-emerald-500",
  "text-teal-500",
  "text-cyan-500",
  "text-sky-500",
  "text-blue-500",
  "text-indigo-500",
  "text-violet-500",
  "text-purple-500",
  "text-fuchsia-500",
  "text-pink-500",
  "text-rose-500",
];


const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

const Body = () => {
  const [colorClass, setColorClass] = useState(getRandomColor());

  useEffect(() => {
    const interval = setInterval(() => {
      setColorClass(getRandomColor());
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: 'url("images/astro-2.jpg")' }}>
      <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-center">
        <h2 className="text-white text-3xl font-semibold mb-4">
          Welcome to{' '}
          <span className={`transition-colors duration-100 ${colorClass}`}>
            Sri </span><span className={`transition-colors duration-100 ${colorClass}`}>
            Dhanalakshmi </span><span className={`transition-colors duration-100 ${colorClass}`}>
            Jothidam</span>
          
        </h2>
        <p className="text-white text-lg">Explore the world of Astrology, Numerology, Vaasthu, and more.</p>
      </div>
    </div>
  );
};

export default Body;





