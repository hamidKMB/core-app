import React, {useState} from 'react';

// css
import classes from "./sidebar.module.css";

// components
import Accordion from 'react-bootstrap/Accordion';
import { Link, NavLink, Route } from "react-router-dom";

// img
import rectangle from "../assets/Rectangle.svg";


const SidebarItems = props => {

    /* ---------------------------------- props --------------------------------- */

    const {initialState} = props;

    /* --------------------------------- states --------------------------------- */

    const [selected, setSelected] = useState(null);

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
                                                    <span>
                                                        {item.name}
                                                    </span>
                                                </Accordion.Header>

                                                
                                                    <Accordion.Body className={classes.sidebarBg_accordion}>
                                                        {
                                                            item.child.map((child,index) => 
                                                              <div key={index} className='mb-3'>
                                                                  <NavLink to="#" activeClassName="bg-light" >
                                                                      {child}
                                                                  </NavLink>
                                                              </div>
                                                            )
                                                        }
                                                    </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    :

                                      <NavLink
                                            key={item.id} 
                                            to={item.to}
                                            activeClassName="bg-light"
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
                                             <span>
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