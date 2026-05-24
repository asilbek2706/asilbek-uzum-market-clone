import { Link } from "react-router-dom";

const FooterSocials = () => {
    return (
        <div>
            <div className="text-[12px] font-semibold footer-socials">
                Uzum ijtimoiy tarmoqlarda
            </div>

            <div className="flex gap-3 star">
                <Link to={"/app"} className="flex items-center gap-1.5">
                    <img src="/icons/instagram.svg" alt="Instagram" />
                </Link>
                <Link to={"/app"} className="flex items-center gap-1.5">
                    <img src="/icons/telegram.svg" alt="Telegram" />
                </Link>
                <Link to={"/app"} className="flex items-center gap-1.5">
                    <img src="/icons/facebook.svg" alt="Facebook" />
                </Link>
                <Link to={"/app"} className="flex items-center gap-1.5">
                    <img src="/icons/youtube.svg" alt="YouTube" />
                </Link>
            </div>
        </div>
    );
};

export default FooterSocials;
