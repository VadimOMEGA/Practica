import NavBar from "../NavBar/NavBar"
import Image from "next/image"

import headerImage from '@/public/header-image.png'
import OrangeButton from "../OrangeButton"

const Header = () => {
  return (
    <div className="pb-[3.5rem] w-full bg-dark-blue xl:px-[8.5rem] px-[1.5rem] max-xl:justify-center">
      <NavBar />
      <div className="lg:mt-[7.125rem] mt-[1rem] flex lg:gap-[5%] gap-[2rem] lg:flex-row flex-col-reverse">
        <div className="w-full">
            <h3 className="text-base tracking-widest text-text-light-accent uppercase mb-[1.5rem]">Modren Studio</h3>
            <h1 className="text-white lg:text-7xl text-6xl font-bold mb-[1.5rem]">
              We're Help <br />
              To Build Your <br />
              Dream Project
            </h1>
            <p className="text-white/60 text-base mb-[2rem]">Agency provides a full service range including technical skills, design, business understanding.</p>

            <div className="flex">
              <OrangeButton text="HOW WE WORK"/>
              <div className="h-[3rem] px-[2rem] text-white grid place-content-center pt-[0.15rem] cursor-pointer">
                Contact Us
              </div>
            </div>
        </div>

        <div className="w-full lg:h-[37.5rem] h-[27rem] relative">
          <Image 
            src={headerImage}
            alt="head"
            draggable={false}
            className="w-full"
            fill
            objectFit="contain"
            objectPosition="center"
          />
        </div>
      </div>

      <div className="flex gap-[1rem] items-center mt-[2.5rem]">
        <img src="/bitmap.svg"  alt="bimp" draggable={false} className="size-[3rem]" />
        <div className="h-full text-base">
          <p className="text-white/60 text-[1rem]">"Put themselves in the merchant's shoes"</p>
          <p className="text-white text-[1rem]">Meta Inc.</p>
        </div>
      </div>
    </div>
  )
}

export default Header