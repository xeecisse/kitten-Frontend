import React, { useState } from "react";
import { Nav, NavItem, TabContent, TabPane, NavLink } from "reactstrap";

function Tab(props) {
  const { modelInfo = {}, profileInfo = {}, notSelf = true } = props;
  const [activeTab, setActiveTab] = useState(0);
  //   const [dropdownOpen, setDropdownOpen] = useState(false);

  //   const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div>
      <Nav tabs>
        {props.tabs.map((t, i) => (
          <NavItem className="col-3 text-center" key={i}>
            <NavLink
              href="#"
              active={activeTab === i}
              className={activeTab === i ? "fw-bold" : "text-white"}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(i);
              }}
            >
              {t}
            </NavLink>
          </NavItem>
        ))}
      </Nav>

      <TabContent activeTab={activeTab}>
        {props.children.map((c, i) => (
          <TabPane tabId={i}>{c}</TabPane>
        ))}
      </TabContent>
    </div>
  );
}

export default Tab;
