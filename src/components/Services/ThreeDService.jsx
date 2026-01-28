import React from 'react'
import ServiceSection from "../ServiceSection";

const ThreeDService = () => {
  return (
    <ServiceSection
      label="3D PRODUCT DESIGN"
      title="Depth-Driven Digital Products"
      description="We design realistic and stylized 3D assets for products, marketing, and interactive experiences."
      accent="#2AFF9D"
      glow="rgba(42,255,157,0.4)"
    >
      <div className="relative h-64 rounded-xl bg-[radial-gradient(circle_at_top,#2AFF9D40,transparent_60%)] border border-[#2AFF9D]/40 shadow-[0_0_40px_rgba(42,255,157,0.4)]" />
    </ServiceSection>
  )
}

export default ThreeDService
