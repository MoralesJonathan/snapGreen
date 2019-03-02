import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import API from '../utils/API';
import Card from './Card';
import './CardList.css';

function CardList() {
    const [list, setList] = useState([]);
    useEffect(() => {
        console.log(localStorage.getItem("bitmoji"), localStorage.getItem("name"))
        API.getAllEvents().then(res => {
            setList(res.data);
            console.log(res.data);
        })
    }, []);

    return (
        <React.Fragment>
            {(localStorage.getItem("bitmoji") == null && localStorage.getItem("name") == null) ? <Redirect to="/" /> : null}
            {list.map((obj, index) => <Card obj={obj} key={index}></Card>)}
            <a href="#" className="float"><i className="fa fa-plus my-float"></i></a>
        </React.Fragment>
    );
}

export default CardList;