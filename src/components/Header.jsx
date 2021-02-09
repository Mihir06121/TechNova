import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="fixed-top">
      <Navbar color="light" light expand="sm">
        <NavbarBrand href="/">TechNova-21</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#events">Events</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#gallary">Gallary</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#team">Team</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="Contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;