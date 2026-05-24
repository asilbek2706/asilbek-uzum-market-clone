import { Link } from "react-router-dom";
import Button from "../button";

const ProductButtons = () => {
    return (
        <div className="flex items-center gap-2">
            <Button className="cursor-pointer">Navbatga qo'shish</Button>

            <Link to="/">
                <Button className="cursor-pointer">Do'konga o'tish</Button>
            </Link>
        </div>
    );
};

export default ProductButtons;
