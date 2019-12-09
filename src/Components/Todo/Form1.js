import React from 'react';
import { Form, Col, Row } from 'react-bootstrap';

const Form1 = (props) => {  
    return (
      <div>
        <Form onSubmit={(e) => { props.additem(e) }} autoComplete="off">
          <Row>
            <Col>
              <Form.Control placeholder="list out Todo" type="text" name="newitem" onChange={props.handleChange} />
            </Col>
          </Row>
        </Form>
      </div>
    );
  }

export default Form1;