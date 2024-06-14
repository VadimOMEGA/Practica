import ShadowButton from "../ShadowButton";

interface PriceBoxProps{
    title: string;
    price: string;
    description: string;
    design: boolean;
    analysis: boolean;
    production: boolean
}

const PriceBox:React.FC<PriceBoxProps> = ({ title, price, description, design, analysis, production }) => {
  return (
    <div className="w-full p-[3rem]">
      <h3 className="tracking-widest mb-[1rem] text-base text-text-dark-accent uppercase">{ title }</h3>
      <h2 className="text-text-dark text-[2.5rem] font-black mb-[1rem]">{ price }</h2>
      <p className="text-base text-text-dark/65 mb-[1.5rem]">{description}</p>

      <div className="flex flex-col gap-[1rem] mb-[2rem]">
        <div className="flex gap-[1rem]">
          <img src={design ? '/plus.svg' : '/minus.svg'} alt="plus" draggable={false} className="size-[1rem]"/>
          <p className="text-text-dark text-[1rem]">Brand Design</p>
        </div>
        <div className="flex gap-[1rem]">
          <img src={analysis ? '/plus.svg' : '/minus.svg'} alt="plus" draggable={false} className="size-[1rem]"/>
          <p className="text-text-dark text-[1rem]">Market Analysis</p>
        </div>
        <div className="flex gap-[1rem]">
          <img src={production ? '/plus.svg' : '/minus.svg'} alt="plus" draggable={false} className="size-[1rem]"/>
          <p className="text-text-dark text-[1rem]">Production</p>
        </div>
      </div>

      <ShadowButton text="contact us"/>

    </div>
  )
}

export default PriceBox