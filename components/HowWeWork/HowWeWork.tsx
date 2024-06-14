import SectionTitle from "../SectionTitle"

const HowWeWork = () => {
  return (
    <div className="flex lg:gap-[20%] gap-[2rem] lg:flex-row flex-col mt-[8.5rem] pb-[8rem] border-b border-[#F3D1BF]">
        <div className="w-full">
          <SectionTitle 
            sectionName="How we work"
            title="Making Your Projects Look Awesome"
            titleSize="2.5rem"
            subtitle={ null }
            text="Technical skills, design, business understanding, ability to put themselves in the merchant's shoes."
          />

          <p className="mt-[1.5rem] text-base text-text-dark cursor-pointer">Read More</p>
        </div>
        <div className="w-full grid grid-cols-[1fr,5fr] grid-rows-3 items-center">
            <p className="text-text-dark text-[4.5rem] font-black">1</p>
            <p className="text-text-dark font-bold text-[1.5rem]">Full service range including</p>
            <p className="text-text-dark text-[4.5rem] font-black">2</p>
            <p className="text-text-dark font-bold text-[1.5rem]">Technical skills, design, business</p>
            <p className="text-text-dark text-[4.5rem] font-black">3</p>
            <p className="text-text-dark font-bold text-[1.5rem]">Themselves in the merchant's</p>
        </div>
      </div>
  )
}

export default HowWeWork