'use client'

import { useState } from 'react'

interface TabProps{
    number: number;
    text: string;
    setActiveTab: (value: React.SetStateAction<number>) => void;
    activeTab: number;
    id: number;
}

const Tab : React.FC<TabProps> = ({ text, number, setActiveTab, activeTab, id }) => {
    return (
        <div className='relative cursor-pointer' onClick={() => setActiveTab(id)}>
            <p className={`${activeTab === id ? 'text-white' : 'text-white/65'} text-base`}>{ text }</p>
            <p className={`absolute bottom-[80%] left-[100%] ${activeTab === id ? 'text-white' : 'text-white/65'} text-[0.75rem]`}>{ number }</p>
        </div>
    )
}

const PortfolioTabs = () => {

    const [activeTab, setActiveTab] = useState(0)

  return (
    <div className='sm:flex hidden items-center gap-[3.75rem] justify-center '>
        <Tab text='Show All' number={14} setActiveTab={setActiveTab} activeTab={activeTab} id={0}/>
        <Tab text='Design' number={6} setActiveTab={setActiveTab} activeTab={activeTab} id={1}/>
        <Tab text='Branding' number={4} setActiveTab={setActiveTab} activeTab={activeTab} id={2}/>
        <Tab text='Illustration' number={3} setActiveTab={setActiveTab} activeTab={activeTab} id={3}/>
        <Tab text='Motion' number={1} setActiveTab={setActiveTab} activeTab={activeTab} id={4}/>
    </div>
  )
}

export default PortfolioTabs