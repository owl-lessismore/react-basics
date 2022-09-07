import React from 'react';

const ContactCard = (props) => {
  // Destructuring
  const { name, email } = props.contact;
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default ContactCard;
