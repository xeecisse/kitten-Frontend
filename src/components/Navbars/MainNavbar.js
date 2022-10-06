import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './nav.css'
// JavaScript plugin that hides or shows a component based on your scroll
// import Headroom from "headroom.js";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  Row,

  Col,
  NavbarToggler,
  Button,
} from 'reactstrap'
// import { generalRoot } from 'views/app/routes/helpers'
import CustomButton from '../UI/CustomButton'
import logo from '../../ncs.png'
// import NavItems from './NavItems'
import { themeClass } from '../../variables'
// import { logout } from 'redux/actions/auth'
import avatar from "./avata.jpg"
const MainNavbar = () => {
  // const history = (f) => f
  // const location = useLocation()
  // const logout = () => {}
  // const route = ''
  // // location.pathname.includes(generalRoot)
  // //   ? 'GENERAL TAKAFUL'
  // //   : 'FAMILY TAKAFUL'
  // const dispatch = useDispatch()
  // const _logout = () => {
  //   dispatch(
  //     logout(() => {
  //       history.push('/login-page')
  //     }),
  //   )
  // }
  const navigate = useNavigate()
  return (
    <Navbar
      className="navbar-main mb-1 py-0"
      expand="md"
      // fixed="top"
      style={{ maxHeight: 60, backgroundColor: '' }}
    >
      {/* <Container> */}
      {/* <NavbarBrand className="mr-lg-5 " to="/" tag={Link}>
        <div> */}
          <img alt="logo" src={logo} style={{width:120, marginTop:10, marginBottom:10}}/>
        {/* </div>
      </NavbarBrand> */}
      {/* <div className="text-center">
        <h1 className="text-white text-center  ml-lg-5">{''}</h1>
      </div> */}


      <NavbarToggler onClick={() => { }} />
      <Collapse
        toggler="#navbar_global"
        navbar
        className={'d-flex flex-direction-row justify-content-between'}
      // onExiting={this.onExiting}
      // onExited={this.onExited}
      >
        <div className="navbar-collapse-header">
          <Row className='m-0 p-0'>
            <Col className="collapse-brand" xs="6">
              <Link to="/">
                {/* <img
                  alt="..."
                  src={require('../../logo.svg')}
                  style={{ minHeight: 45 }}
                /> */}
              </Link>
            </Col>
            {/* <Col className="collapse-close" xs="6"> */}
            <center>
              <h3 className='d-flex justify-content-center text-white title'>
                Slammer
              </h3>
            </center>

            {/* </Col> */}
          </Row>
        </div>
          <Button onClick={()=>navigate("/")} color="danger" className='ml-5'> Logout</Button>
      </Collapse>
      <Button onClick={()=>navigate("/Profile")} >profile
          <img src={avatar} alt="Avatar" className="avatar" /> 
          </Button>
      <div className="">
      </div>
      {/* </Container> */}
    </Navbar>
  )
}

// function CustomNavItem({ title = "", location, history, path }) {
//   let active = location.pathname.includes(path);
//   return (
//     <NavItem
//       className={active ? "bg-default border border-primary px-2" : ""}
//       style={{ cursor: "pointer" }}
//     >
//       <NavLink
//         onClick={() => history.push(path)}
//         className={active ? "nav text-primary" : "nav"}
//       >
//         {title}
//       </NavLink>
//     </NavItem>
//   );
// }

export default MainNavbar
