import React, { Component } from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import Todos from "./Todos"
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
      <div className="Todo_box">
        <h1>To-DO list</h1>
        <Form onSubmit={(e) => { this.additem(e) }}>
          <Row>
            <Col>
              <Form.Control placeholder="Text" ref={input => this.newitem = input} />
            </Col>
          </Row>
        </Form>
        <ul type="none">
          {this.state.list.map((data, index) => {
            return (
              <Todos key={data.id} checked={data.checked}>{data.name}</Todos>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default Todo;