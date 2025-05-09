import React from "react";

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-[#F4F1DE] text-[#1A202C] flex flex-col items-center justify-center px-6 py-12 font-[\'Work Sans\',sans-serif]">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 font-[\'Playfair Display\',serif] text-[#3D405B]">
          The Smartest Way to Track AI Trends
        </h1>
        <p className="text-lg md:text-xl text-[#6D6875] mb-10">
          Discover what’s really shaping the future of AI. Real-time insights. Signal over noise.
        </p>

        <form className="w-full flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-xl text-[#1A202C] focus:outline-none text-base shadow-md"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-[#81B29A] text-white font-semibold hover:scale-105 transition-transform shadow-md"
          >
            Get Early Access
          </button>
        </form>

        <p className="text-sm text-[#6D6875] mt-4">
          We’ll only notify you when we launch — no spam.
        </p>
      </div>

      <footer className="mt-16 text-[#3D405B] text-sm">
        © {new Date().getFullYear()} TrendAnalyzer AI
      </footer>
    </div>
  );
}
