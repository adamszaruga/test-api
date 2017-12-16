import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    }
  }

  componentWillMount() {
    axios.get('/counter').then(({data})=>{
      this.setState(data);
    });
  }
  add() {
    axios.post('/counter/add').then(({data})=>{
      this.setState(data);
    });
  }

  subtract() {
    axios.post('/counter/subtract').then(({data})=>{
      this.setState(data);
    }).catch(({response})=>{
      alert(response.data.error)
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1 className="App-intro">
          {this.state.counter}
        </h1>
        <button onClick={this.add.bind(this)}>ADD</button>
        <button onClick={this.subtract.bind(this)}>SUB</button>
      </div>
    );
  }
}

export default App;
