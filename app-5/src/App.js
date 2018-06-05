import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "./components/Image";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImage="https://i.pinimg.com/736x/e1/0f/ca/e10fca90d336aa2acf92586842741d3a--get-a-life-in-my-life.jpg" />
      </div>
    );
  }
}

export default App;
