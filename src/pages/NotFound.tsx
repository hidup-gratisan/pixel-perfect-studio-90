import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home as HomeIcon } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background grid-background">
      <div className="text-center space-y-6 animate-fade-in">
        <h1 className="mb-4 text-9xl font-bold text-primary">404</h1>
        <p className="mb-4 text-2xl font-semibold">Oops! Page not found</p>
        <p className="text-muted-foreground mb-8">The page you're looking for doesn't exist.</p>
        <Button variant="hero" size="lg" asChild>
          <a href="/" className="inline-flex items-center gap-2">
            <HomeIcon className="w-4 h-4" />
            Return to Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
