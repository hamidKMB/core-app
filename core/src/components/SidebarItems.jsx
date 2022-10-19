import React, {useState} from 'react';

import classes from "./sidebar.module.css";

import Accordion from 'react-bootstrap/Accordion';

import rectangle from "../assets/Rectangle.svg"

const SidebarItems = props => {

    const [initialData, setInitialData] = useState(props.data)

    const sidebarClcikHandler = item => {
        const sample = initialData;

        // make all of them false
        Object.keys(sample).map(element => {
            sample[element].selected = false; 
        })

        // make selected 
        sample[item[0]].selected = true;

        // set
        setInitialData({...sample});
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
                            Object.entries(initialData).map( (item,index) =>
            
                                    item[1].submenu.length
                                    ?
                                        <Accordion 
                                            key={index} 
                                            className={
                                                        `
                                                            d-flex align-item-center 
                                                            ${classes.sidebarBg_accordion}
                                                            ${classes.sidebarItems} 
                                                            ${item[1].selected ? classes.sidebarItmesColor_active : classes.sidebarItmesColor}
                                                        `
                                                    } 
                                            onClick={()=> sidebarClcikHandler(item)}
                                            >
                                                <Accordion.Item eventKey={index} className={classes.sidebarItemAcc}>
                                                    <Accordion.Header className={classes.accordionBtn}>
                                                        <span className='ms-2'>
                                                            <img src={item[1].icon} />
                                                        </span>
                                                        <span>
                                                            {item[1].name}
                                                        </span>
                                                    </Accordion.Header>
                                                    <Accordion.Body className={classes.sidebarBg_accordion}>
                                                        {
                                                            item[1].submenu.map((item,index) => <div key={index} className='mb-3'>{item}</div>)
                                                        }
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                        </Accordion>
                                    :

                                        <div 
                                            key={index} 
                                            className={
                                                        `
                                                            d-flex align-item-center 
                                                            ${classes.sidebarItems} 
                                                            ${item[1].selected ? classes.sidebarItmesColor_active : classes.sidebarItmesColor}
                                                        `
                                                    } 
                                            onClick={()=> sidebarClcikHandler(item)}
                                            >
                                            <span className='ms-2'>
                                                <img src={item[1].icon} />
                                            </span>
                                            <span>
                                                {item[1].name}
                                            </span>
                                        </div>
                            )
                        }
                    </div>
        
        </>
    );
}


export default SidebarItems;