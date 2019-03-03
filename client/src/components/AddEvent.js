import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import './AddEvent.css';

function AddEvent() {
    const [notLoggedIn, setLoggedIn] = useState(localStorage.getItem("bitmoji") == null && localStorage.getItem("name") == null);
    const months = moment.monthsShort();
    let days = [...Array(32).keys()]
    days.shift();
    return (
        <React.Fragment>
            {notLoggedIn ? <Redirect to="/" /> : null}
            <div className="container-contact100">
                <div className="wrap-contact100">
                    <form className="contact100-form validate-form">
                        <span className="contact100-form-title">Create New Event</span>

                        <div className="wrap-input100">
                            <input className="input100" type="text" name="name" placeholder="Event Name" />
                            <span className="focus-input100"></span>
                        </div>

                        <div className="wrap-input100 validate-input">
                            <input className="input100" type="text" name="subtitle" placeholder="Subtitle" />
                            <span className="focus-input100"></span>
                        </div>

                        <div className="wrap-input100 validate-input">
                            <input className="input100" type="text" name="imgUrl" placeholder="Image URL" />
                            <span className="focus-input100"></span>
                        </div>

                        <div className="wrap-input100 validate-input">
                            <select className="input100 drop-down">
                                {months.map((obj, index) => (<option value={obj} key={index}>{obj}</option>))}
                            </select>
                            <span className="focus-input100"></span>
                        </div>

                        <div className="wrap-input100 validate-input">
                            <select className="input100 drop-down">
                                {days.map((obj, index) => (<option value={obj} key={index}>{obj}</option>))}
                            </select>
                            <span className="focus-input100"></span>
                        </div>

                        <div className="wrap-input100 validate-input">
                            <textarea className="input100" name="eventDetails" placeholder="Event Details"></textarea>
                            <span className="focus-input100"></span>
                        </div>

                        <div className="container-contact100-form-btn">
                            <button className="contact100-form-btn">Add Event</button>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}

export default AddEvent;