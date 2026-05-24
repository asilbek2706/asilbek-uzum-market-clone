import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import ProductCard from "../products-card/product-card";
import type { ProductItem } from "../../types/product";

interface IProps {
    product?: ProductItem[];
    title?: string;
    link?: string;
}

const CategoryProducts = ({
    product = [],
    title = "Mashhur",
    link = "/category/id",
}: IProps) => {
    return (
        <div className="products-wrapper">
            <Link to={link} className="flex items-center gap-2 text-3xl font-semibold">
                {title} <ChevronRightIcon className="w-8" />
            </Link>

            <div className="products grid grid-cols-5">
                {product.map((item) => (
                    <ProductCard
                        key={item.id}
                        product={item}
                    />
                ))}
            </div>
        </div>
    );
};

export default CategoryProducts;
