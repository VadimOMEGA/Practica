import React from 'react'
import ContactsCard from './ContactsCard'

const Contacts = () => {
  return (
    <div className='flex md:flex-row flex-col'>
        <ContactsCard image='/phone.svg' title='Phone' content='+1 (234) 567-89-00' border="left" />
        <ContactsCard image='/email.svg' title='email' content='info@agency.com' border={null}/>
        <ContactsCard image='/adress.svg' title='adress' content='2247 Lunetta Street, TX 76301' border="right" />
    </div>
  )
}

export default Contacts