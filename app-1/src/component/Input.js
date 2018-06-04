import React, { Component } from "react";

function Import(props) {
  return (
    <div>
      <input onChange={e => props.myFunction(e.target.value)} />
      <p>{props.userText}</p>
    </div>
  );
}

export default Import;
