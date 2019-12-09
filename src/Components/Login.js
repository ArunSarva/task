import React, { useState } from 'react';
import { GoX } from "react-icons/go";

import { Button, Modal, ModalBody, Label, Col, Input, FormGroup, Form } from 'reactstrap';

const Login = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
    props.resetState()
  }

  return (
    <div>
      <Button variant="primary" onClick={toggle}>Login</Button>
      <Modal  centered isOpen={modal} toggle={toggle} className={className}>
        <ModalBody id="loginBox"toggle={toggle}>
          <div id="logoContainer"><Label className="loginLable">Login</Label><button className="closeButton" onClick={toggle}><GoX /></button></div>
          <Form>
            <FormGroup row>
              <Label for="Email" sm={2}>Email</Label>
              <Col sm={10}>
                <Input type="email" id="Email" name="Email" onChange={props.EmailChange} placeholder="Enter your Email" />
                <span>{props.Email_error}</span>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="Password" sm={2}>Password</Label>
              <Col sm={10}>
                <Input id="Password" type="password" name="Password" onChange={props.PasswordChange} placeholder="Enter your password " />
                <span>{props.children}</span>
              </Col>
            </FormGroup>
          </Form>
          <div id="footer">
          <a className="forgotPassword" href="/">Forgot password*</a>
          <Button id="loginButton" color="primary" onClick={props.LoginData}>Login</Button>
          <Button color="secondary" onClick={props.signUp}>Sign Up</Button>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Login;