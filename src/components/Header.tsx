import { ShoppingCart, Leaf } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '@/store';
import { Badge } from '@/components/ui/badge';

const Header = () => {
  const location = useLocation();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 transition-smooth hover:opacity-80">
          <Leaf className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-primary">GreenLeaf</span>
        </Link>
        
        <nav className="flex items-center gap-6">
          <Link
            to="/products"
            className={`text-sm font-medium transition-smooth hover:text-primary ${
              location.pathname === '/products' ? 'text-primary' : 'text-foreground'
            }`}
          >
            Shop Plants
          </Link>
          
          <Link
            to="/cart"
            className="relative transition-smooth hover:text-primary"
          >
            <ShoppingCart className="h-6 w-6" />
            {totalItems > 0 && (
              <Badge 
                variant="destructive" 
                className="absolute -right-2 -top-2 h-5 min-w-5 items-center justify-center rounded-full px-1 text-xs"
              >
                {totalItems}
              </Badge>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
