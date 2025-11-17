import { useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '@/store';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ProductListing = () => {
  const products = useSelector((state: RootState) => state.products.items);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { value: 'all', label: 'All Plants' },
    { value: 'tropical', label: 'Tropical' },
    { value: 'succulent', label: 'Succulents' },
    { value: 'fern', label: 'Ferns' },
    { value: 'low-light', label: 'Low Light' },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Shop Our Plants</h1>
          <p className="text-muted-foreground max-w-2xl">
            Discover our collection of beautiful, healthy houseplants perfect for any space
          </p>
        </div>

        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
          <TabsList className="grid w-full max-w-2xl grid-cols-5">
            {categories.map(category => (
              <TabsTrigger key={category.value} value={category.value}>
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No plants found in this category</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default ProductListing;
