import React from 'react'

  const roles = [
    { title: 'AI Specialist', salary: '₹15.5L – ₹27.5L' },
    { title: 'AI Ads Specialist', salary: '₹7.3L – ₹12.5L' },
    { title: 'Digital Marketing Strategist', salary: '₹6.25L – ₹12L' },
    { title: 'Web Developer', salary: '₹13.2L – ₹23.3L' },
    { title: 'Video Editor / Graphic Designer', salary: '₹10.6L – ₹18.2L' },
  ];
const Careers = () => {
  return (
  <section className="bg-[#0A0B10] text-[#E6E8FF] py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">

        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl uppercase tracking-widest font-['Orbitron']">
            Your skills,<br />Build impact
          </h2>

          <p className="max-w-md text-[#9AA0C7] leading-[1.7] font-['Inter']">
            We are hiring passionate innovators! If you have skills, creativity,
            and drive, no degree required. Join our team to build, design,
            and grow impactful digital solutions together.
          </p>
        </div>

        {/* RIGHT LIST */}
        <div className="relative rounded-xl overflow-hidden bg-[rgba(18,20,32,0.7)] backdrop-blur-xl border border-white/5">

          {roles.map((role, index) => (
            <div
              key={index}
              className="group relative flex items-center justify-between px-6 py-6
                         border-b border-white/5 last:border-b-0
                         transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                         hover:bg-[#181B2E]"
            >
              {/* Neon hover indicator */}
              <span className="absolute left-0 top-0 h-full w-[2px]
                               bg-[#4DEEEA] opacity-0 group-hover:opacity-100
                               transition-all duration-300
                               shadow-[0_0_20px_rgba(77,238,234,0.6)]" />

              <span className="text-lg tracking-wide font-['Orbitron']">
                {role.title}
              </span>

              <span className="text-[#9AA0C7] font-['Inter']
                               transition-colors duration-300
                               group-hover:text-[#4DEEEA]">
                {role.salary}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Careers
