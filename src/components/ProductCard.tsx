import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ShoppingCart } from 'lucide-react';
import type { Product } from '@/types';
import type { RootState } from '@/store';
import { addToCart } from '@/store/slices/cartSlice';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const isInCart = cartItems.some(item => item.id === product.id);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart!`);
    setTimeout(() => setIsAdding(false), 300);
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      tropical: 'bg-accent/20 text-accent-foreground border-accent/30',
      succulent: 'bg-secondary text-secondary-foreground',
      fern: 'bg-primary/10 text-primary border-primary/20',
      'low-light': 'bg-muted text-muted-foreground',
    };
    return colors[category as keyof typeof colors] || colors['low-light'];
  };

  return (
    <Card className="group overflow-hidden card-shadow transition-smooth hover:shadow-lg hover:-translate-y-1 animate-fade-in">
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-smooth group-hover:scale-105"
          />
        </div>
        <div className="p-4 space-y-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-lg leading-tight">{product.name}</h3>
            <Badge variant="outline" className={getCategoryColor(product.category)}>
              {product.category}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
          <p className="text-2xl font-bold text-primary">${product.price.toFixed(2)}</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={handleAddToCart}
          disabled={isInCart}
          className="w-full"
          variant={isInCart ? "secondary" : "default"}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          {isInCart ? 'In Cart' : 'Add to Cart'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
