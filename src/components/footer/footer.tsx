import FooterClient from "./footer-client"
import FooterItems from "./footer-items"
import FooterMedia from "./footer-media"
import FooterTadbirkor from "./footer-tadbirkor"

const Footer = () => {
  return (
    <div className="footer grid grid-cols-4 gap-4 ">
        <FooterItems />
        <FooterClient />
        <FooterTadbirkor />
        <FooterMedia />
    </div>
  )
}

export default Footer