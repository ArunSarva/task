import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import Login from "./Login"
import browserHistory from '../Components/util/browserHistory';
class Navbar1 extends Component {
  constructor(props) {
    super(props);
    this.state =
      {

        Email: '',
        Password: "",
        Email_error: "",
        Password_error: ""
      }
  }
  EmailChange = (event) => {
    this.setState({ Email: event.target.value });
    console.log(this.state.Email);
  }
  PasswordChange = (event) => {
    this.setState({ Password: event.target.value });
    console.log(this.state.Password);
  }
  LoginData = (e) => {
    this.setState({Email_error:"",Password_error:""})
    const Email_pattran = /^([a-zA-Z0-9-]+)@([a-zA-Z0-9-]+).([a-z]{2,10})$/;
    const reg_pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{4,8}$/;
    debugger;
    let a=0;
    if (this.state.Email === null || !Email_pattran.test(this.state.Email)) {
      if (!this.state.Email) {
        a = 1;
        const Email_error = "Email is empty"
        this.setState({ Email_error })
      }
      else {
        a = 1;
        const Email_error = "Invalid Email"
        this.setState({ Email_error })
      }
    }
    if (this.state.Password === null || !reg_pass.test(this.state.Password)) {
      if (!this.state.Password) {
        a = 1;
        const Password_error = "password is empty "
        this.setState({ Password_error })
      }
      else {
        a = 1;
        const Password_error = "Invalid password"
        this.setState({ Password_error })
      }
    }
    if(a===0)
    {
      const {Email,Password}=this.state
      const payload = { Email, Password }
      console.log(payload)
    }
    console.log(this.state.Email_error)
  }
  resetState=(e)=>{ 
      this.setState({Email_error:"",Password_error:""})          
  }
   signUp() {
    browserHistory.push("/Signup");
   }
  render() {
    return (
      <div>
        <Navbar className="navbar">
          <Navbar.Brand href="/"><img className="logo" src={require('../images/logo.jpg')} alt="Logo_image" /></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Login LoginData={this.LoginData} resetState={this.resetState} signUp={this.signUp} EmailChange={this.EmailChange} PasswordChange={this.PasswordChange} Email_error={this.state.Email_error}>{this.state.Password_error}</Login>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navbar1;