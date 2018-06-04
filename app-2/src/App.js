import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      foods: ["pizza", "tacos", "lasagna", "chili", "sushi"]
    };
  }

  render() {
    let myFoods = this.state.foods.map((elem, ind) => (
      <h2 key={ind}>{elem}</h2>
    ));
    return <div className="App">{myFoods}</div>;
  }
}

export default App;
