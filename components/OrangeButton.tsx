import React from 'react'

interface ButtonProps{
    text: string;
}

const OrangeButton:React.FC<ButtonProps> = ({ text }) => {
  return (
    <div className='h-[3rem] bg-[#EF6D58] w-fit pt-[0.15rem] cursor-pointer uppercase grid place-content-center text-white font-bold text-base rounded-[0.375rem] px-[2rem]'>
        <span>{text}</span>
    </div>
  )
}

export default OrangeButton