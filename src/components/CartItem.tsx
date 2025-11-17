import { Plus, Minus, Trash2 } from 'lucide-react';
import { useDispatch } from 'react-redux';
import type { CartItem as CartItemType } from '@/types';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '@/store/slices/cartSlice';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';

interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseQuantity(item.id));
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      dispatch(decreaseQuantity(item.id));
    }
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
    toast.success(`${item.name} removed from cart`);
  };

  return (
    <Card className="overflow-hidden animate-scale-in">
      <CardContent className="p-4">
        <div className="flex gap-4">
          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md bg-muted">
            <img
              src={item.image}
              alt={item.name}
              className="h-full w-full object-cover"
            />
          </div>
          
          <div className="flex flex-1 flex-col justify-between">
            <div>
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-xl font-bold text-primary mt-1">
                ${item.price.toFixed(2)}
              </p>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={handleDecrease}
                  disabled={item.quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                
                <span className="w-12 text-center font-semibold">
                  {item.quantity}
                </span>
                
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={handleIncrease}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-destructive hover:text-destructive"
                onClick={handleRemove}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CartItem;
