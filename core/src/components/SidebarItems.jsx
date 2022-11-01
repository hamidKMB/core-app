import React, {useState} from 'react';

// css
import classes from "./sidebar.module.css";

// components
import Accordion from 'react-bootstrap/Accordion';
import ReactDOM from 'react-dom';
import { Link, Route, Routes, NavLink } from "react-router-dom";

// img
import rectangle from "../assets/Rectangle.svg";


const SidebarItems = props => {

    /* ---------------------------------- props --------------------------------- */

    const {initialState} = props;

    /* --------------------------------- states --------------------------------- */

    const [selected, setSelected] = useState(false)

    /* ---------------------------- function handlers --------------------------- */

    const sidebarClcikHandler = id => {
        setSelected(id);
    }

    return (
        <>
        
                    <div className='d-flex flex-column pe-4'>
                        <div className='text-white d-flex px-3 py-4'>
                            <span className='mx-2'>
                                SaaS Blocks
                            </span>
                            <span>
                                <img src={rectangle} />
                            </span>
                        </div>


                        {
                            initialState.map( (item, index) =>
            
                                item.child.length 
                                    ?
                                        <Accordion 
                                            key={item.id}
                                            className={
                                                `
                                                    d-flex align-item-center 
                                                    ${classes.sidebarBg_accordion}
                                                    ${classes.sidebarItems} 
                                                `
                                            } 
                                            onClick={()=> sidebarClcikHandler(item.id)}
                                        >
                                            
                                            <Accordion.Item eventKey={index} className={classes.sidebarItemAcc}>
                                                <Accordion.Header className={classes.accordionBtn}>
                                                    <span className='ms-3'>
                                                        {
                                                            item.id == selected
                                                            ?       
                                                                <img src={item.icon_active} />
                                                            :
                                                                <img src={item.icon} />
                                                        }
                                                    </span>
                                                    <span className={ item.id == selected ? classes.sidebarItmesColor_active : classes.sidebarItmesColor}>
                                                        {item.name}
                                                    </span>
                                                </Accordion.Header>
                                                <Accordion.Body className={classes.sidebarBg_accordion}>
                                                    {
                                                        item.child.map((child,index) => <div key={index} className='mb-3'>{child}</div>)
                                                    }
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    :
                                        
                                        <NavLink 
                                            key={item.id}
                                            to='#'
                                            className={
                                                `
                                                    d-flex align-item-center 
                                                    ${classes.sidebarItems}
                                                `
                                            } 
                                            onClick={()=> sidebarClcikHandler(item.id)}
                                        >
                                            <span className='ms-2'>
                                                {
                                                    item.id == selected
                                                        ?       
                                                            <img src={item.icon_active} />
                                                        :
                                                            <img src={item.icon} />
                                                }
                                             </span>
                                             <span className={item.id == selected ? classes.sidebarItmesColor_active : classes.sidebarItmesColor}>
                                                 {item.name}
                                             </span>
                                        </NavLink>
                            )
                        }
                    </div>
        
        </>
    );
}


export default SidebarItems;