import React from 'react';
import Homepage from '@/components/Homepage';
import Aboutsection from '@/components/About';
import Timeline from '@/components/Timeline';
import Register from '@/components/Register';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div>
      <Homepage/>
      <Aboutsection/>
      <Timeline/>
      <Register/>
      <Footer/>
    </div>
  )
}

export default Home
