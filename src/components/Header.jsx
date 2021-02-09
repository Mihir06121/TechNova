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
        <NavbarBrand className="text-white" href="/"><h2>TechNova-21</h2></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="text-white mr-5" href="#about"><h3>About</h3></NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white mr-5" href="#events"><h3>Events</h3></NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white mr-5" href="#gallary"><h3>Gallary</h3></NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white mr-5" href="#team"><h3>Team</h3></NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white mr-5" href="Contact"><h3>Contact</h3></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;