import React from "react";
const Advisor = (props) => (
  <div>
    <h2>{props.name}</h2>
    <p>{props.title}</p>
    <a>{props.email}</a>
    <p>{props.phoneNumber}</p>
    <a href={props.linkedin}>Linkedin</a>
  </div>
);

export default Advisor;
