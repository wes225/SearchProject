import React from "react";
import '../Components/AdvisorResults.css'
const Advisor = (props) => (
  <div className="advisor">
    <h2>{props.name}</h2>
    <p>{props.title}</p>
    <a>{props.email}</a>
    <p>{props.phoneNumber}</p>
    <a href={props.linkedin}>Linkedin</a>
  </div>
);

export default Advisor;
