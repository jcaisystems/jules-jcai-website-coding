// jcaisystems/jcai-website/src/components/ValueStack.tsx
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

interface ValueStackProps {
  onGetStarted: () => void;
}

export const ValueStack = ({ onGetStarted }: ValueStackProps) => {
  const stackItems = [
    {
      title: "Your Custom Automation Roadmap",
      description: "A fully personalized blueprint built for your business — showing exactly where you lose time & how to stop it",
      value: "Worth $5,000"
    },
    {
      title: "Top 3 High-Impact Automations",
      description: "Ready to implement in the next 30 days with plug-and-play templates you can use immediately",
      value: "Worth $2,000"
    },
    {
      title: "Step-by-Step Execution Plan",
      description: "Crystal-clear instructions — no guesswork, no overwhelm, just a clear path forward",
      value: "Worth $1,500"
    },
    {
      title: "Time ROI Calculator",
      description: "See exactly how many hours and dollars you'll save with side-by-side comparisons",
      value: "Worth $500"
    },
    {
      title: "30-Min Live Audit Session",
      description: "We diagnose your #1 biggest bottleneck and map your first automation together",
      value: "Worth $1,000"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-0 md:px-4 relative z-10">
        <div className="px-4 md:px-0">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Here's What You're Actually Getting</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Everything You Need to
              <span className="gradient-text"> Reclaim Your Time</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Not a generic PDF. Not a course. A custom-engineered blueprint for your business.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4 mb-12">
            {stackItems.map((item, index) => (
              <Card 
                key={index}
                className="p-6 md:p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 animate-slide-in-left hover:scale-105"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-xl md:text-2xl font-bold">{item.title}</h3>
                      <span className="text-primary font-semibold text-sm whitespace-nowrap">{item.value}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-2 border-primary/50 rounded-2xl p-8 mb-8">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold mb-2">
                Total Value: <span className="gradient-text">$10,000</span>
              </p>
              <p className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Your Price: <span className="text-primary">$0</span>
              </p>
              <p className="text-muted-foreground text-lg">
                Delivered in 48 hours or less
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button 
            variant="hero" 
            size="xl"
            onClick={onGetStarted}
            className="group text-xl px-16 h-16 rounded-none [animation:wave-glow_2s_ease-in-out_infinite]"
          >
            Yes! I Want My Free Blueprint
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};