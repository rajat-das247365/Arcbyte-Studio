import React from "react";
import {
  FaGlobe,
  FaFeather,
  FaEye,
  FaHeart,
} from "react-icons/fa";

const plans = [
  {
    title: "Basic",
    price: "₹35,000 – ₹55,000",
    icon: FaGlobe,
    accent: "#4DEEEA",
    features: [
      "Website (up to 5 pages)",
      "Social Media Creatives",
      "Video (up to 60 sec)",
      "Basic SEO setup",
      "Ad spend consultation only",
    ],
  },
  {
    title: "Advance",
    price: "₹60,000 – ₹90,000",
    icon: FaFeather,
    accent: "#8A4FFF",
    features: [
      "Website (up to 10 pages)",
      "Monthly Social Creatives",
      "Videos (up to 90 sec)",
      "SEO optimization",
      "Ad campaign setup",
    ],
  },
  {
    title: "AI Pro",
    price: "₹1,20,000 – ₹2,60,000",
    icon: FaEye,
    accent: "#FF4D6D",
    features: [
      "Unlimited pages website",
      "Social Media Creatives",
      "Edited Videos (up to 2 min)",
      "SEO + AI analytics",
      "AI-powered ad campaigns",
    ],
  },
  {
    title: "Digital Ad IDs",
    price: "₹1500",
    icon: FaHeart,
    accent: "#FACC15",
    features: [
      "Ads ID purchase",
      "Campaign funding & execution",
      "Brand growth & ROI",
      "Profit redistribution",
      "Transparent & scalable model",
    ],
  },
];

const PricingSection = () => {
  return (
    <section className="relative py-32 bg-[#0A0B10] overflow-hidden">
      
      {/* Ambient Glow */}
      <div className="absolute inset-0 blur-3xl opacity-20 bg-gradient-to-br from-[#4DEEEA] via-[#8A4FFF] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm tracking-widest text-[#4DEEEA] mb-4">
            CHOOSE YOUR LOADOUT
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#E6E8FF]">
            Pricing & Engagement Models
          </h2>
          <p className="mt-6 text-[#9AA0C7] max-w-2xl mx-auto">
            Flexible packages designed to scale with your ambition — from
            startups to high-growth brands.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, i) => {
            const Icon = plan.icon;

            return (
              <div
                key={i}
                className="relative group rounded-2xl p-8 bg-[rgba(18,20,32,0.8)] border transition-all"
                style={{
                  borderColor: `${plan.accent}33`,
                  boxShadow: `0 0 0 rgba(0,0,0,0)`,
                }}
              >
                {/* Hover Glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl blur-xl"
                  style={{
                    background: `${plan.accent}33`,
                  }}
                />

                <div className="relative z-10 text-center">
                  <Icon
                    size={26}
                    style={{ color: plan.accent }}
                    className="mx-auto mb-4"
                  />

                  <h3 className="text-xl font-semibold text-[#E6E8FF]">
                    {plan.title}
                  </h3>

                  <ul className="mt-6 space-y-3 text-sm text-[#9AA0C7]">
                    {plan.features.map((f, idx) => (
                      <li key={idx}>{f}</li>
                    ))}
                  </ul>

                  <div className="mt-8 text-lg font-bold text-[#E6E8FF]">
                    {plan.price}
                  </div>

                  <button
                    className="mt-6 w-full py-3 rounded-lg font-semibold text-[#0A0B10] transition-transform hover:scale-105"
                    style={{
                      background: `linear-gradient(90deg, ${plan.accent}, #8A4FFF)`,
                      boxShadow: `0 0 25px ${plan.accent}66`,
                    }}
                  >
                    Select Plan
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
