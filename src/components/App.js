import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import { v4 as uuid } from 'uuid';

function App() {
  const [contacts, setContacts] = useState([]);
  const LOCAL_STORAGE_KEY = 'contacts';

  const addContactHandler = (contact) => {
    // spread operator
    const newContactList = [...contacts, { id: uuid(), ...contact }];
    setContacts(newContactList);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newContactList));
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => contact.id !== id);
    setContacts(newContactList);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newContactList));
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
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
}

export default App;
