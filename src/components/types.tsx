// types.ts
export interface Product {
  name: string;
  image: string;
  description: string;
}

export interface ProductCategory {
  category: string;
  products: Product[];
}

export interface Testimonio {
  nombre: string,
  ciudad: string,
  texto: string,
  imagen: string
}