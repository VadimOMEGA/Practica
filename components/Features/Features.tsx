import Image from "next/image"

import SectionTitle from "../SectionTitle"

import featuresImage from '@/public/features.png'

const Features = () => {
  return (
    <div className="flex lg:gap-[5%] gap-[2rem] lg:flex-row flex-col mt-[8rem] items-center">
        <div className="w-full">
          <SectionTitle 
            sectionName="Features"
            title="Give Your Site A New Look"
            titleSize="3rem"
            subtitle="Service range including technical skills, design, business understanding."
            text={null}
          />

          <div className="mt-[1.5rem] grid grid-cols-[1fr,6fr] grid-rows-3 gap-[1rem] items-center w-[19rem]">
            <img src="/check.svg" alt="check" draggable={false} />
            <p className="text-base text-text-dark/65">Range including technical skills</p>
            <img src="/check.svg" alt="check" draggable={false} />
            <p className="text-base text-text-dark/65">Business understanding</p>
            <img src="/check.svg" alt="check" draggable={false} />
            <p className="text-base text-text-dark/65">Partner on the long run</p>
          </div>
        </div>
        <div className="w-full lg:h-[37.5rem] h-[27rem] relative">
            <Image 
              src={featuresImage}
              alt="about"
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

export default Features