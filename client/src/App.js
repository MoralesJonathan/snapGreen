import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import CardList from './components/CardList';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import AddEvent from './components/AddEvent';
import Login from './components/Login';

const isLoggedIn = localStorage.getItem("bitmoji") !== null && localStorage.getItem("name") !== null;
class App extends Component {
  constructor(props) {
    super(props);
    if(isLoggedIn && window.location.pathname === '/') {
      window.location.reload();
    }
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/app" component={CardList} />
            <Route path="/app/add" component={AddEvent} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
