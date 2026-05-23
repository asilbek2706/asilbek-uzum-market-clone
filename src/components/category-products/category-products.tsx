import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import ProductCard from "../products-card/product-card";

const CategoryProducts = () => {
    return (
        <div className="products-wrapper">
            <Link to="/category/id" className="flex items-center gap-2 text-3xl font-semibold">
                Mashhur <ChevronRightIcon className="w-8" />
            </Link>

            <div className="products grid grid-cols-5">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    );
};

export default CategoryProducts;
