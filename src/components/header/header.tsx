import { Link } from "react-router-dom"
import SearchInput from "../search-input"
import HeaderLinks from "./header-links"

const Header = () => {
    return (
        <header className="flex items-center justify-between padding-header">
            <Link to={"/"} >
                <img src="/icons/logo.svg" alt="Logo" />
            </Link>
            <SearchInput />
            <HeaderLinks />
        </header>
    )
}

export default Header