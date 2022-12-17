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
import logo from "./img/laloona-pple.png";
import CustomButton from "./components/UI/CustomButton";

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
      <Navbar {...args} className='nvb'>
        <NavbarBrand href="/" className="l">
          <img src={logo} style={{ height: 40 }} />
        </NavbarBrand>

        <div className="row mx-0">
          <Input
            className="form-control my-1 col-md-12 nvb_search"
            placeholder="Search for jobs"
          />
        </div>
        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            {user.id ? (
              <>
                <NavItem>
                  <NavLink className='nvi'
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/gigs");
                      setIsOpen(false);
                    }}
                  >
                    Find Gig
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className='nvi'
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
                  <NavLink className='nvi'
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/my-gigs");
                      setIsOpen(false);
                    }}
                  >
                    My Gigs
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='nvi'
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
                  <NavLink className='nvi'
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
              </>
            ) : null}
          </Nav>
          {user.id ? (
            <div className="logout_div">
              <CustomButton onClick={onLogout}>Logout</CustomButton>
            </div>
          ) : null}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
