import React from 'react'

const Hero = () => {
  return (
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0B10]">
      
      {/* Grid + Glow Background */}
      <div className="absolute inset-0 
        bg-[radial-gradient(circle_at_center,rgba(77,238,234,0.15)_0%,transparent_60%)]" />
      <div className="absolute inset-0 
        bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),
        linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]
        bg-[size:80px_80px]" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-5xl lg:text-6xl font-bold tracking-widest leading-tight text-[#E6E8FF]">
            ARC<span className="text-[#4DEEEA]">BYTE</span> <br />
            <span className="text-[#8A4FFF]">STUDIO</span>
          </h1>

          <p className="mt-6 text-xl text-[#E6E8FF]">
            We craft digital experiences that feel alive.
          </p>

          <p className="mt-4 text-[#9AA0C7] max-w-xl">
            Web development, design, motion, 3D, and branding.  
            Built with precision. Powered by creativity.
          </p>

          <div className="mt-8 flex gap-6">
            <button className="px-6 py-3 rounded-lg font-semibold text-[#0A0B10]
              bg-gradient-to-r from-[#4DEEEA] to-[#8A4FFF]
              shadow-[0_0_30px_rgba(77,238,234,0.5)]
              hover:scale-105 transition">
              Start a Project →
            </button>

            <button className="px-6 py-3 rounded-lg border border-white/20 text-white
              hover:border-[#4DEEEA]
              hover:shadow-[0_0_25px_rgba(77,238,234,0.4)]
              transition">
              Let’s Build Something →
            </button>
          </div>
        </div>

        {/* Right Visual Panel */}
        <div className="relative">
          <div className="absolute inset-0 blur-3xl rounded-full bg-[#4DEEEA]/20" />
          <div className="relative bg-[rgba(18,20,32,0.7)] backdrop-blur
            border border-[#4DEEEA]/40 rounded-xl p-6
            shadow-[0_0_30px_rgba(77,238,234,0.35)]">

            <div className="text-xs text-[#4DEEEA] mb-2 tracking-widest">
              SYSTEM INTERFACE
            </div>

            <pre className="text-xs text-[#E6E8FF] leading-relaxed">
{`> initializing experience
> loading modules
> rendering interface
> status: ONLINE`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
