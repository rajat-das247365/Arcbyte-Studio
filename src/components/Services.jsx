import React from 'react'

const services = [
  {
    title: "Web Engineering",
    desc: "Cutting Edge & Scalable",
    glow: "rgba(77,238,234,0.35)",
    accent: "#4DEEEA",
  },
  {
    title: "Visual Design",
    desc: "Creative & Bold",
    glow: "rgba(138,79,255,0.35)",
    accent: "#8A4FFF",
  },
  {
    title: "Motion & Video",
    desc: "Edit. Animate. Impress.",
    glow: "rgba(255,61,87,0.35)",
    accent: "#FF3D57",
  },
];
const Services = () => {
  return (
      <section className="py-32 bg-[#0A0B10]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest text-[#4DEEEA]">SERVICES</p>
          <h2 className="text-4xl font-bold mt-4 text-[#E6E8FF]">
            Engineering Digital Experiences
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative p-6 rounded-xl bg-[rgba(18,20,32,0.7)]
                backdrop-blur border border-white/10
                hover:scale-105 transition group"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition blur-xl"
                style={{ background: service.glow }}
              />

              <h3 className="relative text-xl font-semibold text-[#E6E8FF]">
                {service.title}
              </h3>

              <p className="relative mt-3 text-[#9AA0C7]">
                {service.desc}
              </p>

              <div
                className="relative mt-6 text-sm"
                style={{ color: service.accent }}
              >
                Explore →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
