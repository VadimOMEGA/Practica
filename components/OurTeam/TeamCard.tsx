import Image from "next/image";
import { StaticImageData } from "next/image";

interface TeamCardProps{
    image: StaticImageData;
    name: string;
    role: string;
}

const TeamCard:React.FC<TeamCardProps> = ({ image, name, role }) => {
  return (
    <div>
        <div className="size-[17rem] relative border border-[#3A3C56] rounded-[0.375rem] flex items-end justify-center">
            <Image 
                src={image}
                alt="member"
                objectFit="contain"
                objectPosition="bottom"
            />
        </div>
    </div>
  )
}

export default TeamCard