import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'

export default function nav() {
    return (
        <div>
            <Nav
  // activeKey="/nav"
  // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
>
  <Nav.Item>
    <Nav.Link href="/stepOne">Your Details</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/stepTwo">our massge</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/stepThree">List Person</Nav.Link>
  </Nav.Item>
</Nav> 
        </div>
    );
}
