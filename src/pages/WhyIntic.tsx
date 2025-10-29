import Navigation from "@/components/Navigation";
import sphere1 from "@/assets/sphere-1.png";
import sphere2 from "@/assets/sphere-2.png";
import sphere3 from "@/assets/sphere-3.png";

const WhyIntic = () => {
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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-background to-background" />
        
        {/* Radial Glow Top Left */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-secondary/20 to-transparent blur-3xl" />
        
        {/* Radial Glow Top Right */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-radial from-primary/15 to-transparent blur-3xl" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-20 space-y-6 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold">
              Why{" "}
              <span className="text-primary">
                intic.id
              </span>
              ?
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              NFT tickets revolutionize event access with blockchain security.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="gradient-border p-8 space-y-6 hover:scale-105 transition-transform duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Image Container */}
                <div className="relative aspect-square flex items-center justify-center">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl animate-glow" />
                  
                  {/* Sphere Image */}
                  <img
                    src={feature.image}
                    alt={`Feature ${index + 1}`}
                    className="relative z-10 w-3/4 h-3/4 object-contain drop-shadow-2xl"
                  />
                </div>

                {/* Text */}
                <p className="text-center text-foreground leading-relaxed">
                  {feature.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyIntic;
