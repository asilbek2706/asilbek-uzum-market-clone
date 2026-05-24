import type { ReactNode } from "react";
import Header from "../components/header/header";
import NavCategories from "../components/nav-categories/nav-categories";
import Footer from "../components/footer/footer";

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) =>{
    return(
        <div className="container">
            <Header />
            <NavCategories />
            {children}
            <Footer />
        </div>
    )

}

export default MainLayout