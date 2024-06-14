import Image from "next/image"

import serviceImage from '@/public/service-image.png'

import SectionTitle from "../SectionTitle"
import ShadowButton from "../ShadowButton"

const Services = () => {
  return (
    <div className="flex lg:gap-[5%] gap-[2rem] lg:flex-row flex-col lg:mt-[13rem] mt-[7rem]">
        <div className="w-full lg:h-[37.5rem] h-[27rem] relative">
            <Image 
              src={serviceImage}
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
            sectionName="Service"
            title="Making Complex Digital Products"
            titleSize="3.5rem"
            subtitle="Agency provides a full service range including technical skills, design, business."
            text={null}
          />

          <div className="flex gap-[1rem] mt-[2rem]">
            <img src="/bitmap2.svg" alt="btmp" className="size-[4rem]" draggable={false} />
            <div>
                <p className="text-base text-text-dark/65 mb-[0.75rem]">"Understanding, ability to put themselves in the merchant's shoes. It is meant to partner."</p>
                <p className="text-base text-text-dark">Jenny Murtaugh</p>
            </div>
          </div>

          <div className="mt-[2rem]">
            <ShadowButton text="Explore"/>
          </div>
        </div>
      </div>

  )
}

export default Services