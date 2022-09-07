import React from 'react';

class AddContact extends React.Component {
  render() {
    return (
      <div>
        <h2>Add Contact</h2>
        <form action=''>
          <div>
            <label>Name</label>
            <input type='text' name='text' placeholder='Name' />
          </div>
          <div>
            <label>Email</label>
            <input type='email' name='email' placeholder='Email' />
          </div>
          <button type='submit'>Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
