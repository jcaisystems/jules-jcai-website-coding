// src/components/Hero.tsx
import { ArrowRight } from "lucide-react";
import { LiveUrgency } from "./LiveUrgency";

interface HeroProps {
  onGetStarted: () => void;
  spotsLeft: number;
}

export const Hero = ({ onGetStarted, spotsLeft }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-blueprint-background text-blueprint-foreground">
      {/* Background overlays */}
      <div className="absolute inset-0 z-0 bg-gradient-hero" />
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,191,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,191,255,0.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          opacity: 0.5
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Unlock 10+ Hours
            <br />
            <span className="bg-gradient-to-r from-blueprint-primary via-blue-400 to-blueprint-primary bg-clip-text text-transparent">Weekly.</span>
          </h1>

          <p className="text-2xl md:text-3xl font-bold mb-4 max-w-3xl mx-auto leading-tight">
            The AI Automation Freedom Blueprint
          </p>
          <p className="text-xl md:text-2xl text-blueprint-primary mb-8 max-w-3xl mx-auto font-semibold">
            Yours 100% Free (Yes, Free)
          </p>

          <div className="mb-10 flex justify-center">
             <LiveUrgency spotsLeft={spotsLeft} />
          </div>

          <div className="flex flex-col gap-4 justify-center items-center">
            <button
              onClick={onGetStarted}
              className="group bg-blueprint-primary text-blueprint-primary-foreground font-bold text-xl px-12 py-5 rounded-lg transition-all animate-wave-glow"
            >
              Claim Your Free Blueprint Now
              <ArrowRight className="inline-block w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-xs text-blueprint-muted-foreground">
              No contracts • No credit cards • No commitments
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};