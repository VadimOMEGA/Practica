

interface SectionTitleProps{
    sectionName: string;
    title: string | null;
    subtitle: string | null;
    text: string | null;
    titleSize: string | null;

}

const SectionTitle:React.FC<SectionTitleProps> = ({ sectionName, title, subtitle, text, titleSize }) => {
  return (
    <div>
        <h3 className="mb-[1.5rem] tracking-widest text-base text-text-dark-accent uppercase">{ sectionName }</h3>
        { title && titleSize && ( <h1 style={{ fontSize: titleSize }} className="text-text-dark mb-[1.5rem] font-black leading-[100%]" >{ title }</h1> ) }
        { subtitle && ( <p className="text-text-dark text-[1.25rem] mb-[1rem]">{ subtitle }</p> ) }
        { text && ( <p className="text-text-dark/65 text-base leading-8">{ text }</p> ) }
    </div>
  )
}

export default SectionTitle