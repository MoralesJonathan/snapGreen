import React, { Component } from 'react';
import './App.css';
import SnapLogIn from './components/snapLogIn';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      bitmoji: "",
      displayName: ""
    }
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(bitmoji, displayName){
    this.setState({bitmoji: bitmoji});
    this.setState({displayName: displayName});
  }
  render() {
    return (
      <div className="App">
        <SnapLogIn handleLogin={this.handleLogin}></SnapLogIn>
      </div>
    );
  }
}

export default App;
