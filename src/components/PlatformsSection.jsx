import React from 'react'
  const platforms = [
    ['Amazon', 'AJIO', 'Blinkit', 'Nykaa', 'YouTube', 'LinkedIn'],
    ['Flipkart', 'IndiaMART', 'Zepto', 'Meesho', 'Instagram', 'Tata CLiQ'],
    ['Myntra', 'JioMart', 'Swiggy', 'Snapdeal', 'Facebook', 'InstaMart'],
  ]
const PlatformsSection = () => {
  return (
      <section className="bg-[#0A0B10] text-[#E6E8FF] py-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">

        {/* LEFT – CONTEXT */}
        <div className="space-y-6">
          <h2 className="font-['Orbitron'] text-4xl md:text-5xl tracking-widest uppercase">
            Where Our<br />Clients Win
          </h2>

          <p className="text-[#9AA0C7] max-w-md leading-[1.7] font-['Inter']">
            From marketplaces to quick commerce and social platforms,
            our clients operate across every major channel where
            India shops, scrolls, and converts.
          </p>

          {/* Accent */}
          <div className="w-24 h-[2px] bg-gradient-to-r from-[#4DEEEA] to-transparent" />
        </div>

        {/* RIGHT – PLATFORM MATRIX */}
        <div className="relative">
          {/* Ambient glow */}
          <div className="absolute -inset-1 rounded-2xl opacity-20 blur-xl
                          bg-gradient-to-br from-[#4DEEEA] via-transparent to-[#8A4FFF]" />

          <div className="relative bg-[rgba(18,20,32,0.7)] backdrop-blur-xl
                          border border-white/10 rounded-2xl
                          p-10 grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8">

            {platforms.map((column, colIndex) => (
              <div key={colIndex} className="space-y-5">
                {column.map((item, index) => (
                  <div
                    key={index}
                    className="group relative flex items-center gap-4 pb-4
                               border-b border-white/10
                               transition-all duration-300
                               ease-[cubic-bezier(0.4,0,0.2,1)]
                               hover:translate-x-1"
                  >
                    {/* Dot */}
                    <span
                      className="h-2.5 w-2.5 rounded-full
                                 border border-white/60
                                 transition-all duration-300
                                 group-hover:border-[#4DEEEA]
                                 group-hover:shadow-[0_0_12px_rgba(77,238,234,0.6)]"
                    />

                    {/* Name */}
                    <span
                      className="font-['Inter'] text-[15px] tracking-wide
                                 text-[#E6E8FF]
                                 transition-colors duration-300
                                 group-hover:text-[#4DEEEA]"
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>

  )
}

export default PlatformsSection
