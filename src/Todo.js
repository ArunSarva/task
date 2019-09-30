import React, { Component } from 'react';
import Form from "./Todo/Form"

class Todo extends Component {
  constructor(props) {
    super(props)
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
        ]
      }
  }

  additem(e) {
    e.preventDefault();
    const { list } = this.state;
    debugger
    const newitem = this.newitem.value;
    const initialState = { id: list.length + 1, name: newitem, username: '' }
    this.setState({
      list: [...this.state.list, initialState]
    })
  }
  render() {
    return (
      <div>
        <h1>To-DO list</h1>
        <Form/>
        <ul type="none">
          {this.state.list.map((data, index) => {
            return (
              <li key={data.id}>
                <input className="checkbox" type="checkbox" checked={data.checked} onChange={() => { }} />
                <span>{data.name}</span>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default Todo;