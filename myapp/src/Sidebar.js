import React from "react";
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";


const Sidebar = () => {

    return (
        <>
            <div className="author">
                <img src="#" alt=""
                    className="avator" />
                <h3>Moshfequr rahman</h3>
            </div>
            <nav className="menu">
            
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
               
            </nav>



        </>
    )
}

export default Sidebar;