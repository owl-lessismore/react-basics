import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ContactDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // Destructuring
  const { name, email } = location.state.contact;
  return (
    <div>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
      <button onClick={() => navigate('/')}>Back to Contact List</button>
    </div>
  );
};

export default ContactDetail;
