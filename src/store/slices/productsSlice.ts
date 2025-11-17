import { createSlice } from '@reduxjs/toolkit';
import type { Product } from '@/types';
import monsteraImg from '@/assets/monstera.jpg';
import snakePlantImg from '@/assets/snake-plant.jpg';
import pothosImg from '@/assets/pothos.jpg';
import succulentsImg from '@/assets/succulents.jpg';
import fernImg from '@/assets/fern.jpg';
import fiddleLeafImg from '@/assets/fiddle-leaf.jpg';

const initialProducts: Product[] = [
  {
    id: '1',
    name: 'Monstera Deliciosa',
    price: 45.99,
    image: monsteraImg,
    category: 'tropical',
    description: 'Large, split leaves create a dramatic tropical statement',
  },
  {
    id: '2',
    name: 'Snake Plant',
    price: 29.99,
    image: snakePlantImg,
    category: 'low-light',
    description: 'Nearly indestructible, perfect for beginners',
  },
  {
    id: '3',
    name: 'Golden Pothos',
    price: 24.99,
    image: pothosImg,
    category: 'low-light',
    description: 'Trailing vines with heart-shaped leaves',
  },
  {
    id: '4',
    name: 'Succulent Collection',
    price: 34.99,
    image: succulentsImg,
    category: 'succulent',
    description: 'Set of 3 low-maintenance succulents',
  },
  {
    id: '5',
    name: 'Boston Fern',
    price: 32.99,
    image: fernImg,
    category: 'fern',
    description: 'Lush, feathery fronds add elegance',
  },
  {
    id: '6',
    name: 'Fiddle Leaf Fig',
    price: 65.99,
    image: fiddleLeafImg,
    category: 'tropical',
    description: 'Statement tree with glossy, violin-shaped leaves',
  },
];

interface ProductsState {
  items: Product[];
}

const initialState: ProductsState = {
  items: initialProducts,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
