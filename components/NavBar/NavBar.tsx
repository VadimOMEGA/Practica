'use client'

import { useState } from "react"

const NavBar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <div className='w-full pt-[1rem] flex justify-between'>
      <div className="flex gap-[1rem] items-center">
        <img className="size-[3rem]" src="/logo.svg" alt="logo" draggable={false}/>
        <p className="font-bold text-white text-[1.5rem]">Agency</p>
      </div>

      <div className="xl:flex hidden gap-[6rem] items-center text-base text-white">
        <p className="cursor-pointer">About</p>
        <p className="cursor-pointer">Services</p>
        <p className="cursor-pointer">Pricing</p>
        <p className="cursor-pointer">Blog</p>
      </div>

      <button className="max-xl:hidden px-[2rem] font-bold pt-[0.15rem] h-[3rem] grid place-content-center uppercase text-white border border-white/25 rounded-[0.375rem]">
        Contact
      </button>

      <div className="relative p-[1rem] xl:hidden grid place-content-center size-[3rem] cursor-pointer border border-white/30 rounded-[0.375rem]" onClick={() => setToggle(prev => !prev)}>
        <img src="/burger.svg" alt="burger" draggable={false} />

        {
          toggle && (
            <div className="absolute z-[100] top-[110%] p-[1rem] flex flex-col gap-[0.5rem] right-[0] border border-white/30 rounded-[0.375rem] text-white/65 w-[8rem]">
              <p className="cursor-pointer hover:text-white">About</p>
              <p className="cursor-pointer hover:text-white">Services</p>
              <p className="cursor-pointer hover:text-white">Pricing</p>
              <p className="cursor-pointer hover:text-white">Blog</p>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default NavBar