import React from 'react'
import SectionTitle from '../SectionTitle'
import TeamCard from './TeamCard'

import m1 from '@/public/team-members/m1.png'
import m2 from '@/public/team-members/m2.png'
import m3 from '@/public/team-members/m3.png'
import m4 from '@/public/team-members/m4.png'

const Team = () => {
  return (
    <div className='mt-[8.75rem]'>

        <div className='flex justify-between items-end'>
            <div>
                <h3 className="tracking-widest mb-[1.5rem] text-base text-text-dark-accent uppercase">Our Team</h3>
                <h1 className='text-white text-[3.5rem] font-black mb-[2rem] leading-none'>Team of Designers and Developers</h1>
            </div>

            <div className='sm:flex hidden gap-[1rem] mb-[2.5rem]'>
                <div className='size-[3rem] rounded-full border border-white/30 grid place-content-center cursor-pointer'>
                    <img src="/arrow-left.svg" alt="arr" draggable={false} className='w-[0.875rem]'/>
                </div>

                <div className='size-[3rem] rounded-full border border-white/30 grid place-content-center cursor-pointer'>
                    <img src="/arrow-right.svg" alt="arr" draggable={false} className='w-[0.875rem]'/>
                </div>
            </div>
        </div>


        <div className='flex lg:justify-between gap-[2rem] overflow-hidden mt-[4rem]'>
            <TeamCard image={m1} name='Azah Anyeni' role='Designer'/>
            <TeamCard image={m2} name='Roelof Bekkenenks' role='React Developer'/>
            <TeamCard image={m3} name='Leonardo Oliveira' role='Illustrator'/>
            <TeamCard image={m4} name='Izabella Tabakova' role='Product Designer'/>
        </div>

        <div className='flex gap-[1.25rem] mt-[3.5rem] justify-center'>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="6" cy="6" r="6" fill="#EF6D58"/>
            </svg>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="6" cy="6" r="6" stroke="#4E4F6E"/>
            </svg>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="6" cy="6" r="6" stroke="#4E4F6E"/>
            </svg>
        </div>
    </div>
  )
}

export default Team