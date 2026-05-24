import { Link } from 'react-router-dom'

const FooterMediaItems = () => {
  return (
    <div>
            <div className="text-[12px] font-semibold ">
                Ilovani yuklab olish
            </div>
            
            <div className="flex gap-3 star" >
                <Link to={'/app'} className="flex items-center gap-1.5">
                    <img 
                        src="/icons/appleIcon.svg" 
                        alt="Apple App Store" 
                    />
                    <b className="text-[12px] font-medium tracking-tight">AppStore</b> {/* Yozuv kichraytirildi */}
                </Link>

                {/* Google Play linki */}
                <Link to={'/app'} className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
                    <img 
                        src="/icons/google-playIcon.svg" 
                        alt="Google Play" 
                    />
                    <b className="text-[12px] font-medium tracking-tight">Google Play</b>
                </Link>
            </div>
        </div>
  )
}

export default FooterMediaItems