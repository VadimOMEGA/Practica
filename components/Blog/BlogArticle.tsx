import { StaticImageData } from 'next/image'

import Image from 'next/image';

interface BlogArticleProps{
    image: StaticImageData;
    title: string;
    subtitle: string;
    date: string;
}

const BlogArticle:React.FC<BlogArticleProps> = ({ image, title, subtitle, date }) => {
  return (
    <div className='w-[23rem]'>
        <div className='w-full h-[14rem] relative mb-[1.5rem]'>
            <Image 
                src={image}
                alt='blog_post'
                fill
                objectFit='cover'
            />
        </div>

        <h4 className='text-text-dark text-[1.25rem] mb-[1rem]'>{ title }</h4>
        <h3 className='text-text-dark text-[1.5rem] font-bold mb-[1rem]'>{ subtitle }</h3>
        <p className='text-base text-text-dark/65'>{ date }</p>
    </div>
  )
}

export default BlogArticle