import React from 'react'

const Projects = () => {
  return (
    <div className='flex flex-col gap-[2rem] mt-[4rem]'>
        <div className='grid lg:grid-cols-[1fr,1.5fr] gap-[2rem]'>
            <div className='rounded-[0.375rem] overflow-hidden h-[26rem] bg-cover bg-center' style={{ backgroundImage: "url(/projectsImages/design.png)" }}>
                <div className='bg-[#5C2000] bg-opacity-30 h-full flex flex-col justify-end p-[2rem]'>
                    <div className='py-[0.25rem] px-[1rem] w-fit rounded-full bg-white text-[0.875rem] mb-[1rem] grid place-content-center text-base text-dark'>
                        <span className='mt-[0.15rem]'>Design</span>
                    </div>
                    <h3 className='font-black text-[2.5rem] text-white'>SOFA</h3>
                </div>
            </div>
            <div className='rounded-[0.375rem] overflow-hidden h-[26rem] bg-cover bg-center' style={{ backgroundImage: 'url(/projectsImages/branding.png)' }}>
                <div className='bg-[#5C2000] bg-opacity-30 h-full flex flex-col justify-end p-[2rem]'>
                    <div className='py-[0.25rem] px-[1rem] w-fit rounded-full bg-white text-[0.875rem] mb-[1rem] grid place-content-center text-base text-dark'>
                        <span className='mt-[0.15rem]'>Branding</span>
                    </div>
                    <h3 className='font-black text-[2.5rem] text-white'>KeyBoard</h3>
                </div>
            </div>
        </div>

        <div className='grid lg:grid-cols-[1.5fr,1fr] gap-[2rem]'>
            <div className='rounded-[0.375rem] overflow-hidden h-[26rem] bg-cover bg-center' style={{ backgroundImage: 'url(/projectsImages/illustration.png)' }}>
                <div className='bg-[#5C2000] bg-opacity-30 h-full flex flex-col justify-end p-[2rem]'>
                    <div className='py-[0.25rem] px-[1rem] w-fit rounded-full bg-white text-[0.875rem] mb-[1rem] grid place-content-center text-base text-dark'>
                        <span className='mt-[0.15rem]'>Illustration</span>
                    </div>
                    <h3 className='font-black text-[2.5rem] text-white'>Work Media</h3>
                </div>
            </div>
            <div className='rounded-[0.375rem] overflow-hidden h-[26rem] bg-cover bg-center' style={{ backgroundImage: 'url(/projectsImages/motion.png)' }}>
                <div className='bg-[#5C2000] bg-opacity-30 h-full flex flex-col justify-end p-[2rem]'>
                    <div className='py-[0.25rem] px-[1rem] w-fit rounded-full bg-white text-[0.875rem] mb-[1rem] grid place-content-center text-base text-dark'>
                        <span className='mt-[0.15rem]'>Motion</span>
                    </div>
                    <h3 className='font-black text-[2.5rem] text-white'>DDDone</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects