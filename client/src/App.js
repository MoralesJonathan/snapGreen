import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import CardList from './components/CardList';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import AddEvent from './components/AddEvent';
import Login from './components/Login';
import IncetiveForm from './components/IncentiveForm'


class App extends Component {
  constructor(props) {
    super(props);
    
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
            <Route exact path="/app/addIncentive" component={IncetiveForm} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
