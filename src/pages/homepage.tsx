import { useAsync } from "react-use";
import AdBanner from "../components/ad-banner/ad-banner";
import CategoryProducts from "../components/category-products/category-products";
import PromoItems from "../components/promo-items/promo-items";
import fetcher from "../api/axios";
import type { ProductItem } from "../types/product";
import { fallbackProducts } from "../data/fallback-products";

const HomePage = () => {
    const { value: popularProducts, loading: isLoading } = useAsync(async (): Promise<ProductItem[]> => {
        try {
            const { data } = await fetcher("/products?limit=10&offset=10");

            if (Array.isArray(data) && data.length > 0) {
                return data;
            }

            return fallbackProducts;
        } catch {
            return fallbackProducts;
        }
    }, []);

    return (
        <div>
            <AdBanner />
            <PromoItems />
            <CategoryProducts
                product={isLoading ? fallbackProducts : (popularProducts ?? fallbackProducts)}
                title="Mashhur mahsulotlar"
                link="/category/id"
            />
        </div>
    );
};

export default HomePage;
