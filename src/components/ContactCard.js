import React from 'react';
import { Link } from 'react-router-dom';

const ContactCard = (props) => {
  // Destructuring
  const { id, name, email } = props.contact;
  return (
    <div>
      <Link to={`/contact/${id}`} state={{ contact: props.contact }}>
        <h2>{name}</h2>
        <p>{email}</p>
      </Link>
      <Link to={'/edit'} state={{ contact: props.contact }}>
        <button>Edit</button>
      </Link>
      <button onClick={() => props.clickHandler(id)}>Delete</button>
    </div>
  );
};

export default ContactCard;
