import type { ReactNode } from "react"
import { Link } from "react-router-dom"

interface IProps {
    icon: ReactNode;
    title: string;
    link: string;
}

const HeaderLink = ({ icon, title, link }: IProps) => {
    return (
        <Link to={link} className="flex items-center gap-2">
            {icon} {title}
        </Link>
    )
}

export default HeaderLink