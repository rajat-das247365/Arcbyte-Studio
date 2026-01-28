import React from 'react'

const ServiceSection = ({
  label,
  title,
  description,
  accent,
  glow,
  children,
}) => {
  return (
    <div>
       <section className="relative py-32 bg-[#0A0B10] overflow-hidden">
      
      {/* Ambient Glow */}
      <div
        className="absolute inset-0 blur-3xl opacity-30"
        style={{ background: glow }}
      />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        
        {/* Text */}
        <div>
          <p
            className="text-sm tracking-widest mb-4"
            style={{ color: accent }}
          >
            {label}
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#E6E8FF]">
            {title}
          </h2>

          <p className="mt-6 text-[#9AA0C7] max-w-xl">
            {description}
          </p>

          <button
            className="mt-10 px-6 py-3 rounded-lg font-semibold text-[#0A0B10]"
            style={{
              background: `linear-gradient(90deg, ${accent}, #8A4FFF)`,
              boxShadow: `0 0 30px ${glow}`,
            }}
          >
            Start a Project →
          </button>
        </div>

        {/* Visual */}
        <div>{children}</div>
      </div>
    </section>
    </div>
  )
}

export default ServiceSection
