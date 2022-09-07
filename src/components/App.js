import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const [contacts, setContacts] = useState([]);
  const LOCAL_STORAGE_KEY = 'contacts';

  const addContactHandler = (contact) => {
    // spread operator
    setContacts([...contacts, contact]);
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify([...contacts, contact])
    );
  };

  useEffect(() => {
    const retrieveContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );

    if (retrieveContacts) {
      setContacts(retrieveContacts);
    }
  }, []);

  return (
    <div className='App'>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
