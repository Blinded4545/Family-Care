// types.ts
export interface Product {
  name: string;
  image: string;
}

export interface ProductCategory {
  category: string;
  products: Product[];
}
