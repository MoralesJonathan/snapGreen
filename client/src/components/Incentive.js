import React from "react";
import "./Card.css";

function Incentive(props) {
  console.log(props.obj)
  return (
    <div className="container">
      <div className="column">
        <div className="post-module">
          <div className="thumbnail">
            <img src={props.obj.image} />
          </div>
          <div className="post-content">
          <p>{props.obj.name}</p>
              <span className="timestamp">
                 Incentive
              </span>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Incentive;
