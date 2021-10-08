/**
 * Author: James Easy
 * Student ID: 2222741
 */

/**
 * React Modules
 */
import React, {useState, useEffect, useContext} from "react";
import {Link} from "react-router-dom";
/**
 * Stylesheets
 */
import "./navbar.css";
/**
 * Components
 */
import {LoginContext} from "./login-context";

/**
 * PAGE COMPONENT: POST-LOGIN NAVBAR
 * @returns {JSX.Element}
 * @constructor
 */
export default function PostLoginNavbar() {

    /**
     * HOOK: SHOWS NAV BUTTON UPON CHANGE TO RELEVANT SCREEN SIZE
     */
    // useEffect(() => {
    //     showNavButton();
    // }, []);

    /**
     * SHOWS NAV BUTTON AT WHEN SCREEN RESIZES
     */
    //window.addEventListener("resize", showNavButton);

    /**
     * HOOK OBJECT DECLARATION
     */
    const {user, setUser} = useContext(LoginContext);

    /**
     * HOOK ARRAY DECLARATIONS
     */
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    /**
     * FUNCTION EXPRESSIONS
     */
    // const handleClick = () => setClick(!click);
    // const closeMobileMenu = () => setClick(false);
    // const showNavButton = () => {
    //     if (window.innerWidth <= 960) {
    //         setButton(false);
    //     } else {
    //         setButton(true);
    //     }
    // };

    /**
     * GET: LOGS USER OUT AND CLEARS SESSION COOKIE
     * @constructor
     */
    const logoutAndClearCookie = () => {
        fetch("http://localhost:5000/logout", {
            method: "GET",
        }).then((res) => {
            res.json().then(r => {
                localStorage.clear();
                setUser(!user);
            });
        });
    };

    /**
     * RENDERS POST LOGIN NAVBAR COMPONENT
     */
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    {/*<Link to="/primarydashboard" className="navbar-logo"*/}
                    {/*      onClick={closeMobileMenu}>Cryptocracy</Link>*/}
                    {/*<div className="menu-icon" onClick={handleClick}>*/}
                    {/*    <i className={click ? "fas fa-times" : "fas fa-bars"}/>*/}
                    {/*</div>*/}
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        {/*<li className="nav-item">*/}
                        {/*    <Link to="/workerdashboard" className="nav-links"*/}
                        {/*          onClick={closeMobileMenu}>Worker*/}
                        {/*        Dashboard</Link>*/}
                        {/*</li>*/}
                        {/*<li className="nav-item">*/}
                        {/*    <Link to="/creatordashboard" className="nav-links"*/}
                        {/*          onClick={closeMobileMenu}>Creator*/}
                        {/*        Dashboard</Link>*/}
                        {/*</li>*/}
                        <li className="nav-item">
                            <Link to="/"
                                  className="nav-links"
                                  onClick={() => {
                                      //closeMobileMenu();
                                      logoutAndClearCookie();
                                  }}>Logout</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

