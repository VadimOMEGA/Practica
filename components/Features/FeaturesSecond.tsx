
import SectionTitle from "../SectionTitle"

const FeaturesSecond = () => {
  return (
    <div className="flex lg:gap-[5%] gap-[2rem] lg:flex-row flex-col mt-[8rem] items-center">
        <div className="w-full">
          <SectionTitle 
            sectionName="Features"
            title={null}
            titleSize="3rem"
            subtitle="Long run, and work as an extension of the merchant's team."
            text={null}
          />

            <p className="mt-[1.5rem] text-base text-text-dark cursor-pointer">Read More</p>
        </div>
        <div className="w-full flex lg:items-end lg:flex-row flex-col">
            <div className="h-[21rem] p-[3rem] bg-white border border-[#F3D1BF] rounded-l-[0.375rem] rounded-tr-[0.375rem] flex flex-col justify-between">
                <img src="/pro.svg" alt="pro" draggable={false} className="size-[5rem]" />
                <div>
                    <h4 className="text-text-dark text-[1.5rem] font-bold mb-[1rem]">Professional</h4>
                    <p className="text-base text-text-dark/65">Full service range including technical skills, design.</p>
                </div>
            </div>
            <div className="h-[17rem] p-[3rem] flex items-end border border-[#F3D1BF] rounded-r-[0.375rem]">
                <div>
                    <h4 className="text-text-dark text-[1.5rem] font-bold mb-[1rem]">Accessibility</h4>
                    <p className="text-base text-text-dark/65">Business understanding, ability to put themselves.</p>
                </div>
            </div>
        </div>
      </div>
  )
}

export default FeaturesSecond