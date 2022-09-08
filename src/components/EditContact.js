import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

class EditContact extends React.Component {
  constructor(props) {
    super(props);
    const { id, name, email } = this.props.location.state.contact;
    this.state = {
      id,
      name,
      email,
    };
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.name === '' || this.state.email === '') {
      alert('All the fields are mandatory');
      return;
    }
    this.props.updateContactHandler(this.state);
    this.setState({ name: '', email: '' });
    this.props.navigate('/');
  };

  render() {
    return (
      <div>
        <h2>Edit Contact</h2>
        <form action='' onSubmit={this.update}>
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
          <button>Update</button>
        </form>
      </div>
    );
  }
}

export const withRouter = (WrappedComponent) => (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <WrappedComponent {...props} navigate={navigate} location={location} />
  );
};

export default withRouter(EditContact);
