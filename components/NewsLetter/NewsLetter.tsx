import ShadowButton from "../ShadowButton"



const NewsLetter = () => {
  return (
    <div className="mt-[3.75rem] md:flex-row flex-col flex justify-between ">
        <h1 className="text-text-dark text-[2.5rem] font-black">Newsletter</h1>

        <div className="flex sm:flex-row flex-col gap-[2rem] max-md:mt-[2rem]">
            <input type="text" placeholder="Your email" className="border outline-none pl-[1rem] border-[#F3D1BF] h-[3rem] sm:w-[23rem] w-full rounded-[0.375rem]"/>
            <ShadowButton text="Subscribe"/>
        </div>
    </div>
  )
}

export default NewsLetter