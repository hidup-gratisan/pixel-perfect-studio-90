import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Ticket, Wallet, Shield, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

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
          <motion.div 
            className="text-center mb-20 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold">
              How It Works
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Creating and managing blockchain-based event tickets is simple with intic.id
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  className="gradient-border p-8 space-y-4"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <div className="text-4xl font-bold text-primary/20">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button variant="hero" size="lg" className="text-lg px-12 py-6 h-auto">
              Start Creating Events
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
