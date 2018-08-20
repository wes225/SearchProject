import React from "react";
const Member = props => (
  <div>
    <h2>{props.name}</h2>
    <p>{props.title}</p>
    <a>{props.email}</a>
    <p>{props.phoneNumber}</p>
    <a>{props.linkedin}</a>
  </div>
);

export default Member;
