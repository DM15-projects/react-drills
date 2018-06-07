import React, { Component } from "react";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let myList = this.props.tasks.map((elem, ind) => {
      return <h2 key={ind}>{elem}</h2>;
    });
    return <div>{myList}</div>;
  }
}

export default List;
