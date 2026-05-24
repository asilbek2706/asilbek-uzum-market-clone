import { HeartIcon } from "@heroicons/react/24/outline";
import ProductRating from "./product-rating";
import ProductPrice from "./product-price";
import ProductButton from "./product-button";
import { Link } from "react-router-dom";
import type { ProductItem } from "../../types/product";

interface IProps {
    product: ProductItem;
}

const resolveFirstImage = (images: ProductItem["images"]) => {
    const fallback = "https://via.placeholder.com/400x500?text=No+Image";

    if (!Array.isArray(images) || images.length === 0) {
        return fallback;
    }

    const first = images[0] as unknown;

    if (typeof first === "string") {
        const trimmed = first.trim();

        if (trimmed.startsWith("[")) {
            try {
                const parsed = JSON.parse(trimmed);
                if (Array.isArray(parsed) && typeof parsed[0] === "string") {
                    return parsed[0];
                }
            } catch {
                return fallback;
            }
        }

        return trimmed || fallback;
    }

    if (first && typeof first === "object" && "url" in first) {
        const url = (first as { url?: string }).url;
        return typeof url === "string" && url.trim() ? url : fallback;
    }

    return fallback;
};

const ProductCard = ({ product }: IProps) => {
    const image = resolveFirstImage(product.images);

    return (
        <Link to={`/product/${product.id}`} className="block max-w-58 w-full">
            <div className="hover:shadow-lg transition-shadow rounded-xl hover:rounded-t-none bg-white overflow-hidden">
                <div className="relative overflow-hidden w-full aspect-3/4">
                    <img
                        src={image}
                        alt={product.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 rounded-xl hover:rounded-none"
                    />

                    <div className="absolute top-2 right-2 z-10">
                        <HeartIcon className="heartIcon" />
                    </div>
                </div>

                <div className="p-3">
                    <ProductPrice price={product.price} />
                    <ProductRating />
                    <p className="text-xs text-gray-500 mt-1">{product.category?.name ?? "Category"}</p>
                    <p className="text-sm text mt-1 line-clamp-2">{product.description ?? "No description"}</p>
                    <ProductButton />
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
