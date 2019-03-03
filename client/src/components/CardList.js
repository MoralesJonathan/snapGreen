import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import API from '../utils/API';
import Card from './Card';
import StoriesBar from './StoriesBar';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './CardList.css';

function CardList() {
    const [loggedIn, setLoggedIn] = useState((localStorage.getItem("bitmoji") && localStorage.getItem("name")) || localStorage.getItem('user'));
    const [list, setList] = useState([]);
    const [incentives, setIncentives] = useState([]);
    const isBusiness = localStorage.getItem("user");
    useEffect(() => {
        if (loggedIn) {
            API.getAllIncentives().then(res => {
                setIncentives(res.data);
            })
            API.getAllEvents().then(res => {
                setList(res.data);
            })
        }   
    }, []);

    function handleLogOut(){
        localStorage.clear();
        setLoggedIn(false);
    }

    return (
        <React.Fragment>
            {!loggedIn ? <Redirect to="/" /> : null}
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">Snapgreen</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/app/">Home</Nav.Link>
                        <Nav.Link href="/app/add">Create Post</Nav.Link>
                        {isBusiness ? <Nav.Link href="/app/addIncentive">Create Community Incentive</Nav.Link>: null}
                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={1} onSelect={handleLogOut} href="/"> Logout
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <StoriesBar />
            {incentives.slice(0).reverse().map((obj, index) => <Card obj={obj} key={index}></Card>)}
            <a href="/app/add" className="float"><i className="fa fa-plus my-float"></i></a>
            {list.slice(0).reverse().map((obj, index) => <Card obj={obj} key={index}></Card>)}
            <a href="/app/add" className="float"><i className="fa fa-plus my-float"></i></a>
        </React.Fragment>
    );
}

export default CardList;