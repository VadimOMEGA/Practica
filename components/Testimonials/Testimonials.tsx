import Review from "./Review"

import r1 from '@/public/reviewers/r1.png'
import r2 from '@/public/reviewers/r2.png'
import r3 from '@/public/reviewers/r3.png'
import r4 from '@/public/reviewers/r4.png'
import ShadowButton from "../ShadowButton"

const Testimonials = () => {
  return (
    <div className=''>
        <h3 className="tracking-widest mb-[1.5rem] text-center text-base text-text-dark-accent uppercase">Testimonials</h3>
        <h1 className='text-text-dark lg:text-[3.5rem] text-[2.5rem] font-black text-center mb-[4rem]'>What Our Clients Saying</h1>

        <div className='flex w-full md:flex-row flex-col'>
            <div className='flex flex-col w-full border border-[#F3D1BF] rounded-l-[0.375rem] rounded-b-[0.375rem] overflow-hidden h-fit'>
                <Review 
                    text="A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you."
                    name="Alan Martí"
                    company="Meta Inc."
                    image={r1}
                    background="white"
                    borderBottom={true}
                />
                <Review 
                    text="Provide your business with a variety of digital solutions to promote your product or service online."
                    name="Graham Griffiths"
                    company="Twitor"
                    image={r3}
                    background={null}
                    borderBottom={false}
                />
            </div>
            <div className='flex flex-col w-full border border-[#F3D1BF] rounded-r-[0.375rem] overflow-hidden h-fit'>
                <Review 
                    text="Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety."
                    name="Richardo Kann"
                    company="Photogram"
                    image={r4}
                    background={null}
                    borderBottom={true}
                />
                <Review 
                    text="Promote your product or service online and help you hit your marketing goals and grow your business."
                    name="Maria Trofimova"
                    company="Whochat"
                    image={r2}
                    background={null}
                    borderBottom={false}
                />
            </div>
        </div>

        <div className="mt-[4rem] w-full flex justify-center">
            <ShadowButton text="See all"/>
        </div>
    </div>
  )
}

export default Testimonials