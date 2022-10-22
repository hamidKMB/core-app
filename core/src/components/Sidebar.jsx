import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./sidebar.module.css";

import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import SidebarItems from "./SidebarItems";

import menuIcon from "../assets/menuMobile.svg";

import home from "../assets/home.svg";
import products from "../assets/products.svg";
import customers from "../assets/customers.svg";
import kanban from "../assets/kanban.svg";
import roadmap from "../assets/roadmap.svg";
import pricing from "../assets/pricing.svg";
import chat from "../assets/chat.svg";
import visitorMap from "../assets/visitorMap.svg";
import schedule from "../assets/schedule.svg";
import error from "../assets/error.svg";

const Sidebar = (props) => {
  const [initialData, setInitialData] = useState({
    home: { name: "خانه", path: "/", icon: home, selected: true, submenu: [] },
    product: {
      name: "Product",
      path: "/",
      icon: products,
      selected: false,
      submenu: ["sth", "sth2"],
    },
    customer: {
      name: "Customer",
      path: "/customer",
      icon: customers,
      selected: false,
      submenu: [],
    },
    kanban: {
      name: "Kanban",
      path: "/",
      icon: kanban,
      selected: false,
      submenu: [],
    },
    roadmap: {
      name: "Roadmap",
      path: "/",
      icon: roadmap,
      selected: false,
      submenu: [],
    },
    pricing: {
      name: "Pricing",
      path: "/",
      icon: pricing,
      selected: false,
      submenu: [],
    },
    chat: { name: "Chat", path: "/", icon: chat, selected: false, submenu: [] },
    visitorMap: {
      name: "VisitorMap",
      path: "/",
      icon: visitorMap,
      selected: false,
      submenu: [],
    },
    schedule: {
      name: "Schedule",
      path: "/",
      icon: schedule,
      selected: false,
      submenu: [],
    },
    error: {
      name: "404 Page",
      path: "/",
      icon: error,
      selected: false,
      submenu: [],
    },
  });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const viewPort = window.matchMedia("(max-width: 992px)").matches;

  return (
    <>
      <div>
        <button
          onClick={handleShow}
          className={`pe-2 ${classes.sidebarBtn} ${classes.sidebar_mobile}`}
        >
          <img src={menuIcon} />
        </button>

        <Offcanvas
          placement={"end"}
          show={show}
          onHide={handleClose}
          className={classes.sidebarBg_mobile}
        >
          <Offcanvas.Header closeButton />
          <Offcanvas.Body>
            <SidebarItems data={initialData} viewPort={viewPort} />
          </Offcanvas.Body>
        </Offcanvas>
      </div>

      <div className={`${classes.sidebarBg} ${classes.sidebar_dekstop}`}>
        <SidebarItems data={initialData} viewPort={viewPort} />
      </div>
    </>
  );
};

export default Sidebar;
