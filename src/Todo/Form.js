import React, { Component } from 'react';
import { Form, Col, Row } from 'react-bootstrap';


class Form extends Component {
  render() {
    return (
      <div>
        <Form onSubmit={(e) => { this.additem(e) }}>
          <Row>
            <Col>
              <Form.Control placeholder="Text" ref={input => this.newitem = input} />
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default Form;