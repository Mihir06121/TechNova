import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="fixed-top">
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="ml-5">
              <NavLink href="#about">ABOUT</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#events">EVENTS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#gallary">GALLARY</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#team">TEAM</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact">CONTACT</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;
