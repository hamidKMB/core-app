import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./header.module.css";

const Header = () => {
    return (
        <>
            <header className={classes.header}>
                <div className="container-fluid">

                    <div className="d-flex justify-content-between align-items-center">

                        
                            <div className={classes.input}>
                                <span className='ms-3'>
                                    search icon
                                </span>
                                <input type="search" placeholder='جستجو' className={classes.searchInput}/>
                                <span>
                                    icon
                                </span>
                            </div>
                        

                        
                            <div className='d-flex justify-content-end'>
                                <span className='ms-2'>
                                    notif icon
                                </span>
                                <span className='ms-2'>
                                    moon icon
                                </span>
                                <span className='ms-2'>
                                    model icon
                                </span>
                                <span>
                                    avatar
                                </span>
                            </div>
                    
                    </div>
                </div>
            </header>
        </>
    );
}


export default Header;