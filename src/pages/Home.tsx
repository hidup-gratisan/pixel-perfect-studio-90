import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import heroVisual from "@/assets/hero-visual.png";

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
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                Your Events,
                <br />
                <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                  Your NFTs,
                </span>
                <br />
                <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                  Your Future
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Experience the next generation of event ticketing. Secure blockchain-based NFT tickets that you truly own, trade freely, and collect forever. Built on Bitcoin's security through Stacks.
              </p>

              <div>
                <Button variant="hero" size="lg" className="text-lg px-12 py-6 h-auto">
                  Explore Ticket
                </Button>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative flex items-center justify-center animate-fade-in">
              <div className="relative w-full max-w-lg aspect-square">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-transparent blur-3xl animate-glow" />
                
                {/* Hero Image */}
                <img
                  src={heroVisual}
                  alt="3D flowing fabric visual representing NFT tickets"
                  className="relative z-10 w-full h-full object-contain animate-float"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>
    </div>
  );
};

export default Home;
