import React, { useState } from 'react';
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,Col, Row,TabContent,Card,TabPane,CardTitle,CardText,Button,
  DropdownMenu,
  NavLink,
} from 'reactstrap';
import AboutMe from './AboutMe';
import Photos from './Photos';
import Portfolio from './Portfolio';
import Videos from './Videos';

function ProfileDetails(props) {
    const [activeTab, setActiveTab] = useState("1")
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div>
        <Nav tabs>
        <NavItem className='col-3 text-center'>
            <NavLink href="#" active={activeTab === "1"} className={activeTab==="1" ? "fw-bold" : "text-white"} onClick={(e) => {e.preventDefault();setActiveTab("1")}}>
            Photos
            </NavLink>
        </NavItem>
        <NavItem className='col-3 text-center'>
            <NavLink href="#"  active={activeTab === "2"} className={activeTab==="2" ? "fw-bold" : "text-white"} onClick={(e) => {e.preventDefault();setActiveTab("2")}}>
            Videos
            </NavLink>
        </NavItem>
        <NavItem className='col-3 text-center'>
            <NavLink href="#" active={activeTab === "3"} className={activeTab==="3" ? "fw-bold" : "text-white"} onClick={(e) => {e.preventDefault();setActiveTab("3")}}>
            About
            </NavLink>
        </NavItem>
        <NavItem className='col-3 text-center'>
            <NavLink href="#" active={activeTab === "4"} className={activeTab==="4" ? "fw-bold" : "text-white"} onClick={(e) => {e.preventDefault();setActiveTab("4")}}>
            Portfolio
            </NavLink>
        </NavItem>
        {/* <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle nav caret>
            Dropdown
            </DropdownToggle>
            <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
        </Dropdown> */}
        </Nav>

        <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
                <Photos />
            </TabPane>
            <TabPane tabId="2">
                <Videos />
            </TabPane>
            <TabPane tabId="3">
                <AboutMe />
            </TabPane>
            <TabPane tabId="4">
                <Portfolio />
            </TabPane>
        </TabContent>
    </div>
  );
}

export default ProfileDetails;