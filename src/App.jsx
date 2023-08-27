import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Outlet } from 'react-router-dom';
// import ServicePage from './Components/ServicePage';
// import Body from './Components/Body';
// import About from './Components/About';
// import Contact from './Components/Contact';

const App = () => {
  return (
    <div>
    <Header />
    <Outlet />
    <Footer />
    </div>
    // <Router>
    //   <Header />
    //   <Routes>
    //     <Route path="/" element={<Body />} />
    //     <Route path="/services" element={<ServicePage />} />
    //      <Route path="/about" element={<About />} />
    //      <Route path="/contact" element={<Contact />} />
    //   </Routes>
    //   <Footer />
    // </Router>
  );
};

export default App;
