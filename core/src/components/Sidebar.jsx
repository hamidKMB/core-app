import React, {useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./sidebar.module.css";

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import SidebarItems from './SidebarItems';

import menuIcon from "../assets/menuMobile.svg";

// icons
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

// active icons
import home_active from "../assets/active/home.svg";
import products_active from "../assets/active/products.svg";
import customers_active from "../assets/active/customers.svg";
import kanban_active from "../assets/active/kanban.svg";
import roadmap_active from "../assets/active/roadmap.svg";
import pricing_active from "../assets/active/pricing.svg";
import chat_active from "../assets/active/chat.svg";
import visitorMap_active from "../assets/active/visitorMap.svg";
import schedule_active from "../assets/active/schedule.svg";
import error_active from "../assets/active/error.svg";


const Sidebar = props => {

    const [initialState, setInitialState] = useState([
        {
            name: "خانه",
            id: "1",
            icon: home,
            icon_active: home_active,
            child: ["child1", "child2"],
            to: "/"
        },

        {
            name: "Product",
            id: "2",
            icon: products,
            icon_active: products_active,
            child: [],
            to: "/"
        },

        {
            name: "Customer",
            id: "3",
            icon: customers,
            icon_active: customers_active,
            child: [],
            to: "/"
        },

        {
            name: "Kanban",
            id: "4",
            icon: kanban,
            icon_active: kanban_active,
            child: [],
            to: "/"
        },

        {
            name: "Roadmap",
            id: "5",
            icon: roadmap,
            icon_active: roadmap_active,
            child: [],
            to: "/"
        },

        {
            name: "Pricing",
            id: "6",
            icon: pricing,
            icon_active: pricing_active,
            child: [],
            to: "/"
        },

        {
            name: "Chat",
            id: "7",
            icon: chat,
            icon_active: chat_active,
            child: [],
            to: "#"
        },

        {
            name: "Visitor Map",
            id: "8",
            icon: visitorMap,
            icon_active: visitorMap_active,
            child: [],
            to: "/"
        },

        {
            name: "Schedule",
            id: "9",
            icon: schedule,
            icon_active: schedule_active,
            child: [],
            to: "/"
        },

        {
            name: "404 Page",
            id: "10",
            icon: error,
            icon_active: error_active,
            child: [],
            to: "/"
        },
    ])

    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <>
                
                <div>
                    <button onClick={handleShow} className={`pe-2 ${classes.sidebarBtn} ${classes.sidebar_mobile}`}>
                        <img src={menuIcon} />
                    </button>

                    <Offcanvas placement={"end"} show={show} onHide={handleClose} className={classes.sidebarBg_mobile}>
                        <Offcanvas.Header closeButton />
                        <Offcanvas.Body>
                            <SidebarItems initialState={initialState} />
                        </Offcanvas.Body>
                    </Offcanvas>
                </div>


                <div className={`${classes.sidebarBg} ${classes.sidebar_dekstop}`}>
                    <SidebarItems initialState={initialState} />
                </div>
            
        </>
    )
}

export default Sidebar;