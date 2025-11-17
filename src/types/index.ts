export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'tropical' | 'succulent' | 'fern' | 'low-light';
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}
