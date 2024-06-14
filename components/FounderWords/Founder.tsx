import Image from "next/image"

import founder from '@/public/founder.png'

const Founder = () => {
  return (
    <div className="flex lg:gap-[5%] gap-[2rem] lg:flex-row flex-col lg:mt-[13rem] mt-[7rem] items-center lg:pb-[11rem]">
        <div className="w-full h-[36.5rem] relative">
            <Image 
              src={founder}
              alt="about"
              draggable={false}
              className="w-full"
              fill
              objectFit="contain"
              objectPosition="left"
            />
          </div>
        <div className="w-full relative h-[20rem]">

            <img src="/quotes.svg" alt="quotes" draggable={false} className="h-[5rem] absolute top-[0%] right-[30%] z-[1]" />
            <div className="absolute inset-0 z-[2]">
              <h3 className="tracking-widest mb-[1.5rem] text-base text-text-dark-accent uppercase">Founder words</h3>
              <h1 className='text-white lg:text-[3.5rem] text-[2rem] font-black mb-[2rem] leading-none'>Digital agency is a business you hire to outsource your digital marketing efforts</h1>
              <p className="text-white text-[1.25rem]">Ren Delan</p>
              <p className="text-[0.875rem] text-white/65">Founder</p>
            </div>
        </div>
      </div>
  )
}

export default Founder