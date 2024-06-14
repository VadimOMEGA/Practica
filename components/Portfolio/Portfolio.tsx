'use client'

import { useState } from 'react'
import PortfolioTabs from './PortfolioTabs'
import Projects from './Projects'

const Portfolio = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <div className='pt-[6rem]'>
        <h3 className="tracking-widest mb-[1.5rem] text-center text-base text-text-dark-accent uppercase">Portfolio</h3>
        <h1 className='text-white lg:text-[3.5rem] text-[2.5rem] font-black text-center mb-[2rem]'>Latest Work</h1>


        <div className='w-full sm:hidden flex items-center justify-between px-[1rem] h-[3rem] relative bg-white rounded-[0.375rem]' onClick={() => setToggle(prev => !prev)}>
          <p className='text-base text-textdark mt-[0.15rem]'>Show All</p>
          <img src="/triangle.svg" alt="tr" draggable={false} className='' />

          {
            toggle && (
              <div className="absolute z-[100] top-[110%] p-[1rem] flex flex-col gap-[0.5rem] right-[0] border border-white/30 rounded-[0.375rem] text-white/65 w-full backdrop-blur-[0.5rem]">
                <p className="cursor-pointer hover:text-white">Show All</p>
                <p className="cursor-pointer hover:text-white">Design</p>
                <p className="cursor-pointer hover:text-white">Branding</p>
                <p className="cursor-pointer hover:text-white">Illustration</p>
                <p className="cursor-pointer hover:text-white">Motion</p>
              </div>
            )
          }
        </div>
        <PortfolioTabs />
        <Projects />

        <div className='w-full flex justify-center'>
          <button className="mt-[4rem] px-[2rem] font-bold pt-[0.15rem] h-[3rem] grid place-content-center uppercase text-white border border-white/25 rounded-[0.375rem]">
            Explore More
          </button>
        </div>
    </div>
  )
}

export default Portfolio