import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo";
import NewTask from "./components/NewTask";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: ["mow lawn", "wash dishes", "clean kitchen", "wash car"]
    };
  }

  render() {
    return (
      <div className="App">
        <NewTask tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
