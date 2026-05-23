import { HeartIcon, ShoppingBagIcon, ShoppingCartIcon } from "@heroicons/react/24/outline"
import HeaderLink from "./header-link"

const HeaderLinks = () => {
    return (
        <div className="flex items-center gap-4">
            <HeaderLink icon={<ShoppingBagIcon className="w-6 h-6" />} link="/orders" title="Buyurtmalar" />
            <HeaderLink icon={<HeartIcon className="w-6 h-6" />} link="/favorites" title="Saralanganlar" />
            <HeaderLink icon={<ShoppingCartIcon className="w-6 h-6" />} link="/cart" title="Savatcha" />
            
        </div>
    )
}

export default HeaderLinks