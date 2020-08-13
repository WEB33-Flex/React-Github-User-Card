import React, { Component } from 'react';
import axios from "axios";

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: []
    }
  }

  componentDidMount(){
    axios.get("https://api.github.com/users/jcrobles1989")
    .then(res => {
      console.log(res.data)
      this.setState({ user: res.data })
    })
  }

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
