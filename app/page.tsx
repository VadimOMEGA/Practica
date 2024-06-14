import { About, Customers, Features, Header, HowWeWork, FeaturesSecond, Services, ServicesSecond, Portfolio, CTA, Events, Team, Founder, Testimonials, Pricing, Blog, NewsLetter, GetInTouch, Contacts, FooterCTA, Footer } from '@/components'


const page = () => {
  return (
    <div>
      <Header />
      <div className='xl:px-[8.5rem] px-[1.5rem]'>
        <Customers />
        <About />
        <HowWeWork />
        <Features />
        <FeaturesSecond />
        <Services />
        <ServicesSecond />
      </div>
      <div className='xl:px-[8.5rem] px-[1.5rem] bg-dark-blue mt-[8rem]'>
        <Portfolio />
        <CTA />
        <Events />
        <Team />
        <Founder />
      </div>
      <div className='xl:px-[8.5rem] px-[1.5rem] mt-[7.75rem]'>
        <Testimonials />
        <Pricing />
        <Blog />
        <NewsLetter />
      </div>

      <div className='xl:px-[8.5rem] px-[1.5rem] mt-[7.75rem] h-[45rem] bg-center bg-cover flex items-center' style={{ backgroundImage: 'url(/map.png)' }}>
        <GetInTouch />
      </div>

      <div className='xl:px-[8.5rem] px-[1.5rem] mt-[5rem]'>
        <Contacts />
      </div>

      <div className='xl:px-[8.5rem] px-[1.5rem] rounded-[0.375rem] bg-[#EF6D58] mt-[8rem]'>
        <FooterCTA />
      </div>

      <div className='xl:px-[5rem] px-[1.5rem] mt-[7.75rem]'>
        <Footer />
      </div>

    </div>
  )
}

export default page