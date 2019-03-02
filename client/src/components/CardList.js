import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import API from '../utils/API';
import Card from './Card';
import './CardList.css';

function CardList() {
    const [notLoggedIn, setLoggedIn] = useState(localStorage.getItem("bitmoji") == null && localStorage.getItem("name") == null);
    const [list, setList] = useState([]);
    useEffect(() => {
        if (!notLoggedIn) {
            API.getAllEvents().then(res => {
                setList(res.data);
                console.log(res.data);
            })
        }
    }, []);

    return (
        <React.Fragment>
            {notLoggedIn ? <Redirect to="/" /> : null}
            {list.map((obj, index) => <Card obj={obj} key={index}></Card>)}
            <a href="/app/add" className="float"><i className="fa fa-plus my-float"></i></a>
        </React.Fragment>
    );
}

export default CardList;