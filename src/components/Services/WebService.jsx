import React from "react";
import ServiceSection from "../ServiceSection";

const WebService = () => {
  return (
    <ServiceSection
      label="WEB ENGINEERING"
      title="High-Performance Web Experiences"
      description="We engineer fast, scalable, and immersive websites using modern frameworks, optimized architecture, and clean UI systems."
      accent="#4DEEEA"
      glow="rgba(77,238,234,0.4)"
    >
      <div className="relative bg-[rgba(18,20,32,0.7)] backdrop-blur border border-[#4DEEEA]/40 rounded-xl p-6">
        <pre className="text-xs text-[#E6E8FF] leading-relaxed">
{`> framework: React / Next.js
> performance: optimized
> seo: enabled
> status: LIVE`}
        </pre>
      </div>
    </ServiceSection>
  );
};

export default WebService;
