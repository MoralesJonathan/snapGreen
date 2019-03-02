import React from "react";
import "./card.css";
function Card(props) {
  return (
    <div className="container">
      <div className="column">
        <div className="post-module">
          <div className="thumbnail">
            <div className="date">
              <div className="day">{props.obj.eventDay}</div>
              <div className="month">{props.obj.eventMonth}</div>
            </div>
            <img src={props.obj.cardImage} />
          </div>
          <div className="post-content">
            <div className="category">{props.obj.category}</div>
            <h1 className="title">{props.obj.title}</h1>
            <h2 className="sub_title">{props.obj.subtitle}</h2>
            <p className="description">{props.obj.description}</p>
            <div className="post-meta">
              <span className="user">
                <img className="avatar" src={props.obj.avatar} />
                {props.obj.user}
              </span>
              <span className="timestamp">
                <i className="fa fa-clock-o" /> {props.obj.timeAgo}
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
