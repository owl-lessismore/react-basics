import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };
  return (
    <div>
      Contact List
      {props.contacts.map((contact) => {
        return (
          <ContactCard
            key={contact.id}
            contact={contact}
            clickHandler={deleteContactHandler}
          />
        );
      })}
    </div>
  );
};

export default ContactList;
