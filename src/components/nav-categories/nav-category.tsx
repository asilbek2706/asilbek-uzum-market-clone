import { Link } from "react-router-dom";

const NavCategory = () => {
    return (
        <Link
            to={"/categories/id"}
            className="nav-category cursor-pointer text-gray-500"
        >
            Elektronika
        </Link>
    );
};

export default NavCategory;
