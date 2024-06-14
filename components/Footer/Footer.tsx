import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='flex justify-between md:flex-row flex-col max-md:gap-[2rem] max-md:items-center'>
            <h3 className='text-[1.5rem] text-text-dark font-bold'>Agency</h3>
            <div className='max-md:text-center'>
                <h3 className="mb-[1rem] tracking-widest text-base text-text-dark-accent uppercase">MENU</h3>
                <p className='text-text-dark font-base mb-[0.5rem] cursor-pointer'>About</p>
                <p className='text-text-dark font-base mb-[0.5rem] cursor-pointer'>Services</p>
                <p className='text-text-dark font-base mb-[0.5rem] cursor-pointer'>Blog</p>
                <p className='text-text-dark font-base mb-[0.5rem] cursor-pointer'>Contact</p>
            </div>

            <div className='max-md:text-center'>
                <h3 className="mb-[1rem] tracking-widest text-base text-text-dark-accent uppercase">Service</h3>
                <p className='text-text-dark font-base mb-[0.5rem] cursor-pointer'>Design</p>
                <p className='text-text-dark font-base mb-[0.5rem] cursor-pointer'>Development</p>
                <p className='text-text-dark font-base mb-[0.5rem] cursor-pointer'>Marketing</p>
                <p className='text-text-dark font-base mb-[0.5rem] cursor-pointer'>See More</p>
            </div>

            <div className='flex gap-[0.5rem]'>
                <img src="/facebook.svg" alt="fb" draggable={false} className='size-[3rem] cursor-pointer' />
                <img src="/twitter.svg" alt="tw" draggable={false} className='size-[3rem] cursor-pointer' />
                <img src="/instagram.svg" alt="inst" draggable={false} className='size-[3rem] cursor-pointer' />
            </div>
        </div>

        <div className='w-full h-[1px] bg-[#F3D1BF] mt-[4rem]'/>

        <div className='flex md:flex-row flex-col max-md:gap-[2rem] justify-between items-center mt-[2.5rem] mb-[1rem]'>
            <p className='text-base text-text-dark/65'>Copyright © 2022 Laaqiq. All Rights Reserved.</p>
            <div className='flex md:gap-[4rem] justify-between max-md:w-full items-center'>
                <p className='text-base text-text-dark font-[600] cursor-pointer'>Terms of Use</p>
                <p className='text-base text-text-dark font-[600] cursor-pointer'>Privacy Policy</p>
            </div>
        </div>
    </div>
  )
}

export default Footer