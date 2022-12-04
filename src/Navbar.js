import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Input,
  Button,
} from "reactstrap";
import { logout } from "./redux/actions/auth";

function NavbarComponent(args) {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const onLogout = () => {
    dispatch(
      logout(() => {
        navigate("/login");
        setIsOpen(false);
      })
    );
  };

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
            {user.id ? (
              <>
                <NavItem>
                  <NavLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/");
                      setIsOpen(false);
                    }}
                  >
                    Find Models
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/manage-gigs");
                      setIsOpen(false);
                    }}
                  >
                    Manage Gigs
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/contracts");
                      setIsOpen(false);
                    }}
                  >
                    Contracts
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/messages");
                      setIsOpen(false);
                    }}
                  >
                    Messages
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/profile");
                      setIsOpen(false);
                    }}
                  >
                    Profile
                  </NavLink>
                </NavItem>

                <Button onClick={onLogout}>Logout</Button>
              </>
            ) : null}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
