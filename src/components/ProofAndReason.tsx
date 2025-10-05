// jcaisystems/jcai-website/src/components/ProofAndReason.tsx
import { Quote, TrendingUp, Clock, DollarSign } from "lucide-react";

export const ProofAndReason = () => {
  const testimonials = [
    {
      quote: "Working with JCAI wasn't just an improvement—it was a transformation. We reclaimed 15+ hours weekly of administrative time. Our lead conversion increased 30% in just two months.",
      author: "Anna M.",
      role: "Freelance Consultant",
      metric: "30% conversion lift"
    },
    {
      quote: "I can finally take a vacation without my phone glued to my hand. The AI handles client inquiries, schedules meetings, and keeps operations running. It's like having a COO that never sleeps.",
      author: "Marcus T.",
      role: "Agency Owner",
      metric: "24/7 coverage"
    },
    {
      quote: "We were spending $8K monthly on contractors for tasks our AI now handles automatically. ROI was positive within 6 weeks. Best investment we've made.",
      author: "Sarah K.",
      role: "E-commerce Director",
      metric: "6-week payback"
    }
  ];

  const stats = [
    { icon: TrendingUp, value: "30%", label: "Average conversion increase" },
    { icon: Clock, value: "15+ hrs", label: "Saved per week" },
    { icon: DollarSign, value: "$250K+", label: "Annual cost savings" }
  ];

  return (
    <section id="proof">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Real Businesses. <span className="gradient-text">Real Results.</span>
          </h2>
          <p className="text-xl">
            <span className="font-bold" style={{ color: 'var(--primary-accent)' }}>Why is this free?</span> Simple: We let our results speak for themselves. Once you see what's possible, many of our clients ask us to build it for them.
          </p>
           <p className="text-lg mt-4">
            You keep the entire blueprint regardless — no strings, no obligations.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="card text-center"
            >
              <stat.icon className="w-10 h-10 mx-auto mb-3" style={{ color: 'var(--primary-accent)' }} />
              <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <p className="text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card"
            >
              <Quote className="w-6 h-6 mb-3" style={{ color: 'var(--primary-accent)' }} />
              <p className="mb-4 text-sm italic" style={{color: 'var(--text-primary)'}} >"{testimonial.quote}"</p>
              <div className="border-t pt-3" style={{ borderColor: 'var(--border-subtle)' }}>
                <div className="font-semibold text-sm" style={{color: 'var(--text-primary)'}}>{testimonial.author}</div>
                <div className="text-xs mb-2">{testimonial.role}</div>
                <div className="rounded px-2 py-1 inline-block" style={{ backgroundColor: 'rgba(6, 182, 212, 0.1)', border: '1px solid rgba(6, 182, 212, 0.2)' }}>
                  <span className="font-semibold text-xs" style={{ color: 'var(--primary-accent)' }}>{testimonial.metric}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};