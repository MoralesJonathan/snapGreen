import React from "react";
import "./Card.css";
function Card(props) {
  return (
    <div className="container">
      <div className="column">
        <div className="post-module">
          <div className="thumbnail">
            <div className="date">
              <div className="day">{props.day}</div>
              <div className="month">{props.month}</div>
            </div>
            <img src={props.eventImg} />
          </div>
          <div className="post-content">
            <div className="category">{props.category}</div>
            <h1 className="title">{props.title}</h1>
            <h2 className="sub_title">{props.subtitle}</h2>
            <p className="description">{props.description}</p>
            <div className="post-meta">
              <span className="user">
                <img className="avatar" src={props.avatarImg} />
                {props.fullName}
              </span>
              <span className="timestamp">
                <i className="fa fa-clock-o" /> {props.timeAgo}
                {props.uniOfTimeAgo} ago
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
