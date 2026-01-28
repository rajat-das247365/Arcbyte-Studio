import React from "react";

const BossFightCTA = () => {
  return (
    <section className="relative py-40 overflow-hidden bg-[#07080F]">
      
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Energy Core */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        aria-hidden
      >
        <div className="w-[500px] h-[500px] rounded-full blur-3xl opacity-30"
          style={{
            background:
              "radial-gradient(circle, #4DEEEA, #8A4FFF, transparent 70%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        
        <p className="text-sm tracking-widest mb-6 text-[#4DEEEA]">
          FINAL ENCOUNTER
        </p>

        <h2 className="text-4xl lg:text-6xl font-extrabold text-[#E6E8FF] leading-tight">
          Ready to Build Something{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4DEEEA] to-[#8A4FFF]">
            Legendary
          </span>
          ?
        </h2>

        <p className="mt-8 text-[#9AA0C7] max-w-2xl mx-auto text-lg">
          You’ve seen the skills. You’ve seen the craft.  
          Now it’s time to level up your brand, product, or idea.
        </p>

        {/* CTA Buttons */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6">
          
          <button
            className="px-8 py-4 rounded-xl font-bold text-[#0A0B10] transition-transform hover:scale-105"
            style={{
              background:
                "linear-gradient(90deg, #4DEEEA, #8A4FFF)",
              boxShadow: "0 0 40px rgba(138,79,255,0.6)",
            }}
          >
            Start the Project
          </button>

          <button
            className="px-8 py-4 rounded-xl font-semibold text-[#E6E8FF] border border-[#8A4FFF]/40 hover:bg-[#8A4FFF]/10 transition"
          >
            Talk to the Team
          </button>
        </div>

        {/* Flavor text */}
        <p className="mt-10 text-xs text-[#6F75A5] tracking-wider uppercase">
          No checkpoints. No half-measures. Only results.
        </p>
      </div>
    </section>
  );
};

export default BossFightCTA;
