import React from "react";
import { useState, useEffect, useRef } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Home from "./Home";
import About from "./About";

import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
    useParams,
} from "react-router-dom";




const Body = () => {
    const [showmenu, Setshowmenu] = useState(false)
    const showmenufn = () => {
        Setshowmenu(!showmenu);


    }

    const HideMenuFn = () => {
        Setshowmenu(false);


    }

    return (
        <>
            <div className="header">
                <Header />
            </div>




            <Router>
                <div className="wrapper" >



                    <div className="main-elements">
                        <div className="toggle-bars" onClick={showmenufn}>
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>

                    </div>
                   
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/about" element={<About />} />

                    </Routes>

                    <div className={showmenu == true ? 'show sidebar' : 'sidebar'}>

                    <Sidebar />
    
    
                </div>
                </div>
            </Router>
        </>
    )
}
export default Body;