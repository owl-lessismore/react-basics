import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';
import { v4 as uuid } from 'uuid';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [contacts, setContacts] = useState([]);
  // const LOCAL_STORAGE_KEY = 'contacts';
  const BASE_URL = 'http://localhost:3006/';

  const addContactHandler = async (contact) => {
    // spread operator

    const request = {
      id: uuid(),
      ...contact,
    };

    const response = await fetch(`${BASE_URL}contacts`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });

    const newContacts = await response.json();

    setContacts([...contacts, newContacts]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => contact.id !== id);
    setContacts(newContactList);
  };

  useEffect(() => {
    const getAllContacts = async () => {
      const response = await fetch(`${BASE_URL}contacts`);
      const contacts = await response.json();
      if (contacts) {
        setContacts(contacts);
      }
    };
    getAllContacts();
  }, []);

  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route
            path='/'
            element={
              <ContactList
                contacts={contacts}
                getContactId={removeContactHandler}
              />
            }
          />
          <Route
            path='/add'
            element={<AddContact addContactHandler={addContactHandler} />}
          />
          <Route path='/contact/:id' element={<ContactDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
