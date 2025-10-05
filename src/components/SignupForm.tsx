// jcaisystems/jcai-website/src/components/SignupForm.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Sparkles, X } from "lucide-react";

interface SignupFormProps {
  onClose: () => void;
}

export const SignupForm = ({ onClose }: SignupFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    biggestChallenge: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Success! 🎉",
        description: "Your automation blueprint will be delivered within 48 hours.",
      });
      setIsSubmitting(false);
      onClose();
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-card border-primary/30 shadow-2xl shadow-primary/20 relative">
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-4 right-4 z-10"
        >
          <X className="w-5 h-5" />
        </Button>

        <div className="p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/50 rounded-full px-4 py-2 mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Step 1 of 1</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Claim Your Free
              <span className="gradient-text"> Automation Freedom Blueprint</span>
            </h2>
            <p className="text-muted-foreground">
              Tell us about your business and we'll create a custom automation roadmap—delivered in 48 hours. No strings attached.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="John Smith"
                  className="bg-secondary border-border focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@company.com"
                  className="bg-secondary border-border focus:border-primary"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="company">Company Name *</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  placeholder="Your Company"
                  className="bg-secondary border-border focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="bg-secondary border-border focus:border-primary"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="biggestChallenge">What's your biggest operational challenge? *</Label>
              <Textarea
                id="biggestChallenge"
                name="biggestChallenge"
                value={formData.biggestChallenge}
                onChange={handleChange}
                required
                placeholder="e.g., Too many manual tasks, lost leads, can't scale without hiring more people..."
                rows={4}
                className="bg-secondary border-border focus:border-primary resize-none"
              />
            </div>

            <div className="bg-secondary/50 border border-border rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                By submitting this form, you'll receive your custom automation blueprint within 48 hours. No sales calls required—just pure value.
              </p>
            </div>

            <Button 
              type="submit" 
              variant="hero" 
              size="xl" 
              className="w-full group"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Get My Free Blueprint"}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
};