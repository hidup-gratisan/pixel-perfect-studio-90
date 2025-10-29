import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import heroVisual from "@/assets/hero-visual.png";
import sphere1 from "@/assets/sphere-1.png";
import sphere2 from "@/assets/sphere-2.png";
import sphere3 from "@/assets/sphere-3.png";
import { motion } from "framer-motion";
import { Ticket, Wallet, Shield, TrendingUp, Check } from "lucide-react";

const Home = () => {
  const features = [
    {
      image: sphere1,
      title: "Eliminate fraud with blockchain-verified authenticity",
    },
    {
      image: sphere2,
      title: "True ownership with ability to trade and transfer tickets",
    },
    {
      image: sphere3,
      title: "Built on Universal Push Chain for future event",
    },
  ];

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
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen grid-background overflow-hidden">
        <div className="absolute inset-0 grid-background opacity-50" />
        
        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1 
                className="text-6xl lg:text-7xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Your Events,
                <br />
                <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                  Your NFTs,
                </span>
                <br />
                <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                  Your Future
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-lg text-muted-foreground max-w-xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Experience the next generation of event ticketing. Secure blockchain-based NFT tickets that you truly own, trade freely, and collect forever. Built on Bitcoin's security through Stacks.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button variant="hero" size="lg" className="text-lg px-12 py-6 h-auto">
                  Explore Ticket
                </Button>
              </motion.div>
            </motion.div>

            <motion.div 
              className="relative flex items-center justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative w-full max-w-lg aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-transparent blur-3xl animate-glow" />
                
                <motion.img
                  src={heroVisual}
                  alt="3D flowing fabric visual representing NFT tickets"
                  className="relative z-10 w-full h-full object-contain"
                  animate={{ 
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Why Intic Section */}
      <section id="why-intic" className="relative min-h-screen pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-background to-background" />
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-secondary/20 to-transparent blur-3xl" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-radial from-primary/15 to-transparent blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-20 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl lg:text-6xl font-bold">
              Why{" "}
              <span className="text-primary">
                intic.id
              </span>
              ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              NFT tickets revolutionize event access with blockchain security.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="gradient-border p-8 space-y-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative aspect-square flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl animate-glow" />
                  
                  <motion.img
                    src={feature.image}
                    alt={`Feature ${index + 1}`}
                    className="relative z-10 w-3/4 h-3/4 object-contain drop-shadow-2xl"
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                  />
                </div>

                <p className="text-center text-foreground leading-relaxed">
                  {feature.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="relative min-h-screen pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-20 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl lg:text-6xl font-bold">
              How It Works
            </h2>
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

      {/* Pricing Section */}
      <section id="pricing" className="relative min-h-screen pt-32 pb-20 grid-background">
        <div className="absolute inset-0 grid-background opacity-30" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16 space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl lg:text-6xl font-bold">
              Choose Your Plan
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Select the perfect plan for your event ticketing needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                className={`gradient-border p-8 space-y-6 ${
                  plan.popular ? "ring-2 ring-primary" : ""
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
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
                    <motion.li 
                      key={i} 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + i * 0.05 }}
                    >
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? "hero" : "outline"}
                  className="w-full"
                  size="lg"
                >
                  Get Started
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
