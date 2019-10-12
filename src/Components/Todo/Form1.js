import React from 'react';
import { Form, Col, Row } from 'react-bootstrap';

const Form1 = (props) => {  
    return (
      <div>
        <Form onSubmit={(e) => { props.additem(e) }}>
          <Row>
            <Col>
              <Form.Control placeholder="Text" type="text" name="newitem" onChange={props.handleChange} />
            </Col>
          </Row>
        </Form>
      </div>
    );
  }

export default Form1;