import React, {useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./sidebar.module.css";

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import SidebarItems from './SidebarItems';


const Sidebar = props => {

    const [initialData, setInitialData] = useState({
        home: {name: "خانه", icon: "icon", selected: true, submenu: []},
        product: {name: "Product", icon: "icon", selected: false, submenu: ["sth", "sth2"]},
        customer: {name: "Customer", icon: "icon", selected: false, submenu: []},
        kanban: {name: "Kanban", icon: "icon", selected: false, submenu: []},
        roadmap: {name: "Roadmap", icon: "icon", selected: false, submenu: []},
        pricing: {name: "Pricing", icon: "icon", selected: false, submenu: []},
        chat: {name: "Chat", icon: "icon", selected: false, submenu: []},
        visitorMap: {name: "VisitorMap", icon: "icon", selected: false, submenu: []},
        schedule: {name: "Schedule", icon: "icon", selected: false, submenu: []},
        error: {name: "404 Page", icon: "icon", selected: false, submenu: []},

    });

    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    const viewPort = window.matchMedia("(max-width: 992px)").matches;

    return (

        <>
                
                <div>
                    <button onClick={handleShow} className={`${classes.sidebarBtn} ${classes.sidebar_mobile}`}>
                        icon
                    </button>

                    <Offcanvas placement={"end"} show={show} onHide={handleClose} className={classes.sidebarBg_mobile}>
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
    )
}

export default Sidebar;