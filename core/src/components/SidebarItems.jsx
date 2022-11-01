<<<<<<< HEAD
import React, {useState} from 'react';

// css
import classes from "./sidebar.module.css";

// components
import Accordion from 'react-bootstrap/Accordion';
import ReactDOM from 'react-dom';
import { Link, Route, Routes, NavLink } from "react-router-dom";

// img
import rectangle from "../assets/Rectangle.svg";

=======
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./sidebar.module.css";

import Accordion from "react-bootstrap/Accordion";

import rectangle from "../assets/Rectangle.svg";
>>>>>>> 2daa4d6119420ed4e228b4922cb44b2e09ae0615

const SidebarItems = (props) => {
  const [initialData, setInitialData] = useState(props.data);

<<<<<<< HEAD
    /* ---------------------------------- props --------------------------------- */

    const {initialState} = props;

    /* --------------------------------- states --------------------------------- */

    const [selected, setSelected] = useState(false)

    /* ---------------------------- function handlers --------------------------- */

    const sidebarClcikHandler = id => {
        setSelected(id);
    }
=======
  let navigate = useNavigate();

  const sidebarClickHandler = (item) => {
    const sample = initialData;

    // make all of them false
    Object.keys(sample).map((element) => {
      sample[element].selected = false;
    });

    // make selected
    sample[item[0]].selected = true;

    //Routing to Path
    navigate(item[1].path);
>>>>>>> 2daa4d6119420ed4e228b4922cb44b2e09ae0615

    // set
    setInitialData({ ...sample });
  };

  return (
    <>
      <div className="d-flex flex-column pe-4">
        <div className="text-white d-flex px-3 py-4">
          <span className="mx-2">SaaS Blocks</span>
          <span>
            <img src={rectangle} />
          </span>
        </div>

<<<<<<< HEAD
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
=======
        {Object.entries(initialData).map((item, index) =>
          item[1].submenu.length ? (
            <Accordion
              key={index}
              className={`
                                                            d-flex align-item-center 
                                                            ${
                                                              classes.sidebarBg_accordion
                                                            }
                                                            ${
                                                              classes.sidebarItems
                                                            } 
                                                            ${
                                                              item[1].selected
                                                                ? classes.sidebarItmesColor_active
                                                                : classes.sidebarItmesColor
                                                            }
                                                        `}
              onClick={() => sidebarClickHandler(item)}
            >
              <Accordion.Item
                eventKey={index}
                className={classes.sidebarItemAcc}
              >
                <Accordion.Header className={classes.accordionBtn}>
                  <span className="ms-2">
                    <img src={item[1].icon} />
                  </span>
                  <span>{item[1].name}</span>
                </Accordion.Header>
                <Accordion.Body className={classes.sidebarBg_accordion}>
                  {item[1].submenu.map((item, index) => (
                    <div key={index} className="mb-3">
                      {item}
>>>>>>> 2daa4d6119420ed4e228b4922cb44b2e09ae0615
                    </div>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          ) : (
            <div
              key={index}
              className={`
                                                            d-flex align-item-center 
                                                            ${
                                                              classes.sidebarItems
                                                            } 
                                                            ${
                                                              item[1].selected
                                                                ? classes.sidebarItmesColor_active
                                                                : classes.sidebarItmesColor
                                                            }
                                                        `}
              onClick={() => sidebarClickHandler(item)}
            >
              <span className="ms-2">
                <img src={item[1].icon} />
              </span>
              <span>{item[1].name}</span>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default SidebarItems;
