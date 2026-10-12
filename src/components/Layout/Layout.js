import React, { useState } from "react";
import Home from "../../pages/Home/Home";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import "./Layout.css";
import Menus from "../Menus/Menus";

const Layout = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="sidebar-section">
      <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
        <div className="sidebar-toggle-icons">
          <button
            type="button"
            className="sidebar-toggle-btn"
            onClick={handleToggle}
            aria-label={toggle ? "Collapse sidebar" : "Expand sidebar"}
            aria-expanded={toggle}
          >
            {toggle ? (
              <AiOutlineDoubleLeft size={30} aria-hidden="true" />
            ) : (
              <AiOutlineDoubleRight size={30} aria-hidden="true" />
            )}
          </button>
        </div>
        <Menus toggle={toggle} />
      </div>
      <div className="sidebar-main">
        <Home />
      </div>
    </div>
  );
};

export default Layout;
