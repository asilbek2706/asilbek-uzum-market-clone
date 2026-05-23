import SearchInput from "../search-input"
import HeaderLinks from "./header-links"

const Header = () => {
    return (
        <header className="flex items-center justify-between container">
            <img src="/icons/logo.svg" alt="Logo" />
            <SearchInput />
            <HeaderLinks />
        </header>
    )
}

export default Header