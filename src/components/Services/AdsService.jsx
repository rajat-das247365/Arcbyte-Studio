import React from 'react'
import ServiceSection from "../ServiceSection";

const AdsService = () => {
  return (
    <ServiceSection
      label="ADS & MARKETING"
      title="High-Impact Digital Campaigns"
      description="We build and manage data-driven ad campaigns that scale brands across platforms with precision."
      accent="#FF8A00"
      glow="rgba(255,138,0,0.4)"
    >
      <div className="space-y-4">
        {["CTR", "ROAS", "CONVERSIONS"].map(metric => (
          <div key={metric} className="flex justify-between text-sm text-white">
            <span>{metric}</span>
            <span className="text-[#FF8A00]">▲ Optimized</span>
          </div>
        ))}
      </div>
    </ServiceSection>
  )
}

export default AdsService
