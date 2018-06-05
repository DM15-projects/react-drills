import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      pass: ""
    };
    this.userChangeHandler = this.userChangeHandler.bind(this);
    this.passChangeHandler = this.passChangeHandler.bind(this);
  }

  userChangeHandler(val) {
    this.setState({ user: val });
  }
  passChangeHandler(e) {
    this.setState({ pass: e.target.value });
  }

  render() {
    return (
      <div>
        <input
          onChange={e => {
            this.userChangeHandler(e.target.value);
          }}
        />
        <p />
        <input onChange={this.passChangeHandler} />
        <p />
        <button
          onClick={() =>
            alert(`Username: ${this.state.user} Password: ${this.state.pass}`)
          }
        >
          Login
        </button>
      </div>
    );
  }
}

export default Login;
