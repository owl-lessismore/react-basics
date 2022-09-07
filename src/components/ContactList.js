import React from 'react';
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom';

const ContactList = (props) => {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };
  return (
    <div>
      <h3>Contact List</h3>
      <Link to='/add'>
        <button>New Contact</button>
      </Link>
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
