import { useState } from "react";
import { twMerge } from "tailwind-merge";

const Images: string[] = [
    "https://placehold.co/600x600",
    "https://placehold.co/600x600",
    "https://placehold.co/600x600",
];

const ProductImages = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
    return (
        <div className="grid grid-cols-6 gap-2">
            <div className="col-span-1 flex flex-col gap-2">
                {Images.map((image, index) => {
                    const isActive = index === selectedImageIndex;
                    return (
                        <img
                        key={index}
                        src={image}
                        alt={`Product Title`}
                        className={twMerge('cursor-pointer border border-transparent', isActive && 'border-gray-600')}
                        onClick={setSelectedImageIndex.bind(null, index)}
                    />
                    )
                })}
            </div>
            <img src={Images[selectedImageIndex]} alt="Selected Image" className="grow col-span-5" />
        </div>
    );
};

export default ProductImages;
