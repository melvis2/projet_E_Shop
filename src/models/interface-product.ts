export interface Product {
    productID: number;
    name: string;
    description: string;
    price: number;
    stockAvailable: number;
    categoryID: number;
    manufacturer: string;
    weight: number;
    color: string;
    size: string;
    image: string[];
    category?: Category;
  }
  
  export interface Category {
    categoryID: number;
    name: string;
    description: string;
    parentCategoryID?: number; 
    subCategories?: Category[]; 
  }