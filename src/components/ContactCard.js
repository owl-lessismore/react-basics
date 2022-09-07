import React from 'react';

const ContactCard = (props) => {
  return (
    <div>
      <h2>{props.contact.name}</h2>
      <p>{props.contact.email}</p>
    </div>
  );
};

export default ContactCard;
