import React, { Component } from "react";
import List from "./List";

class NewTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: this.props.tasks,
      userInput: ""
    };
  }

  changeHandler(val) {
    this.setState({
      userInput: val
    });
  }

  handleClick(val) {
    let tasksCopy = this.state.tasks.slice();
    tasksCopy.push(val);
    this.setState({
      tasks: tasksCopy
    });
  }

  render() {
    return (
      <div>
        <input onChange={e => this.changeHandler(e.target.value)} />
        <button onClick={() => this.handleClick(this.state.userInput)}>
          Click To Add Task
        </button>
        <List tasks={this.state.tasks} />
      </div>
    );
  }
}

export default NewTask;
