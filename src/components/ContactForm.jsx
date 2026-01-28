import React from 'react'

const ContactForm = () => {
  return (
 <section className="bg-[#0A0B10] text-[#E6E8FF] py-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">

        {/* LEFT SIDE – CONTEXT */}
        <div className="space-y-6">
          <h2 className="font-['Orbitron'] text-4xl md:text-5xl tracking-widest uppercase">
            Let’s<br />Build Something
          </h2>

          <p className="text-[#9AA0C7] max-w-md leading-[1.7] font-['Inter']">
            Have a project, idea, or challenge in mind?
            Drop us a message and our team will get back with
            clarity, speed, and intent.
          </p>

          {/* Accent line */}
          <div className="w-24 h-[2px] bg-gradient-to-r from-[#4DEEEA] to-transparent" />
        </div>

        {/* FORM CARD */}
        <div className="relative">
          {/* Glow */}
          <div className="absolute -inset-1 rounded-2xl opacity-20 blur-xl
                          bg-gradient-to-br from-[#4DEEEA] via-transparent to-[#2AFF9D]" />

          <form
            className="relative bg-[rgba(18,20,32,0.7)] backdrop-blur-xl
                       border border-white/10 rounded-2xl
                       p-10 space-y-8"
          >
            {/* FORM HEADING */}
            <div className="space-y-2">
              <h3 className="text-2xl font-['Orbitron'] tracking-wide">
                Contact Us
              </h3>
              <p className="text-sm text-[#9AA0C7] font-['Inter']">
                Tell us a bit about yourself and your requirement.
              </p>
            </div>

            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="First name" />
              <Input label="Last name" />
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Email" required />
              <Input label="Phone" />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="text-sm text-[#9AA0C7]">Drop Us a Question</label>
              <textarea
                rows={4}
                className="w-full bg-transparent border border-white/30 px-4 py-3
                           focus:outline-none focus:border-[#4DEEEA]
                           transition-all duration-300
                           resize-none"
              />
            </div>

            {/* CTA */}
            <button
              type="submit"
              className="w-full bg-[#2AFF9D] text-black py-3 rounded-md
                         font-medium tracking-wide
                         transition-all duration-300
                         hover:shadow-[0_0_30px_rgba(42,255,157,0.6)]
                         hover:translate-y-[-1px]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
const Input = ({ label, required }) => {
  return (
    <div className="space-y-2">
      <label className="text-sm text-[#9AA0C7]">
        {label} {required && <span className="text-[#FF3D57]">*</span>}
      </label>
      <input
        type="text"
        className="w-full bg-transparent border border-white/30 px-4 py-3
                   focus:outline-none focus:border-[#4DEEEA]
                   transition-all duration-300"
      />
    </div>
  )
}

export default ContactForm
