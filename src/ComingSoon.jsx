import React from "react";

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-secondary text-dark flex flex-col items-center justify-center px-6 py-12 font-sans">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 font-display text-accent">
          The Smartest Way to Track AI Trends
        </h1>
        <p className="text-lg md:text-xl text-muted mb-10">
          Discover what’s really shaping the future of AI. Real-time insights. Signal over noise.
        </p>

        <form className="w-full flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-xl text-dark focus:outline-none text-base shadow-md"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:scale-105 transition-transform shadow-md"
          >
            Get Early Access
          </button>
        </form>

        <p className="text-sm text-muted mt-4">
          We’ll only notify you when we launch — no spam.
        </p>
      </div>

      <footer className="mt-16 text-accent text-sm">
        © {new Date().getFullYear()} TrendAnalyzer AI
      </footer>
    </div>
  );
}
