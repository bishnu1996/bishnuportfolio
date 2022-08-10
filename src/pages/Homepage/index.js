import React from 'react'
import Header from '../../components/Header';
import Poster from '../../components/Poster';
import Contact from '../../components/Contact';
import FullDetails from '../../components/FullDetails';
import SliderImage from '../../components/SliderImage';
function Homepage() {
  return (
    <div>
        <Header />
        <Poster />
        <Contact />
        <FullDetails />
        <SliderImage />
    </div>
  )
}

export default Homepage;
