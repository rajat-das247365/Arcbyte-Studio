import React from 'react'
import ServiceSection from "../ServiceSection";

const VideoService = () => {
  return (
    <ServiceSection
      label="MOTION & VIDEO"
      title="Cinematic Motion That Captures Attention"
      description="From edits to full motion systems, we create dynamic video content designed to engage, convert, and impress."
      accent="#FF3D57"
      glow="rgba(255,61,87,0.4)"
    >
      <div className="relative bg-black/60 rounded-xl p-6 border border-[#FF3D57]/40">
        <div   style={{
    background: 'linear-gradient(135deg, rgba(255,61,87,0.4), transparent)',
  }} className="h-40 bg-gradient-to-r from-[#FF3D57]/40 to-transparent mb-4" />
        <div className="text-xs text-[#FF3D57] tracking-widest">
          TIMELINE ACTIVE
        </div>
      </div>
    </ServiceSection>
  )
}

export default VideoService
