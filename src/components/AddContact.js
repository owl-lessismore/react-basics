import React from 'react';
import { useNavigate } from 'react-router-dom';

class AddContact extends React.Component {
  state = {
    name: '',
    email: '',
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === '' || this.state.email === '') {
      alert('All the fields are mandatory');
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: '', email: '' });
    this.props.navigate('/');
  };

  render() {
    return (
      <div>
        <h2>Add Contact</h2>
        <form action='' onSubmit={this.add}>
          <div>
            <label>Name</label>
            <input
              type='text'
              name='text'
              placeholder='Name'
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type='email'
              name='email'
              placeholder='Email'
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export const withRouter = (WrappedComponent) => (props) => {
  const navigate = useNavigate();

  return <WrappedComponent {...props} navigate={navigate} />;
};

export default withRouter(AddContact);
