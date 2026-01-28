import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaDribbble,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#06070D] overflow-hidden pt-24 pb-12">
      
      {/* Subtle Grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Glow Horizon */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[200px] blur-3xl opacity-30"
        style={{
          background:
            "linear-gradient(90deg, #4DEEEA, #8A4FFF, #FF4D6D)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-extrabold tracking-wide text-[#E6E8FF]">
            ARCBYTE<span className="text-[#8A4FFF]">.</span>
          </h3>
          <p className="mt-4 text-[#9AA0C7] max-w-sm">
            Crafting digital experiences that feel alive — blending technology,
            design, motion, and strategy into immersive products.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-sm tracking-widest text-[#4DEEEA] mb-4">
            NAVIGATION
          </h4>
          <ul className="space-y-3 text-[#9AA0C7]">
            {["Home", "Services", "Work", "Process", "Contact"].map(
              (item) => (
                <li
                  key={item}
                  className="hover:text-[#E6E8FF] transition cursor-pointer"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-sm tracking-widest text-[#FF4D6D] mb-4">
            CONNECT
          </h4>

          <div className="flex gap-5">
            {[
              { Icon: FaGithub, color: "#4DEEEA" },
              { Icon: FaLinkedinIn, color: "#0A66C2" },
              { Icon: FaInstagram, color: "#FF4D6D" },
              { Icon: FaTwitter, color: "#1DA1F2" },
              { Icon: FaDribbble, color: "#EA4C89" },
            ].map(({ Icon, color }, i) => (
              <div
                key={i}
                className="w-12 h-12 rounded-xl flex items-center justify-center cursor-pointer transition-transform hover:scale-110"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  boxShadow: `0 0 20px ${color}55`,
                }}
              >
                <Icon size={20} style={{ color }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mt-16">
        <div className="h-px bg-gradient-to-r from-transparent via-[#8A4FFF]/40 to-transparent" />
      </div>

      {/* Bottom */}
      <div className="relative z-10 mt-8 text-center text-xs text-[#6F75A5] tracking-wider">
        © {new Date().getFullYear()} ARCBYTE STUDIO — ALL SYSTEMS OPERATIONAL
      </div>
    </footer>
  );
};

export default Footer;
