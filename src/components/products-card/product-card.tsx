import { HeartIcon } from "@heroicons/react/24/outline";
import ProductRating from "./product-rating";
import ProductPrice from "./product-price";
import ProductButton from "./product-button";
import { Link } from "react-router-dom";

const ProductCard = () => {
    return (
        <Link to="/product/id" className="block max-w-58 w-full">
            <div className="hover:shadow-lg transition-shadow rounded-xl hover:rounded-t-none bg-white overflow-hidden">
                <div className="relative overflow-hidden w-full aspect-3/4"> 
                    <img
                        src="https://images.uzum.uz/d6nvitlsp2tohdbdqor0/t_product_540_high.jpg"
                        alt="Hello"
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 rounded-xl hover:rounded-none"
                    />
                    
                    <div className="absolute top-2 right-2 z-10">
                        <HeartIcon className="heartIcon" />
                    </div>
                </div>

                <div className="p-3">
                    <ProductPrice />
                    <ProductRating />
                    <ProductButton />
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;