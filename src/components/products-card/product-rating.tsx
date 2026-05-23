import { StarIcon } from "@heroicons/react/24/solid";

const ProductRating = () => {
    return (
        <div className="flex items-end gap-2">
            <StarIcon className="w-5 text-yellow-400 star" />{" "}
            <p className="text-sm">
                5.0{" "}
                <span className="text-gray-400 text-sm">(495 sharhlar)</span>
            </p>
        </div>
    );
};

export default ProductRating;
