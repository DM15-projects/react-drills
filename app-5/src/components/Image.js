import React, { Component } from "react";

const Image = props => {
  return (
    <div>
      <p>Chunky Bunny</p>
      <img src={props.myImage} />
    </div>
  );
};

export default Image;
