import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './Coursesales';

class App extends Component {

  render() {
    var courses = [
      {name: "Complete Android Dev Course", price: 199},
      {name: "Big Data Science Beginners Course", price: 299},
      {name: "Complete Cloud Server Course", price: 149},
      {name: "Frontend Development Course with 5 Project", price: 259}
    ];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Course Purchase Page</h1>
        </header>
        <Coursesales items={courses} />
      </div>
    );
  }
}

export default App;
