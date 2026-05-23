import { Link } from "react-router-dom";

const ProductFooter = () => {
    return (
        <Link to="/product/id" className="text-sm font-semibold text-white">
            <div className="flex items-center justify-center bg-blue-900 button-padding rounded-md hover:bg-blue-800 transition-colors">
                <img src="/icons/addBag.svg" alt="addBag" className="w-5 h-5" />
            </div>
        </Link>
    );
};

export default ProductFooter;
