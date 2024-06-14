import React from 'react'
import EventBox from './EventBox'

const Events = () => {
  return (
    <div className='mt-[8.75rem]'>
        <h3 className="tracking-widest mb-[1.5rem] text-center text-base text-text-dark-accent uppercase">Events</h3>
        <h1 className='text-white lg:text-[3.5rem] text-[2.5rem] font-black text-center mb-[2rem]'>Explore Future Conferences</h1>

        <div className='mt-[4rem] lg:flex-row flex-col max-lg:gap-[2rem] items-center flex justify-between mb-[4rem]'>
            <EventBox date='3' month='November' year={2021} hours='9:00 am - 3:00 pm' title='Design Weeks' description='Digital agency is a business you hire to outsource your digital.'/>
            <EventBox date='15' month='November' year={2021} hours='1:00 pm - 8:00 pm' title='Interior Design' description='Marketing efforts, instead of handling in-house.'/>
            <EventBox date='2' month='December' year={2021} hours='10:00 am - 2:00 pm' title='The F design events' description='Provide your business with a variety of digital solutions to promote.'/>
        </div>

        <div className='w-full flex justify-center'>
          <button className="lg:mt-[4rem] px-[2rem] font-bold pt-[0.15rem] h-[3rem] grid place-content-center uppercase text-white border border-white/25 rounded-[0.375rem]">
            Explore More
          </button>
        </div>
    </div>
  )
}

export default Events