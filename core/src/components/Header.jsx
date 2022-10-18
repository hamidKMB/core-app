import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./header.module.css";

import search from "../assets/search.svg";
import kIcon from "../assets/k.svg";
import notif from "../assets/notif.svg";
import moon from "../assets/moon.svg";
import model from "../assets/model.svg";
import pic from "../assets/png.jpg";


const Header = () => {
    return (
        <>
            <header className={classes.header}>
                <div className="container-fluid">

                    <div className={`d-flex justify-content-between align-items-center`}>

                            <div className={`align-items-center ${classes.input}`}>
                                <span className='ms-3'>
                                    <img src={search} />
                                </span>
                                <input type="search" placeholder='جستجو' className={classes.searchInput}/>
                                <span className={`p-1 ${classes.Kbg}`}>
                                    <img src={kIcon} />
                                </span>
                            </div>
                        
                            <div className='d-flex justify-content-end align-items-center iconColors'>
                                <div className='ms-2'>
                                    <img src={notif} />
                                </div>
                                <div className='ms-2'>
                                    <img src={moon} />
                                </div>
                                <div className='ms-2'>
                                    <img src={model} />
                                </div>
                                <div className={`me-3 ${classes.profilePic}`}>
                                    <img src={pic} />
                                </div>
                            </div>
                    
                    </div>
                </div>
            </header>
        </>
    );
}


export default Header;