import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Courses from '../components/Courses';
import Awards from '../components/Awards';
import Volunteering from '../components/Volunteering';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Courses />
      <Awards />
      <Volunteering />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;