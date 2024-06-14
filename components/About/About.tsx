import Image from "next/image"

import aboutImage from '@/public/about-image.png'
import SectionTitle from "../SectionTitle"
import ShadowButton from "../ShadowButton"

const About = () => {
  return (
    <div className="mt-[6.25rem]">
      <div className="flex lg:gap-[5%] gap-[2rem] lg:flex-row flex-col">
        <div className="w-full lg:h-[37.5rem] h-[27rem] relative">
            <Image 
              src={aboutImage}
              alt="about"
              draggable={false}
              className="w-full"
              fill
              objectFit="contain"
              objectPosition="center"
            />
          </div>
        <div className="w-full">
          <SectionTitle 
            sectionName="About"
            title="An Experience Design Agency"
            titleSize="3.5rem"
            subtitle="Provides a full service range"
            text="Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team."
          />
          <div className="mt-[2rem]">
            <ShadowButton text="About us"/>
          </div>
        </div>
      </div>

      <div className="mt-[10rem] grid lg:grid-cols-3 grid-cols-1">
        <div className="border rounded-l-[0.375rem] border-[#F3D1BF] flex justify-center flex-col p-[3rem]">
          <h2 className="text-[3rem] text-text-dark font-black">40%</h2>
          <p className="text-text-dark text-[1.25rem]">Years of experience</p>
        </div>
        <div className="border border-[#F3D1BF] flex justify-center flex-col p-[3rem]">
          <h2 className="text-[3rem] text-text-dark font-black">73+</h2>
          <p className="text-text-dark text-[1.25rem]">Agency members</p>
        </div>
        <div className="border rounded-r-[0.375rem] border-[#F3D1BF] flex justify-center flex-col p-[3rem]">
          <h2 className="text-[3rem] text-text-dark font-black">5.000</h2>
          <p className="text-text-dark text-[1.25rem]">Projects complete</p>
        </div>
      </div>
    </div>
  )
}

export default About