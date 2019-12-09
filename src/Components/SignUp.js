import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { Label, Container, Button } from 'reactstrap';
import browserHistory from '../Components/util/browserHistory';
import Navbar1 from './Navbar1';

class Signup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      Name: '',
      Email: '',
      Password: '',
      Name_message: "",
      Email_message: "",
      Password_message: ""
    }
  }
  resetState = (e) => {
    this.setState({ Email_message: "", Password_message: "" })
  }
  
  AddUser = async () => {
    this.setState({  Email_message: "", Password_message: "",Name_message:"" })
    // const { Name, Email, Password } = this.state
    // const payload = { Name, Email, Password }
    const Email_pattran = /^([a-zA-Z0-9-]+)@([a-zA-Z0-9-]+).([a-z]{2,10})$/;
    const reg_pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{4,8}$/;
    debugger;
    let a = 0;
    if (this.state.Name === "") {
      a = 1;
      const Name_message = "name is empty "
      this.setState({ Name_message })
    }
    if (this.state.Email === null || !Email_pattran.test(this.state.Email)) {
      if (!this.state.Email) {
        a =a+1;
        const Email_message = "Email is empty"
        this.setState({ Email_message })
      }
      else {
        a =a+ 1;
        const Email_message = "Invalid Email"
        this.setState({ Email_message })
      }
    }
    if (this.state.Password === null || !reg_pass.test(this.state.Password)) {
      if (!this.state.Password) {
        a =a+ 1;
        const Password_message = "password is empty "
        this.setState({ Password_message })
      }
      else if (this.state.Password.length <= 8) {
        if (!reg_pass.test(this.state.Password)) {
          a = a+1;
          const Password_message = "password is not valid"
          this.setState({ Password_message })
        }
      }
      else {
        a = a+1;
        const Password_message = "password should not be more than 8"
        this.setState({ Password_message })
      }
    }

    
    if (a === 0) {

    }
  }
  cancle() {
    browserHistory.push("/");
   }
  handleChangeInputName = async event => {
    const Name = event.target.value
    this.setState({ Name })
  }

  handleChangeInputPassword = async event => {
    const Password = event.target.value
    this.setState({ Password })
  }

  handleChangeInputEmail = async event => {
    const Email = event.target.value
    this.setState({ Email })
  }
  
  render() {
    const { Name, email, Password } = this.state

    return (
      <div>
        <Navbar1/>
        <Container className="signupContainer">
          <Form >
            <div id="logoContainer"><img className="Signuplogo" src={require('../images/logo.jpg')} alt="Logo_image" />
              <Label className="signUpLable">Sign Up</Label>
            </div>
            <Form.Group controlId="formBasicname">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" onChange={this.handleChangeInputName} value={Name} placeholder="Name" />
              <span>{this.state.Name_message}</span>
              <br></br>
              </Form.Group>
              <Form.Group controlId="formBasicemail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" onChange={this.handleChangeInputEmail} value={email} placeholder="Enter email" />
              <span>{this.state.Email_message}</span>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
					</Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" onChange={this.handleChangeInputPassword} value={Password} placeholder="Password" />
              <span>{this.state.Password_message}</span>
            </Form.Group>
          </Form>
          <Button className="SignUpButton" color="primary" onClick={this.AddUser}>Signup</Button>
          <Button className="cancleButton"color="secondary" onClick={this.cancle}>Cancel</Button>
        </Container>
      </div>
    );
  }
}
export default Signup;