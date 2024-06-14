import { StaticImageData } from "next/image";
import Image from "next/image";


interface ReviewProps{
    text: string;
    image: StaticImageData;
    name: string;
    company: string;
    background: string | null;
    borderBottom: boolean
}

const Review: React.FC<ReviewProps> = ({ text, image, name, company, background, borderBottom }) => {
  return (
    <div className={`w-full p-[3rem] ${borderBottom && 'border-b border-[#F3D1BF]'}`} style={{ backgroundColor: background ? background : 'transparent' }}>
        <div className="flex gap-[0.5rem] mb-[2rem]">
            <img src="/review_star.svg" alt="star" draggable={false} className="size-[1.5rem]" />
            <img src="/review_star.svg" alt="star" draggable={false} className="size-[1.5rem]" />
            <img src="/review_star.svg" alt="star" draggable={false} className="size-[1.5rem]" />
            <img src="/review_star.svg" alt="star" draggable={false} className="size-[1.5rem]" />
            <img src="/review_star.svg" alt="star" draggable={false} className="size-[1.5rem]" />
        </div>

        <p className="text-text-dark/65 text-base mb-[2rem]">{text}</p>

        <div className="flex gap-[1.5rem] items-center">
            
            <div className="size-[5rem] relative">
                <Image 
                    src={image}
                    alt="reviewer"
                    fill
                />
            </div>

            <div className="h-full text-base">
            <p className="text-text-dark text-[1.5rem] font-bold">{ name }</p>
            <p className="text-text-dark text-[1rem]">{ company }</p>
            </div>
      </div>
    </div>
  )
}

export default Review