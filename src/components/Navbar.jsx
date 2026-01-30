import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Pricing", path: "/pricing" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[rgba(10,11,16,0.6)] backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-xl font-bold tracking-widest text-[#4DEEEA]">
          ARC<span className="text-[#8A4FFF]">BYTE</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 text-sm text-[#9AA0C7]">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className="hover:text-[#4DEEEA] transition"
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <button className="hidden md:block px-5 py-2 rounded-lg border border-[#8A4FFF] text-sm text-white 
          hover:bg-[#8A4FFF]/20 hover:shadow-[0_0_25px_rgba(138,79,255,0.4)] transition">
          Start a Project →
        </button>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-[5px]"
        >
          <span
            className={`w-6 h-[2px] bg-white transition ${
              open ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-white transition ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-white transition ${
              open ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[rgba(10,11,16,0.95)] backdrop-blur border-t border-white/10">
          <nav className="flex flex-col px-6 py-8 gap-6 text-[#9AA0C7]">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className="text-lg hover:text-[#4DEEEA] transition"
              >
                {link.name}
              </NavLink>
            ))}

            {/* Mobile CTA */}
            <button className="mt-6 px-5 py-3 rounded-lg border border-[#8A4FFF] text-white 
              hover:bg-[#8A4FFF]/20 hover:shadow-[0_0_25px_rgba(138,79,255,0.4)] transition">
              Start a Project →
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
