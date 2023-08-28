import React, { useState } from 'react';
import './ServicePage.css'; 

const ServicePage = () => {
  // const gradientColors = 'from-yellow-300 via-pink-400 to-purple-500';
  return (
    // <div className={`bg-gradient-to-b ${gradientColors} bg-gray-100 py-10 min-h-screen`}>
    <div className="bg-cover bg-center bg-gray-100 py-10 min-h-screen" style={{ backgroundImage: 'url("images/background1.jpg")' }}>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-yellow-300 mb-6 text-center">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard title="Astrology" description="Explore the world of Astrology with me. I will use the positions of planets and stars to reveal insights about your personality, relationships, career, and more. Whether you're curious about your future or want guidance in life, our Astrology service offers a unique way to understand the influences of the cosmos on your journey." style={{ '--border-color': '#3490dc', '--shadow-color': '#3490dc' }} 
          image="images/astocover.jpg"
           />
          <ServiceCard title="Numerology" description="Step into the world of Numerology with me. I will decode the power of numbers in your life. Discover the significance of your birth date, name, and more. Numerology unveils insights into your traits, strengths, and life paths. Let me guide you through the magic of numbers for a deeper understanding of yourself." style={{ '--border-color': '#3490dc', '--shadow-color': '#3490dc' }} 
          image="images/numerologycover2.jpg"
          />
          <ServiceCard title="Vaasthu" description="Explore Vaasthu with me to create harmonious spaces. Vaasthu, the ancient Indian architectural science, can enhance the energy flow in your home or workplace. Learn how to arrange elements for positive vibes and a balanced environment. Let's bring more positivity to your surroundings together." style={{ '--border-color': '#3490dc', '--shadow-color': '#3490dc' }} 
          image="images/vaastucover.jpg"
          />
          <ServiceCard title="Subhavisasham" description="Marriage, House Warming Ceremony, Engagement, Ganapati Homam, Navakra Homam will be conducted in the best manner." style={{ '--border-color': '#3490dc', '--shadow-color': '#3490dc' }} 
          image="images/kalasha.jpeg"
          />
          <ServiceCard title="Marriage Date Fixing" description="Need help with fixing the perfect marriage date? Our expert guidance can help you choose an auspicious date for your special day. Let the stars align and the planets favor your union. Discover the best timing for a joyful and harmonious wedding celebration with our Marriage Date Fixing service." style={{ '--border-color': '#3490dc', '--shadow-color': '#3490dc' }} 
          image="images/marraigedatecover.jpg"/>
        </div>
      </div>
    </div>
  );
};
const ServiceCard = ({ title, description, style, image }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`service-card bg-cover bg-center h-96 relative group ${expanded ? 'expanded' : ''}`}
      style={{ backgroundImage: `url(${image})` }}
      onClick={toggleExpanded}
    >
      <div className="overlay p-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
      </div>
      {expanded && (
        <div className="overlay p-4 mb-0 bg-white"> {/* Change mt-auto to mb-0 */}
          <p className="text-white">{description}</p>
        </div>
      )}
    </div>
  );
};




export default ServicePage;
