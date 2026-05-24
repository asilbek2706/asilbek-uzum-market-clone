export interface ProductCategory {
    id: number;
    name: string;
    slug: string;
    image: string;
    creationAt: string;
    updatedAt: string;
}

export interface ProductItem {
    id: number;
    title: string;
    slug: string;
    price: number;
    description: string;
    category: ProductCategory;
    images: string[];
    creationAt: string;
    updatedAt: string;
}
