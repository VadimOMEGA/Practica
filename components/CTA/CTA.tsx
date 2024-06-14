import React from 'react'
import SectionTitle from '../SectionTitle'
import OrangeButton from '../OrangeButton'

import Image from 'next/image'

import ctaGraph from '@/public/cta-graph.png'
import ctaWoman from '@/public/cta-woman.png'

const CTA = () => {
  return (
    <div className='flex md:flex-row flex-col max-md:pt-[6rem] justify-between md:items-end relative md:px-[6.25rem] px-[1.5rem] mt-[12rem] w-full md:h-[21rem] bg-[#FDF0E9] rounded-[0.375rem]'>
        <img src="/gift.svg" alt="gift" draggable={false} className='size-[9.25rem] absolute md:top-[-22%] top-[-10%] md:left-[8%] left-[2%]' />

        <div className='flex md:flex-row flex-col justify-between h-full w-full items-center'>
            <div>
                <SectionTitle 
                    sectionName='Get started'
                    title="We Help Companies Move Faster"
                    titleSize="1.5rem"
                    subtitle={null}
                    text={null}
                />

                <OrangeButton 
                    text='contact us'
                />
            </div>

            <div className='md:h-full h-[15rem] md:w-[50%] w-full xl:flex md:hidden items-center relative'>
                <Image 
                    src={ctaGraph}
                    alt='graph'
                    draggable={false}
                    fill
                    objectFit='contain'
                />
            </div>
        </div>

        <div className='md:h-[130%] h-[20rem] w-full md:aspect-[1/1] relative'>
            <Image 
                src={ctaWoman}
                alt='graph'
                draggable={false}
                fill
                objectFit='contain'
                objectPosition='bottom'
            />
        </div>
    </div>
  )
}

export default CTA