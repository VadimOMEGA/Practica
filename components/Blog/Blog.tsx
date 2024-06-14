import React from 'react'
import SectionTitle from '../SectionTitle'
import ShadowButton from '../ShadowButton'
import BlogArticle from './BlogArticle'

import b1 from '@/public/blog_posts/b1.png'
import b2 from '@/public/blog_posts/b2.png'
import b3 from '@/public/blog_posts/b3.png'

const Blog = () => {
  return (
    <div className='mt-[11rem] pb-[4rem] border-b border-[#F3D1BF]'>
        <div className='flex md:flex-row flex-col md:items-end justify-between'>
            <SectionTitle 
                sectionName='our blog'
                title="Latest Blog Articles"
                titleSize="3.5rem"
                subtitle={null}
                text={null}
            />
            <div className='mb-[2rem]'>
                <ShadowButton text='discover all'/>
            </div>
        </div>

        <div className='flex lg:flex-row flex-col max-lg:gap-[3rem] items-center justify-between mt-[3rem]'>
            <BlogArticle 
                image={b1}
                title='Stories'
                subtitle='Agency is a business you hire to outsource'
                date='5 Nov, 2021'
            />
            <BlogArticle 
                image={b2}
                title='Design'
                subtitle='Outsource your digital marketing efforts'
                date='29 Oct, 2021'
            />
            <BlogArticle 
                image={b3}
                title='Marketing'
                subtitle='Your business with a variety of digital'
                date='21 Oct, 2021'
            />
        </div>
    </div>
  )
}

export default Blog