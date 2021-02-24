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
    <div className="fixed-top text-white">
      <Navbar color="dark" light expand="sm">
        <NavbarBrand onClick={toggle} className="text-white" href="#home"><h2>TechNova-21</h2></NavbarBrand>
        <NavbarToggler className="text=white bg-light" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink onClick={toggle} className="text-white mr-5" href="#about"><h3>About</h3></NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={toggle} className="text-white mr-5" href="#events"><h3>Events</h3></NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={toggle} className="text-white mr-5" href="#contact"><h3>Contact</h3></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;