import React, { Component } from 'react';
// import Todos from "./Todos";
import Form1 from "./Form1";
import { MdDeleteForever } from "react-icons/md";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state =
      {
        list: [
          {
            id: 1,
            name: "Learn React",
            checked: false
          },
          {
            id: 2,
            name: "Learn Redux",
            checked: true
          },
          {
            id: 3,
            name: "Learn JavaScript",
            checked: true
          }
        ],
        newitem: ''
      }
  }

  additem = (e) => {
    debugger
    e.preventDefault();
    console.log(this.state);
    const newitem = this.state.newitem;
    const initialState = { id: this.state.list.length + 1, name: newitem, username: '' }
    this.setState({
      list: [...this.state.list, initialState]
    })
  }
  handleChange = (event) => {
    this.setState({ newitem: event.target.value });
    console.log(this.state.newitem);
  }
  onDeleteHandle = (id) => {
    console.log(id);
    debugger
    const lists = this.state.list.filter(item => {
      if (item.id !== id) {
        return item;
      } return 0;
    })
    this.setState({ list: lists })
  }
  todoComplete = (id) => {
    console.log(id)
    this.setState({
      list: this.state.list.map(item => {
        if (item.id === id) {
          if (item.checked === true) {
            item['checked'] = false;
            return item;
          }
          else {
            item['checked'] = true;
            return item;
          }
        }
        return item;
      })
    });
  }
  render() {
    return (
      <div className="Todo_box">
        <h1>To-DO list</h1>
        <Form1 additem={this.additem} handleChange={this.handleChange} todo={this.state.newitem} />
        <ul type="none">
          {this.state.list.map((data, index) => {
            return (
              // <Todos key={data.id} checked={data.checked} todoComplete={this.todoComplete} onDeleteHandle={this.onDeleteHandle}>{data.name} </Todos>
              <li key={data.id}>
                <input className="checkbox" type="checkbox" checked={data.checked} onChange={(e) => { this.todoComplete(data.id) }} />
                <span className={data.checked ? 'done' : 'hidden'}>{data.name}</span>
                <button className="DeleteButton" onClick={(e) => { this.onDeleteHandle(data.id) }}><MdDeleteForever /></button>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default Todo;