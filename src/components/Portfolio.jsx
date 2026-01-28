import React from 'react'

const projects = [
  {
    title: "Neon Commerce",
    category: "Ecommerce Platform",
    accent: "#4DEEEA",
    glow: "rgba(77,238,234,0.35)",
  },
  {
    title: "Void Branding",
    category: "Brand Identity",
    accent: "#8A4FFF",
    glow: "rgba(138,79,255,0.35)",
  },
  {
    title: "Pulse Motion",
    category: "Video & Animation",
    accent: "#FF3D57",
    glow: "rgba(255,61,87,0.35)",
  },
  {
    title: "Quantum UI",
    category: "Web Development",
    accent: "#2AFF9D",
    glow: "rgba(42,255,157,0.35)",
  },
  {
    title: "Arc 3D",
    category: "3D Product Design",
    accent: "#4DEEEA",
    glow: "rgba(77,238,234,0.35)",
  },
  {
    title: "Signal Ads",
    category: "Ads & Marketing",
    accent: "#8A4FFF",
    glow: "rgba(138,79,255,0.35)",
  },
];

const Portfolio = () => {
  return (
     <section className="py-32 bg-[#0A0B10] relative overflow-hidden">
      
      {/* Subtle background noise */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(138,79,255,0.08)_0%,transparent_65%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-20 text-center">
          <p className="text-sm tracking-widest text-[#4DEEEA]">
            PORTFOLIO
          </p>
          <h2 className="text-4xl font-bold mt-4 text-[#E6E8FF]">
            Mission Archive
          </h2>
          <p className="mt-4 text-[#9AA0C7] max-w-2xl mx-auto">
            A selection of digital missions we’ve engineered across web, design,
            motion, 3D, and branding.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-xl overflow-hidden
                bg-[rgba(18,20,32,0.7)] backdrop-blur
                border border-white/10
                transition transform hover:-translate-y-2"
            >
              {/* Glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition blur-xl"
                style={{ background: project.glow }}
              />

              {/* Fake preview / placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-white/5 to-white/0">
                <div className="absolute inset-0 flex items-center justify-center text-xs tracking-widest text-white/40">
                  PROJECT PREVIEW
                </div>
              </div>

              {/* Content */}
              <div className="relative p-6">
                <p
                  className="text-xs tracking-widest mb-2"
                  style={{ color: project.accent }}
                >
                  {project.category.toUpperCase()}
                </p>

                <h3 className="text-xl font-semibold text-[#E6E8FF]">
                  {project.title}
                </h3>

                <div
                  className="mt-6 inline-flex items-center gap-2 text-sm"
                  style={{ color: project.accent }}
                >
                  View Case Study →
                </div>
              </div>

              {/* Scan line */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
