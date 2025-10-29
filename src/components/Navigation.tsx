import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Why intic", path: "/why-intic" },
    { name: "Pricing", path: "/pricing" },
    { name: "How it Works", path: "/how-it-works" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/60 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
            <Lock className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold">
            intic
          </span>
        </Link>

        {/* Nav Pills */}
        <div className="flex items-center gap-2 bg-foreground/5 backdrop-blur-xl rounded-full p-2 border border-foreground/10">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={isActive ? "navActive" : "nav"}
                  size="sm"
                  className={isActive ? "text-primary" : ""}
                >
                  {item.name}
                </Button>
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <Button variant="hero" size="lg">
          Launch App
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
