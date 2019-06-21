import React, { Component } from 'react';

export default class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    password2: '',
    errors: {},
  };

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { name, email, password, password2 } = this.state;
    const newUser = {
      name,
      email,
      password,
      password2,
    };
    console.log(newUser);
  };

  render() {
    const { name, email, password, password2, errors } = this.state;
    return (
      <div className=" container login-page">
        <div className="row justify-content-center pt-5 px-5">
          <h3>Login Page</h3>
        </div>
        <form action="" onSubmit={this.onSubmit} className="my-5">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input
              onChange={this.onChange}
              value={name}
              error={errors.name}
              id="name"
              type="text"
              className="form-control"
              aria-describedby="nameHelp"
              placeholder="Enter your Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              onChange={this.onChange}
              value={email}
              error={errors.email}
              id="email"
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              onChange={this.onChange}
              value={password}
              error={errors.password}
              id="password"
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Confirm Password</label>
            <input
              onChange={this.onChange}
              value={password2}
              type="password"
              className="form-control"
              id="password2"
              placeholder="Confirm Password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
