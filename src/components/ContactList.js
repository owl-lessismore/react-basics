import React, { useRef } from 'react';
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom';

const ContactList = (props) => {
  const inputElement = useRef('');
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const getSearchItem = () => {
    props.searchKeyword(inputElement.current.value);
  };

  return (
    <div>
      <h3>Contact List</h3>
      <Link to='/add'>
        <button>New Contact</button>
      </Link>
      <div>
        <input
          ref={inputElement}
          type='text'
          placeholder='Search Contacts'
          value={props.searchItem}
          onChange={getSearchItem}
        />
      </div>
      {props.contacts.length > 0 ? (
        props.contacts.map((contact) => {
          return (
            <ContactCard
              key={contact.id}
              contact={contact}
              clickHandler={deleteContactHandler}
            />
          );
        })
      ) : (
        <p>No Contacts Available</p>
      )}
    </div>
  );
};

export default ContactList;
