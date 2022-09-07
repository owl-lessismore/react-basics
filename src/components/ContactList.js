import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {
  return (
    <div>
      Contact List
      {props.contacts.map((contact, index) => {
        return <ContactCard key={index} contact={contact} />;
      })}
    </div>
  );
};

export default ContactList;
