// src/components/Hero.tsx
import { ArrowRight } from "lucide-react";
import { LiveUrgency } from "./LiveUrgency";

interface HeroProps {
  onGetStarted: () => void;
  spotsLeft: number;
}

export const Hero = ({ onGetStarted, spotsLeft }: HeroProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="container text-center">
        {/* Main Headline */}
        <h1 className="mb-6">
          Unlock 10+ Hours
          <br />
          <span className="gradient-text">Weekly.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-2xl font-bold mb-4">
          The AI Automation Freedom Blueprint
        </p>
        <p className="text-xl font-semibold mb-8" style={{ color: 'var(--primary-accent)' }}>
          Yours 100% Free (Yes, Free)
        </p>

        {/* Urgency Counter */}
        <div className="mb-10 flex justify-center">
           <LiveUrgency spotsLeft={spotsLeft} />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 justify-center items-center">
          <button
            onClick={onGetStarted}
            className="cta-button"
          >
            Claim Your Free Blueprint Now
            <ArrowRight className="inline-block ml-2 w-6 h-6" />
          </button>
          <p className="text-xs">
            No contracts • No credit cards • No commitments
          </p>
        </div>
      </div>
    </section>
  );
};