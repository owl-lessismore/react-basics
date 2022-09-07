import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {
  return (
    <div>
      Contact List
      {props.contacts.map((contact) => {
        return <ContactCard key={contact.id} contact={contact} />;
      })}
    </div>
  );
};

export default ContactList;
