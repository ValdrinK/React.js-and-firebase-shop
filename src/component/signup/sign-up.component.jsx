import React from "react";
import FormInput from "../form-input/formInput.component";
import CustomButton from "../costum-button/costumButton";
import {
  auth,
  createUserProfileDocument
} from "../../firebase/firebase.utility";
import { registerUser } from "../../redux/user/user.actions";
import { connect } from "react-redux";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    const { registerUser } = this.props;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    registerUser({ email, password, displayName });

    this.setState({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <span>Sign up with email and password</span>

        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />

          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required
          />

          <CustomButton type='submit'>Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  registerUser: emailPassword => dispatch(registerUser(emailPassword))
});

export default connect(null, mapDispatchToProps)(SignUp);
