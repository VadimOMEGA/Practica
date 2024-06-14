import React from 'react'

const Customers = () => {
  return (
    <div className='mt-[4.5rem]'>
      <div className='flex w-full max-lg:gap-[2.5rem] lg:justify-between justify-center flex-wrap'>
        <img className='h-[3rem]' src="/customers/digitalside.svg" alt="digital" draggable={false} />
        <img className='h-[3rem]' src="/customers/vortex.svg" alt="digital" draggable={false} />
        <img className='h-[3rem]' src="/customers/travel-explorer.svg" alt="digital" draggable={false} />
        <img className='h-[3rem]' src="/customers/fuzion.svg" alt="digital" draggable={false} />
        <img className='h-[3rem]' src="/customers/media-fury.svg" alt="digital" draggable={false} />
      </div>

      <div className='mt-[4.5rem] h-[1px] w-full bg-[#F3D1BF]'/>
    </div>
  )
}

export default Customers