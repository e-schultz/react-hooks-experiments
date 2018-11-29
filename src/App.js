import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoList } from './TodoList';
import { SomeOtherList } from './SomeOtherList';
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

    const someOtherList = [{
      itemId: 1,
      title: 'Some Other Thing',
      complete: true
    }, {
      itemId: 2,
      title: 'This is That',
      complete: false,
    }]
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
            <TodoList list={list}/>
            <SomeOtherList list={someOtherList}/>
          
          
        </header>
      </div>
    );
  }
}

export default App;
