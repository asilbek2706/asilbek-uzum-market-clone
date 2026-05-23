import { HeartIcon } from "@heroicons/react/24/outline";
import ProductRating from "./product-rating";
import ProductPrice from "./product-price";
import ProductFooter from "./product-footer";

const ProductCard = () => {
    return (
        <div className="max-w-58 w-full">
            <div>
                <img
                    src="https://images.uzum.uz/d6nvitlsp2tohdbdqor0/t_product_540_high.jpg"
                    alt="Hello"
                    className="rounded-md"
                />
                <div className="iconWrapper">
                    <HeartIcon className="heartIcon" />
                </div>
            </div>
            
            <ProductPrice />
            <ProductRating />
            <ProductFooter />
        </div>
    );
};

export default ProductCard;
