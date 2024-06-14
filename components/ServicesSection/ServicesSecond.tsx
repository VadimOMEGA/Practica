import React from 'react'
import SectionTitle from '../SectionTitle'

const ServicesSecond = () => {
  return (
    <div className='mt-[8.5rem]'>
        <SectionTitle 
            sectionName='service'
            title="How Our Agency Can Help"
            titleSize="2.5rem"
            subtitle={null}
            text={null}
        />

        <div className='grid lg:grid-cols-3 grid-cols-1 mt-[2rem]'>
            <div className='border rounded-l-[0.375rem] border-[#F3D1BF] p-[3rem]'>
                <img src="/servicesIcons/design.svg" alt="dev" draggable={false} className='size-[5rem] mb-[1.5rem]' />
                <h4 className='text-text-dark text-[1.25rem] font-bold mb-[1rem]'>Design</h4>
                <p className='text-base text-text-dark/65 mb-[2rem]'>Agency provides a full service range including technical skills, design.</p>
                <p className='text-base text-text-dark/65 mb-[2rem]'>Learn more</p>
            </div>
            <div className='border border-[#F3D1BF] p-[3rem]'>
                <img src="/servicesIcons/development.svg" alt="dev" draggable={false} className='size-[5rem] mb-[1.5rem]' />
                <h4 className='text-text-dark text-[1.25rem] font-bold mb-[1rem]'>Development</h4>
                <p className='text-base text-text-dark/65 mb-[2rem]'>Full service range including technical skills, design, business.</p>
                <p className='text-base text-text-dark/65 mb-[2rem]'>Discover More</p>
            </div>
            <div className='border rounded-r-[0.375rem] border-[#F3D1BF] p-[3rem]'>
                <img src="/servicesIcons/mrketing.svg" alt="dev" draggable={false} className='size-[5rem] mb-[1.5rem]' />
                <h4 className='text-text-dark text-[1.25rem] font-bold mb-[1rem]'>Marketing</h4>
                <p className='text-base text-text-dark/65 mb-[2rem]'>Technical skills, design, business understanding, ability.</p>
                <p className='text-base text-text-dark/65 mb-[2rem]'>Explore Now</p>
            </div>
        </div>
    </div>
  )
}

export default ServicesSecond