import React from 'react'
import SectionTitle from '../SectionTitle'
import PriceBox from './PriceBox'
import OrangeButton from '../OrangeButton'

const Pricing = () => {
  return (
    <div className='mt-[6.75rem]'>
        <SectionTitle 
            sectionName='Pricing'
            title="Check Our Pricing Plans"
            titleSize="3.5rem"
            subtitle={null}
            text={null}
        />

        <div className='items-end md:grid-cols-3 grid'>
            <div className='border border-[#F3D1BF] rounded-l-[0.375rem]'>
                <PriceBox 
                    title='Consultation'
                    price='Free'
                    description='Your digital marketing efforts, instead of handling in-house.'
                    design
                    analysis={false}
                    production={false}
                />
            </div>


            <div className="w-full p-[3rem] border bg-white rounded-t-[0.375rem] border-[#F3D1BF]">

                <div className='text-white w-fit bg-[#EF6D58] rounded-full py-[0.5rem] px-[1.5rem] grid place-content-center mb-[1rem]'>
                    <span className='mt-[0.15rem]'>Popular</span>
                </div>

                <h3 className="tracking-widest mb-[1.5rem] text-base text-text-dark-accent uppercase">Design</h3>
                <h2 className="text-text-dark text-[2.5rem] font-black mb-[1rem]">$1500</h2>
                <p className="text-base text-text-dark/65 mb-[1.5rem]">Provide your business with a variety of digital solutions to promote.</p>

                <div className="flex flex-col gap-[1rem] mb-[2rem]">
                    <div className="flex gap-[1rem]">
                    <img src={'/plus.svg'} alt="plus" draggable={false} className="size-[1rem]"/>
                    <p className="text-text-dark text-[1rem]">Brand Design</p>
                    </div>
                    <div className="flex gap-[1rem]">
                    <img src={'/plus.svg'} alt="plus" draggable={false} className="size-[1rem]"/>
                    <p className="text-text-dark text-[1rem]">Market Analysis</p>
                    </div>
                    <div className="flex gap-[1rem]">
                    <img src={'/minus.svg'} alt="plus" draggable={false} className="size-[1rem]"/>
                    <p className="text-text-dark text-[1rem]">Production</p>
                    </div>
                </div>

                <OrangeButton text='contact us'/>

            </div>

            
            <div className='border border-[#F3D1BF] rounded-r-[0.375rem]'>
                <PriceBox 
                    title='Design+Code'
                    price='$2900'
                    description='Help you hit your marketing goals and grow your business.'
                    design
                    analysis
                    production
                />
            </div>
        </div>
    </div>
  )
}

export default Pricing