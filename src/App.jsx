import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import PlatformsSection from "./components/PlatformsSection";
import PricingSection from "./components/PricingSection";
import Careers from "./components/Careers";
import ContactForm from "./components/ContactForm";

const App = () => {
  return (
    <div className="bg-[#0A0B10] text-white min-h-screen">
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<PlatformsSection />} />
        <Route path="/pricing" element={<PricingSection />} />
        <Route path="/careers" element={<Careers/>} />
        <Route path="/contact" element={<ContactForm/>} />
      </Routes>

      <Footer/>
    </div>
  );
};

export default App;

