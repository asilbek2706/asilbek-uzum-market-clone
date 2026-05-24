import AdBanner from "../components/ad-banner/ad-banner";
import CategoryProducts from "../components/category-products/category-products";
import PromoItems from "../components/promo-items/promo-items";

const HomePage = () => {
    return (
        <div className="">
            <AdBanner />
            <PromoItems />
            <CategoryProducts />
            <CategoryProducts />
            <CategoryProducts />
            <CategoryProducts />
            <CategoryProducts />
            <CategoryProducts />
        </div>
    );
};

export default HomePage;
