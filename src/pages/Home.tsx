import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import heroVisual from "@/assets/hero-visual.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen grid-background overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 grid-background opacity-50" />
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
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

            {/* Right Visual */}
            <motion.div 
              className="relative flex items-center justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative w-full max-w-lg aspect-square">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-transparent blur-3xl animate-glow" />
                
                {/* Hero Image */}
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

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>
    </div>
  );
};

export default Home;
