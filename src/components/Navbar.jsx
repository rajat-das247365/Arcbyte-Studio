import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
       <header className="fixed top-0 left-0 w-full z-50 bg-[rgba(10,11,16,0.6)] backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-xl font-bold tracking-widest text-[#4DEEEA]">
          ARC<span className="text-[#8A4FFF]">BYTE</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-10 text-sm text-[#9AA0C7]">
         <NavLink to={'/'} className={`hover:text-[#4DEEEA] transition`}>Home</NavLink>
         <NavLink to={'/services'} className={`hover:text-[#4DEEEA] transition`}>Services</NavLink>
         <NavLink to={'/portfolio'}  className={`hover:text-[#4DEEEA] transition`}>Portofolio</NavLink>
         <NavLink to={'/about'} className={`hover:text-[#4DEEEA] transition`}>About</NavLink>
         <NavLink to={'/pricing'} className={`hover:text-[#4DEEEA] transition`}>Pricing</NavLink>
         <NavLink to={'/careers'} className={`hover:text-[#4DEEEA] transition`}>Careers</NavLink>
                  <NavLink to={'/contact'} className={`hover:text-[#4DEEEA] transition`}>Contact Us</NavLink>

        </nav>

        {/* CTA */}
        <button className="px-5 py-2 rounded-lg border border-[#8A4FFF] text-sm text-white 
          hover:bg-[#8A4FFF]/20 hover:shadow-[0_0_25px_rgba(138,79,255,0.4)] transition">
          Start a Project →
        </button>
      </div>
    </header>
  )
}

export default Navbar
