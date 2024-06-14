import OrangeButton from "../OrangeButton"

const GetInTouch = () => {
  return (
    <div className="p-[3rem] w-[29rem] bg-white rounded-[0.375rem]">
        <h3 className="text-text-dark text-[1.5rem] mb-[1.5rem] font-bold">Get In Touch</h3>
        <input type="text" placeholder="Your email" className="border mb-[1rem] outline-none pl-[1rem] border-[#F3D1BF] h-[3rem] w-full rounded-[0.375rem]"/>
        <input type="text" placeholder="Subject" className="border outline-none pl-[1rem] mb-[1rem] border-[#F3D1BF] h-[3rem] w-full rounded-[0.375rem]"/>
        <textarea placeholder="Message" className="w-full py-[0.5rem] outline-none h-[7.5rem] mb-[2rem] border pl-[1rem] border-[#F3D1BF] rounded-[0.375rem] resize-none"></textarea>

        <div className="w-full justify-end">
            <OrangeButton text="Submit Now"/>
        </div>

    </div>
  )
}

export default GetInTouch