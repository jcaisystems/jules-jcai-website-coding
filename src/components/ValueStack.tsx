// jcaisystems/jcai-website/src/components/ValueStack.tsx
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

interface ValueStackProps {
  onGetStarted: () => void;
}

export const ValueStack = ({ onGetStarted }: ValueStackProps) => {
  const stackItems = [
    {
      title: "Your Custom Automation Roadmap",
      description: "A fully personalized blueprint for your business—showing where you lose time & how to stop it.",
      value: "Worth $5,000"
    },
    {
      title: "Top 3 High-Impact Automations",
      description: "Ready-to-implement templates you can use immediately to save your first 5-10 hours.",
      value: "Worth $2,000"
    },
    {
      title: "Step-by-Step Execution Plan",
      description: "Crystal-clear instructions—no guesswork, just a clear path forward to automation.",
      value: "Worth $1,500"
    },
    {
      title: "Time ROI Calculator",
      description: "See exactly how many hours and dollars you'll save with side-by-side comparisons.",
      value: "Worth $500"
    },
    {
      title: "30-Min Live Audit Session",
      description: "We'll diagnose your #1 bottleneck and map your first automation with you, live.",
      value: "Worth $1,000"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-blueprint-background text-blueprint-foreground">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blueprint-primary/10 border border-blueprint-primary/30 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-blueprint-primary" />
            <span className="text-sm font-medium text-blueprint-primary">Here's What You're Actually Getting</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Everything You Need to
            <span className="bg-gradient-to-r from-blueprint-primary via-blue-400 to-blueprint-primary bg-clip-text text-transparent"> Reclaim Your Time</span>
          </h2>
          <p className="text-xl text-blueprint-muted-foreground">
            Not a generic PDF. Not a course. A custom-engineered blueprint for your business.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 mb-12">
          {stackItems.map((item, index) => (
            <div
              key={index}
              className="p-6 md:p-8 bg-blueprint-card border border-blueprint-border hover:border-blueprint-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-blueprint-primary/10 animate-slide-in-left hover:scale-105 rounded-lg"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-8 h-8 text-blueprint-primary flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-xl md:text-2xl font-bold">{item.title}</h3>
                    <span className="text-blueprint-primary font-semibold text-sm whitespace-nowrap">{item.value}</span>
                  </div>
                  <p className="text-blueprint-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blueprint-primary/10 via-blueprint-primary/5 to-blueprint-primary/10 border-2 border-blueprint-primary/50 rounded-2xl p-8 mb-8">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold mb-2">
              Total Value: <span className="bg-gradient-to-r from-blueprint-primary via-blue-400 to-blueprint-primary bg-clip-text text-transparent">$10,000</span>
            </p>
            <p className="text-2xl md:text-3xl font-bold text-blueprint-foreground mb-4">
              Your Price: <span className="text-blueprint-primary">$0</span>
            </p>
            <p className="text-blueprint-muted-foreground text-lg">
              Delivered in 48 hours or less
            </p>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={onGetStarted}
            className="group bg-blueprint-primary text-blueprint-primary-foreground font-bold text-xl px-12 py-5 rounded-lg transition-all animate-wave-glow"
          >
            Yes! I Want My Free Blueprint
            <ArrowRight className="inline-block w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};