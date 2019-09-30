import React, { Component } from 'react';
import './Css/main.css';
import Todo from './Todo/Todo.js';
import Navbar from './Navbar1.js';
// import textfile from "../src/textfile.txt"
class checkbox extends Component {
  render() {    
    return (
      <div>
        <Navbar/>
        <div >
          <Todo/>          
        </div>
      </div>
    );
  }
}

export default checkbox;