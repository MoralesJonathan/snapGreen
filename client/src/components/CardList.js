import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import API from '../utils/API';
import Card from './Card';
import StoriesBar from './StoriesBar';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
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

    function handleLogOut(){
        localStorage.removeItem("bitmoji");
        localStorage.removeItem("name");
        setLoggedIn(false);
    }

    return (
        <React.Fragment>
            {notLoggedIn ? <Redirect to="/" /> : null}
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Snapgreen</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/app/">Home</Nav.Link>
                        <Nav.Link href="/app/add">Create post</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={1} onSelect={handleLogOut} href="/"> Logout
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <StoriesBar />
            {list.map((obj, index) => <Card obj={obj} key={index}></Card>)}
            <a href="/app/add" className="float"><i className="fa fa-plus my-float"></i></a>
        </React.Fragment>
    );
}

export default CardList;