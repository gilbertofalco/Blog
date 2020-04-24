import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import HeaderBlog from './components/HeaderBlog';
class App extends Component {

  constructor(props){
    super(props)

    axios 
      .get('/posts')
      .then(result => {
        console.log(result)
      })

    axios 
      .get('/comments/um')
      .then(result => {
        console.log(result)
      })
  }

  render(){
  return (
    <div className="App">
      <HeaderBlog />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}}

export default App;
