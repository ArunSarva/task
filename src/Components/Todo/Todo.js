import React, { Component } from 'react';
// import Todos from "./Todos";
import Form1 from "./Form1";
import { MdDeleteForever } from "react-icons/md";
import { FiArrowUpCircle } from "react-icons/fi";
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
        newitem: '',updatelist:""
      }
  }

  additem = (e) => {
    debugger
    e.preventDefault();
    const newitem = this.state.newitem;
    const initialState = { id: this.state.list.length + 1, name: newitem, checked:false }
    this.setState({
      list: [...this.state.list, initialState]
    })
    console.log("newitem",this.state);
  }
  handleChange = (event) => {
    this.setState({ newitem: event.target.value });
    console.log(this.state.newitem);
  }
  updateChange = (event) => {
    this.setState({ updatelist: event.target.value });
    console.log(this.state.newitem);
  }
  onDeleteHandle = (id) => {
    console.log(id);
    debugger
    const lists = this.state.list.filter(item => {
      if (item.id !== id) {
        return item;
      }
    })
    this.setState({ list: lists })
  }
  todoComplete = (id) => {
    console.log(id)
    this.setState({
      list: this.state.list.map(item => {
        if (item.id === id) {
          if (item.checked === false) {
            item['checked'] = true;
            return item;
          }
        }
        return item;
      })
    });
  }
  todoUpdate = (id) => {
    //  event.preventDefault();
    //  this.setState({newitem:name})
    console.log(this.state.newitem)
    debugger
    this.setState({
      list: this.state.list.map(item => {
        if (item.id === id) {
          if(item.checked===false){
            item.name = this.state.updatelist;
            window.confirm('Updated')
          return item;
          }
          else {
            window.confirm('To-Do completed so Unable to Update')
          }          
        }
        return item;
      })
    });
    console.log(this.state.list)
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
                <span ><input id="todoText"  className={data.checked ? 'done' : 'hidden'} readOnly={data.checked} type="text" name="newitem" onChange={this.updateChange} defaultValue={data.name} /></span>
                <button className="DeleteButton" onClick={(e) => { this.todoUpdate(data.id) }}><FiArrowUpCircle /></button>
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