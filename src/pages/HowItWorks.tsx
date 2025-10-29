import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Ticket, Wallet, Shield, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Ticket,
      title: "Create Your Event",
      description: "Set up your event details and ticket tiers in minutes. Our intuitive platform makes it easy to configure everything.",
    },
    {
      icon: Wallet,
      title: "Mint NFT Tickets",
      description: "Your tickets are minted as NFTs on the blockchain, giving buyers true ownership and authenticity.",
    },
    {
      icon: Shield,
      title: "Secure Distribution",
      description: "Tickets are distributed securely through blockchain technology, eliminating fraud and counterfeiting.",
    },
    {
      icon: TrendingUp,
      title: "Trade & Transfer",
      description: "Ticket holders can freely trade or transfer their NFT tickets on secondary markets, with you earning royalties.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="relative min-h-screen pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-6 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold">
              How It Works
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Creating and managing blockchain-based event tickets is simple with intic.id
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="gradient-border p-8 space-y-4 hover:scale-105 transition-transform duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary/20">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button variant="hero" size="lg" className="text-lg px-12 py-6 h-auto">
              Start Creating Events
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
