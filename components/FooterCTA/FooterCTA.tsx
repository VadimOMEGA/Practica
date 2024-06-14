import ShadowButton from "../ShadowButton"
import Image from "next/image"

import ftCTA from '@/public/ft-cta.png'

const FooterCTA = () => {
  return (
    <div className="mt-[7.125rem] flex lg:gap-[5%] gap-[2rem] lg:flex-row flex-col items-center py-[4rem]">
        <div className="w-full">
            <h3 className="text-base tracking-widest text-text-light-accent uppercase mb-[1.5rem]">Modren Studio</h3>
            <h1 className="text-white text-7xl font-bold mb-[1.5rem]">
              We're Help <br />
              To Build Your <br />
              Dream Project
            </h1>
            <p className="text-white/60 text-base mb-[2rem]">Agency provides a full service range including technical skills, design, business understanding.</p>

            <div className="flex">
              <ShadowButton text="contact us"/>
            </div>
        </div>

        <div className="w-full lg:h-[37.5rem] h-[27rem] relative">
          <Image 
            src={ftCTA}
            alt="footerCTA"
            draggable={false}
            className="w-full"
            fill
            objectFit="contain"
            objectPosition="center"
          />
        </div>
      </div>
  )
}

export default FooterCTA