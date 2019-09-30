import React, { Component } from 'react';
import { Navbar,Button } from 'react-bootstrap';
class Navbar1 extends Component {
  render() {
    return (
      <div>
        <Navbar className="navbar">
          <Navbar.Brand href="#home">logo</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Button >Login</Button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>

      </div>
    );
  }
}

export default Navbar1;