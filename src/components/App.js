import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';
import EditContact from './EditContact';
import { v4 as uuid } from 'uuid';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [contacts, setContacts] = useState([]);
  const BASE_URL = 'http://localhost:3006/';

  const addContactHandler = async (contact) => {
    const request = {
      id: uuid(),
      ...contact,
    };

    const response = await fetch(`${BASE_URL}contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });

    const newContacts = await response.json();

    setContacts([...contacts, newContacts]);
  };

  const removeContactHandler = async (id) => {
    await fetch(`${BASE_URL}contacts/${id}`, {
      method: 'DELETE',
    });
    const newContactList = contacts.filter((contact) => contact.id !== id);

    setContacts(newContactList);
  };

  const updateContactHandler = async (contact) => {
    const response = await fetch(`${BASE_URL}contacts/${contact.id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'PUT',
      body: JSON.stringify(contact),
    });

    const updateContact = await response.json();

    const newContactList = contacts.map((contact) =>
      contact.id === updateContact.id ? { ...updateContact } : contact
    );
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
          <Route
            path='/edit'
            element={
              <EditContact updateContactHandler={updateContactHandler} />
            }
          />
          <Route path='/contact/:id' element={<ContactDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
