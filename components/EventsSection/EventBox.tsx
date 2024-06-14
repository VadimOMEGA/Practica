import React from 'react'

interface EventBoxProps{
    date: string;
    month: string;
    year: number;
    hours: string;
    title: string;
    description: string
}

const EventBox:React.FC<EventBoxProps> = ({ date, month, year, hours, title, description }) => {
  return (
    <div className='border sm:w-[23rem] w-full border-[#3A3C56] rounded-[0.375rem] p-[2.5rem]'>
        <div className='flex gap-[0.75rem] items-start mb-[1.5rem]'>
            <p className='font-black text-white text-[4.5rem] leading-[110%]'>{date}</p>
            <div>
                <p className='font-bold text-white text-[1.5rem]'>{month}</p>
                <p className='font-bold text-white text-[1.5rem]'>{year}</p>
            </div>
        </div>

        <div className='flex gap-[0.5rem] items-center mb-[2rem]'>
            <img src="/clock.svg" alt="clock" draggable={false} className='size-[1rem]'/>
            <p className='text-[1rem] text-white'>{hours}</p>
        </div>

        <div className='w-full h-[1px] bg-[#3A3C56] mb-[2.5rem]'/>

        <h4 className='text-white text-[1.5rem] font-bold mb-[1rem]'>{title}</h4>
        <p className='text-[1rem] text-white/65 mb-[1.5rem]'>{description}</p>
        <p className='text-base text-white cursor-pointer'>Explore Now</p>
    </div>
  )
}

export default EventBox