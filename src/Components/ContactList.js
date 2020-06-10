import React from 'react'
import ContactDetails from './ContactDetails'


const ContactList = ({contacts, search}) => {
    return(
        <div className="contact-list section">
            {contacts && contacts.map(contact => {
                return(
                    <ContactDetails contact={contact}  key={contact.id} search={search}/>
                )
            })}
        </div>
    )
}
export default ContactList