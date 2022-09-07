import React from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const contacts = [
    {
      id: '1',
      name: 'Darwin',
      email: 'darwin@gmail.com',
    },
    {
      id: '2',
      name: 'Serocefino',
      email: 'serocefino@gmail.com',
    },
  ];

  return (
    <div className='App'>
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
