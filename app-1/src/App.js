import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Input from "./component/Input";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "he"
    };

    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(random) {
    this.setState({ userInput: random.target.value });
  }

  render() {
    return (
      <div className="App">
        <input onChange={e => this.changeHandler(e)} />
        <p>{this.state.userInput}</p>
        {/* <Input
          userText={this.state.userInput}
          myFunction={this.changeHandler}
        /> */}
      </div>
    );
  }
}

export default App;
