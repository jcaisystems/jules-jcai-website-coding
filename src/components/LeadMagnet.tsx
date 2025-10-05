// jcaisystems/jcai-website/src/components/LeadMagnet.tsx
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Zap, Clock, ArrowRight, Target } from "lucide-react";
import { LiveUrgency } from "./LiveUrgency";

interface LeadMagnetProps {
  onGetStarted: () => void;
  spotsLeft: number;
}

export const LeadMagnet = ({ onGetStarted, spotsLeft }: LeadMagnetProps) => {
  const quickWins = [
    { icon: Zap, title: "10+ Hours Saved", description: "Every single week" },
    { icon: Target, title: "Custom Built", description: "For your business" },
    { icon: Clock, title: "48 Hour Delivery", description: "Or it's free" }
  ];

  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 z-0" style={{
        backgroundImage: 'linear-gradient(rgba(0,191,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,191,255,0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <Card className="max-w-5xl mx-auto bg-gradient-to-br from-card via-card to-primary/5 border-2 border-primary/50 shadow-2xl shadow-primary/30 overflow-hidden">
          <div className="py-8 md:p-16">
            <div className="px-8 md:px-0">
              <div className="text-center mb-8">
                <h2 className="text-4xl md:text-6xl font-bold mb-6">
                  Ready to Get Your
                  <span className="gradient-text"> 10+ Hours Back?</span>
                </h2>

                <p className="text-2xl text-foreground font-semibold mb-4">
                  Claim Your Automation Freedom Blueprint
                </p>
                 <p className="text-xl text-muted-foreground mb-8">
                  Custom-built for your business. Delivered in 48 hours or less.
                </p>

                <div className="flex justify-center my-8">
                  <LiveUrgency spotsLeft={spotsLeft} />
                </div>
              </div>
            </div>

            <div className="px-0 md:px-16">
              <Button 
                variant="hero" 
                size="xl"
                onClick={onGetStarted}
                className="group w-full px-16 h-16 rounded-none [animation:wave-glow_2s_ease-in-out_infinite]"
              >
                Yes! Claim My Free Blueprint Now
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="px-8 md:px-0">
              <p className="text-sm text-muted-foreground mb-8 text-center">
                No credit card • No sales calls • No commitments
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {quickWins.map((win, index) => (
                  <div 
                    key={index}
                    className="bg-secondary/50 border border-border rounded-lg p-6 text-center animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <win.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-bold text-lg mb-2">{win.title}</h3>
                    <p className="text-sm text-muted-foreground">{win.description}</p>
                  </div>
                ))}
              </div>

              <div className="bg-primary/5 border border-primary/30 rounded-lg p-6 text-center">
                <p className="text-lg text-foreground mb-2">
                  <span className="font-bold text-primary">Why We Limit This:</span> Each blueprint is custom-engineered by our team.
                </p>
                <p className="text-muted-foreground">
                  We cap it at 20 per month to ensure quality. Once they're gone, you'll wait until next month.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};