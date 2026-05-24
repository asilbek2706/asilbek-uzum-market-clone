import { Link } from "react-router-dom";

const FooterAbout = () => {
    return (
        <div className="leading-7">
            <div className="text-[12px] font-semibold">Biz haqimizda</div>
            <div className="flex flex-col text-[11px] text-gray-500 leading-5">
                <Link to={"/about-footer"}>Topshirish punktlari</Link>
                <Link to={"/about-footer"}>Vakansiyalar</Link>
            </div>
        </div>
    );
};

export default FooterAbout;
