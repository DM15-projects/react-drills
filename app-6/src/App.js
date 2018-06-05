import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      todoList: ["laundry", "clean", "walk dog", "clean floors"]
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.addToList = this.addToList.bind(this);
  }

  changeHandler(value) {
    this.setState({ userInput: value });
  }

  addToList(newItem) {
    this.state.todoList.push(newItem);
    this.setState({ todoList: this.state.todoList });
  }

  render() {
    let myList = this.state.todoList.map((elem, ind) => {
      return <h2>{elem}</h2>;
    });
    return (
      <div className="App">
        <input
          onChange={e => {
            this.changeHandler(e.target.value);
          }}
        />
        <button onClick={() => this.addToList(this.state.userInput)}>
          Add to list
        </button>
        <Todo list={myList} />
        {/* {myList} */}
      </div>
    );
  }
}

export default App;
