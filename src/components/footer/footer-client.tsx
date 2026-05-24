import { Link } from "react-router-dom";

const FooterClient = () => {
    return (
        <div className="leading-7">
            <div className="text-[12px] font-semibold">Foydalanuvchilarga</div>
            <div className="flex flex-col text-[11px] text-gray-500 leading-5">
                <Link to={"/about-footer"}>Biz bilan bog'laning</Link>
                <Link to={"/about-footer"}>Savol-javob</Link>
            </div>
        </div>
    );
};

export default FooterClient;
