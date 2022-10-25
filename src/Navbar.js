import React, { useState } from "react";
import { useNavigate } from "react-router";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Input,
} from "reactstrap";

function NavbarComponent(args) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand href="/" className="l">
          laloona
        </NavbarBrand>

        <div className="row mx-0">
          <Input
            className="form-control my-1 col-md-12"
            placeholder="Search for model"
          />
        </div>
        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/gigs");
                }}
              >
                Find Gig
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/profile");
                }}
              >
                Profile
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
