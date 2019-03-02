import React from "react";
import "./Card.css";

function Card(props) {
    const getAgo = milliseconds => {
        let unit = "";
        let time = 0;
        let seconds = (new Date().getTime() - seconds) / 1000;
        if(seconds < 60 ) {
            unit = "s";
            time = seconds
        } else if (seconds > 60 && seconds < 3600){
            unit = " mins";
            time = seconds / 60;
        } else {
            unit = " hrs";
            time = seconds / 3600;
        }
        return time + unit;
    }
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
                <i className="fa fa-clock-o" /> {getAgo} ago
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
