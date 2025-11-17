import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import type { RootState } from '@/store';
import Header from '@/components/Header';
import CartItem from '@/components/CartItem';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';

const ShoppingCart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleCheckout = () => {
    toast.info('Checkout feature coming soon!');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Shopping Cart</h1>
          <p className="text-muted-foreground">
            {totalItems === 0 ? 'Your cart is empty' : `${totalItems} ${totalItems === 1 ? 'item' : 'items'} in your cart`}
          </p>
        </div>

        {cartItems.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent className="space-y-4">
              <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground" />
              <h2 className="text-2xl font-semibold">Your cart is empty</h2>
              <p className="text-muted-foreground">
                Start adding some beautiful plants to your collection!
              </p>
              <Button asChild className="mt-4">
                <Link to="/products">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Continue Shopping
                </Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="space-y-4 lg:col-span-2">
              {cartItems.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
              
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <Link to="/products">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Continue Shopping
                </Link>
              </Button>
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-24 card-shadow">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Total Items</span>
                      <span className="font-semibold">{totalItems}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-semibold">${totalCost.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-primary">${totalCost.toFixed(2)}</span>
                  </div>
                  
                  <Button 
                    onClick={handleCheckout}
                    className="w-full" 
                    size="lg"
                  >
                    Checkout (Coming Soon)
                  </Button>
                  
                  <p className="text-xs text-center text-muted-foreground">
                    Secure checkout • Free shipping on orders over $50
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ShoppingCart;
