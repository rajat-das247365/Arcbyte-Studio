import React from 'react'
import ServiceSection from "../ServiceSection";

const EcommerceService = () => {
  return (
    <ServiceSection
      label="ECOMMERCE SOLUTIONS"
      title="Next-Gen Online Stores"
      description="From storefront UI to checkout flows, we craft ecommerce experiences that convert and scale."
      accent="#4DEEEA"
      glow="rgba(77,238,234,0.35)"
    >
      <div className="grid grid-cols-2 gap-4">
        {[1, 2, 3, 4].map(i => (
          <div
            key={i}
            className="h-24 rounded-lg bg-[rgba(18,20,32,0.8)] border border-white/10 hover:border-[#4DEEEA] transition"
          />
        ))}
      </div>
    </ServiceSection>
  )
}

export default EcommerceService
