import React from 'react'
import ServiceSection from "../ServiceSection";

const DesignService = () => {
  return (
   <ServiceSection
      label="VISUAL DESIGN"
      title="Bold, Futuristic Brand Systems"
      description="We design striking brand identities, UI visuals, and marketing assets that feel powerful, modern, and unmistakable."
      accent="#8A4FFF"
      glow="rgba(138,79,255,0.4)"
    >
      <div className="relative h-64 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8A4FFF]/40 to-[#FF3D57]/30 blur-xl" />
        <div className="absolute inset-6 border border-white/20 rounded-xl" />
      </div>
    </ServiceSection>
  )
}

export default DesignService
