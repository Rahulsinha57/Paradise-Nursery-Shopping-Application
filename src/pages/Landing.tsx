import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-plants.jpg';

const Landing = () => {
  return (
    <div className="min-h-screen">
      <div 
        className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
        
        <div className="container relative z-10 mx-auto px-4 py-16 text-center">
          <div className="mx-auto max-w-3xl space-y-8 animate-slide-up">
            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Welcome to <span className="text-primary">GreenLeaf</span>
            </h1>
            
            <p className="mx-auto max-w-2xl text-lg text-foreground/80 sm:text-xl leading-relaxed">
              Transform your space with our carefully curated collection of premium houseplants. 
              From low-maintenance succulents to lush tropical beauties, we bring nature's finest 
              directly to your doorstep. Each plant is hand-selected and nurtured to perfection.
            </p>
            
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link to="/products">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
