
interface ContactsCardProps {
    image: string;
    title: string;
    content: string;
    border: 'left' | 'right' | null;
}

const ContactsCard:React.FC<ContactsCardProps> = ({ image, title, content, border }) => {
  return (
    <div className={`border w-full border-[#F3D1BF] ${ border && border === "left" ? 'border-l rounded-l-[0.375rem]' : border === 'right' ? 'border-r rounded-r-[0.375rem]' : ''} p-[2rem]`}>
        <div className="flex gap-[1.5rem] items-center mb-[1.5rem]">
            <img src={image} alt="contacts_image" draggable={false} className="size-[4rem]" />
            <h3 className="mb-[1.5rem] tracking-widest text-base text-text-dark-accent uppercase" >{ title }</h3>
        </div>

        <p className="text-[1.25rem]">{ content }</p>
    </div>
  )
}

export default ContactsCard