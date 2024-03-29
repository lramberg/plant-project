import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../services/userService';
import styles from '../LoginPage/LoginPage.module.css';

class SignupPage extends Component {

    state = {
        name: '',
        email: '',
        password: '',
        passwordConf: '',
        message: ''
    };

    updateMessage = (msg) => {
        this.setState({message: msg});
    }

    handleChange = (e) => {
        this.updateMessage('');
        this.setState({
        // Using ES2015 Computed Property Names
        [e.target.name]: e.target.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log('handle submit reached');
        try {
        console.log('try reached');
        await userService.signup(this.state);
        // Let <App> know a user has signed up!
        console.log('user service done');
        this.props.handleSignupOrLogin();
        // Successfully signed up - show GamePage
        this.props.history.push('/profile');
        } catch (err) {
        // Invalid user data (probably duplicate email)
        this.props.updateMessage(err.message);
        }
    }

    isFormInvalid() {
        return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
    }

  render() {
    return (
      <div className={styles.LoginPage}> 
        <p>{this.state.message}</p>
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="password" className="form-control" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="password" className="form-control" placeholder="Confirm Password" value={this.state.passwordConf} name="passwordConf" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn btn-outline-light mr-5" disabled={this.isFormInvalid()}>Sign Up</button>
              <Link className="btn btn-outline-light" to='/'>Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignupPage;