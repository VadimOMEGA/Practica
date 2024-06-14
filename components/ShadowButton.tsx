interface BtnProps{
    text: string;
}

const ShadowButton:React.FC<BtnProps> = ({ text }) => {
  return (
    <div className="uppercase text-text-dark bg-white grid place-content-center pt-[0.15rem] text-base rounded-[0.375rem] cursor-pointer shadow-md h-[3rem] w-fit px-[2rem] font-bold">
        { text }
    </div>
  )
}

export default ShadowButton