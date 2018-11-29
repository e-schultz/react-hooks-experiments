import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoList } from './TodoList';
class App extends Component {
  render() {
    const list = [{
      id: 1,
      title: 'Try hooks',
      complete: true
    }, {
      id: 2,
      title: 'L&L on hooks',
      complete: false,
    }]
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
            <TodoList list={list}/>
          
          
        </header>
      </div>
    );
  }
}

export default App;
