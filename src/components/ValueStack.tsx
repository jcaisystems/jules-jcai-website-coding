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
    <section>
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6" style={{ backgroundColor: 'rgba(6, 182, 212, 0.1)', border: '1px solid rgba(6, 182, 212, 0.2)'}}>
            <Sparkles className="w-4 h-4" style={{ color: 'var(--primary-accent)'}} />
            <span className="text-sm font-medium" style={{ color: 'var(--primary-accent)'}}>Here's What You're Getting</span>
          </div>

          <h2 className="text-5xl font-bold mb-6">
            Everything You Need to
            <span className="gradient-text"> Reclaim Your Time</span>
          </h2>
          <p className="text-xl">
            This isn't a generic PDF. It's a custom-engineered blueprint for your specific business.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 mb-12">
          {stackItems.map((item, index) => (
            <div key={index} className="card">
              <div className="feature-list-item">
                <CheckCircle2 className="w-8 h-8 flex-shrink-0 mt-1" style={{ color: 'var(--primary-accent)'}} />
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <span className="font-semibold text-sm whitespace-nowrap" style={{ color: 'var(--primary-accent)'}}>{item.value}</span>
                  </div>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto rounded-2xl p-8 mb-8" style={{ background: 'linear-gradient(to right, rgba(6, 182, 212, 0.1), rgba(6, 182, 212, 0.05), rgba(6, 182, 212, 0.1))', border: '2px solid rgba(6, 182, 212, 0.3)' }}>
          <div className="text-center">
            <p className="text-4xl font-bold mb-2">
              Total Value: <span className="gradient-text">$10,000</span>
            </p>
            <p className="text-3xl font-bold mb-4">
              Your Price: <span style={{ color: 'var(--primary-accent)'}}>$0</span>
            </p>
            <p>
              Delivered in 48 hours or less.
            </p>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={onGetStarted}
            className="cta-button"
          >
            Yes! I Want My Free Blueprint
            <ArrowRight className="inline-block ml-2 w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};