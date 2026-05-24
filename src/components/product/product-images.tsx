import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import fetcher from "../../api/axios";

const PLACEHOLDER_IMAGE = "https://placehold.co/600x600?text=No+Image";

interface SwaggerProduct {
    id: number;
    title: string;
    images: string[];
}

const normalizeImage = (value: unknown): string => {
    if (typeof value === "string") {
        let trimmed = value.trim();

        if (trimmed.startsWith("[") || trimmed.startsWith('"')) {
            try {
                trimmed = trimmed.replace(/^['"[]+|['"\]]+$/g, "");
                return trimmed;
            } catch {
                return PLACEHOLDER_IMAGE;
            }
        }
        return trimmed;
    }
    return PLACEHOLDER_IMAGE;
};

const ProductImages = () => {
    const { id } = useParams<{ id: string }>();
    const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
    const [images, setImages] = useState<string[]>([PLACEHOLDER_IMAGE]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchImages = async () => {
            setLoading(true);
            try {
                const productId = Number(id ?? 5);
                const { data } = await fetcher<SwaggerProduct>(`/products/${productId}`);

                if (data && Array.isArray(data.images) && data.images.length > 0) {
                    const apiImages = data.images.map(normalizeImage).filter(Boolean);

                    setImages(apiImages.length > 0 ? apiImages : [PLACEHOLDER_IMAGE]);
                } else {
                    setImages([PLACEHOLDER_IMAGE]);
                }
                setSelectedImageIndex(0);
            } catch (error) {
                console.error("Rasmlarni yuklashda xatolik:", error);
                setImages([PLACEHOLDER_IMAGE]);
                setSelectedImageIndex(0);
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, [id]);

    const selectedImage = images[selectedImageIndex] ?? PLACEHOLDER_IMAGE;

    if (loading) {
        return <div className="text-center py-10">Rasmlar yuklanmoqda...</div>;
    }

    return (
        <div className="grid grid-cols-6 gap-4 p-4 max-w-4xl mx-auto">
            <div className="col-span-1 flex flex-col gap-2 max-h-125 overflow-y-auto">
                {images.map((image, index) => {
                    const isActive = index === selectedImageIndex;
                    return (
                        <img
                            key={index}
                            src={image}
                            alt={`Product thumbnail ${index + 1}`}
                            referrerPolicy="no-referrer"
                            className={twMerge(
                                "w-full aspect-square object-cover cursor-pointer border-2 border-transparent rounded-md transition-all",
                                isActive ? "border-blue-600 scale-95" : "hover:border-gray-300"
                            )}
                            onClick={() => setSelectedImageIndex(index)}
                        />
                    );
                })}
            </div>
            
            {/* O'ng tomondagi asosiy katta rasm */}
            <div className="col-span-5 flex justify-center items-center bg-gray-50 rounded-lg overflow-hidden border">
                            <img
                                src={selectedImage}
                                alt="Selected Product"
                                referrerPolicy="no-referrer"
                                className="w-full max-h-125 object-contain transition-fade duration-300"
                />
            </div>
        </div>
    );
};

export default ProductImages;