import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for trying out NFT tickets",
      features: [
        "Up to 5 events",
        "Basic blockchain verification",
        "Community support",
        "Standard ticket templates",
      ],
    },
    {
      name: "Pro",
      price: "$49",
      description: "For professional event organizers",
      features: [
        "Unlimited events",
        "Advanced blockchain features",
        "Priority support",
        "Custom ticket designs",
        "Analytics dashboard",
        "Revenue sharing options",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale operations",
      features: [
        "Everything in Pro",
        "Dedicated account manager",
        "Custom integrations",
        "White-label options",
        "Advanced security features",
        "SLA guarantee",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="relative min-h-screen pt-32 pb-20 grid-background">
        <div className="absolute inset-0 grid-background opacity-30" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold">
              Choose Your Plan
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Select the perfect plan for your event ticketing needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`gradient-border p-8 space-y-6 hover:scale-105 transition-all duration-300 animate-fade-in ${
                  plan.popular ? "ring-2 ring-primary" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="text-primary text-sm font-bold text-center">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <div className="text-4xl font-bold">
                    {plan.price}
                    {plan.price !== "Custom" && <span className="text-lg text-muted-foreground">/mo</span>}
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? "hero" : "outline"}
                  className="w-full"
                  size="lg"
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
