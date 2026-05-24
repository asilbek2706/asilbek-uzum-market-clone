import { Link } from "react-router-dom";

const FooterTadbirkor = () => {
    return (
        <div className="leading-7">
            <div className="text-[12px] font-semibold">Tadbirkorlarga</div>
            <div className="flex flex-col text-[11px] text-gray-500 leading-5">
                <Link to={"/about-footer"}>Uzumda soting</Link>
                <Link to={"/about-footer"}>Sotuvchi kabinetga kirish</Link>
                <Link to={"/about-footer"}>Topshirish punktini ochish</Link>
            </div>
        </div>
    );
};

export default FooterTadbirkor;
