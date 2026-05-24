import AdBanner from "../components/ad-banner/ad-banner";
import CategoryProducts from "../components/category-products/category-products";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import NavCategories from "../components/nav-categories/nav-categories";
import PromoItems from "../components/promo-items/promo-items";

const HomePage = () => {
    return (
        <div className="container">
            <Header />
            <NavCategories />
            <AdBanner />
            <PromoItems />
            <CategoryProducts />
            <CategoryProducts />
            <CategoryProducts />
            <CategoryProducts />
            <CategoryProducts />
            <CategoryProducts />
            <Footer />
        </div>
    );
};

export default HomePage;
