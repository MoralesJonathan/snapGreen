import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';

function AddEvent() {
    const [notLoggedIn, setLoggedIn] = useState(localStorage.getItem("bitmoji") == null && localStorage.getItem("name") == null);

    return (
        <React.Fragment>
            {notLoggedIn ? <Redirect to="/" /> : null}
            <div>Adding Event</div>
        </React.Fragment>
    );
}

export default AddEvent;