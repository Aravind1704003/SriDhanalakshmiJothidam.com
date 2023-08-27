import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold mb-6 text-center">Contact Us</h1>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Visit Us</h2>
              <div className="flex items-center mb-2">
                <FaMapMarkerAlt className="mr-2 text-3xl text-red-600" />
                <p className="text-gray-700">No 33,Kamarajar Nagar 1st Street (Opp To BlueCinemas),
                  Virupatchipuram,
                  Vellore-632002.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Contact Info</h2>
              <div className="flex items-center mb-2">
                <FaPhone className="mr-2 text-green-500" />
                <p className="text-gray-700">9655934235</p>
                <p className="mr-2 text-gray-600">
                  <FaWhatsapp className="inline-block ml-2 text-xl text-green-400" /> 9443434235
                </p>
              </div>
              <div className="flex items-center mb-2">
                <FaEnvelope className="mr-2 text-blue-600" />
                <p className="text-gray-700">sridhanalakshmijothidam@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            {/* <iframe
              title="Google Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.178456564667!2d79.14979851474496!3d12.933213590879593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52ecb4c0b9fb5f%3A0xe91566229b6cbe67!2sBlue%20Cinemas!5e0!3m2!1sen!2sin!4v1630417190903!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.2525830751265!2d79.1360869!3d12.891473399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad3919a4920547%3A0x9b93aa6b1549acf0!2sDhanalaksmi%20Jothidam!5e0!3m2!1sen!2sin!4v1693131268605!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
