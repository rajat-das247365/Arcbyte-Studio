import React from 'react'
import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import BossFightCTA from "../components/BossFightCTA";
import PricingSection from '../components/PricingSection';
import Careers from '../components/Careers';
import PlatformsSection from '../components/PlatformsSection';
import ContactForm from '../components/ContactForm';

const Home = () => {
  return (
       <>
      <Hero />
      <Services />
      <Portfolio />
      <PlatformsSection/>
      <PricingSection/>
      <Careers/>
      <BossFightCTA/>
      <ContactForm/>
    </>
  )
}

export default Home
