import React from 'react';

const ContactList = (props) => {
  console.log(props);

  return (
    <div>
      Contact List
      {props.contacts.map((contact) => {
        return (
          <div id={contact.id}>
            <div>
              <h2>{contact.name}</h2>
              <p>{contact.email}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContactList;
