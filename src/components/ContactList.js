import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const contacts = [
    {
      id: '1',
      name: 'Darwin',
      email: 'darwin@gmail.com',
    },
  ];
  return (
    <div>
      Contact List
      {contacts.map((contact) => {
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
