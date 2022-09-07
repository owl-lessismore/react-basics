import React from 'react';

const ContactCard = (props) => {
  // Destructuring
  const { id, name, email } = props.contact;
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
      <button onClick={() => props.clickHandler(id)}>Delete</button>
    </div>
  );
};

export default ContactCard;
