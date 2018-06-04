import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      food: ["bread", "milk", "yogurt", "cookies", "raisins"],
      userInput: ""
    };
  }

  changeHandler(val) {
    this.setState({ userInput: val });
  }

  render() {
    // let myFood = this.state.food.map((elem, ind) => {
    //   return <h2>{elem}</h2>;
    // });
    let myFood = this.state.food
      .filter((elem, ind) => {
        return elem.includes(this.state.userInput);
      })
      .map((elem, ind) => {
        return <h2>{elem}</h2>;
      });
    return (
      <div className="App">
        <input onChange={e => this.changeHandler(e.target.value)} />
        <p>{myFood}</p>
      </div>
    );
  }
}

export default App;
