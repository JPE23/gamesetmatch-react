/**
 * React Modules
 */
import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {GlobalButton} from "./cpt-global-button";
/**
 * Stylesheets
 */
// import "./navbar.css";

/**
 * PAGE COMPONENT: PRE-LOGIN NAVBAR
 * @returns {JSX.Element}
 * @constructor
 */
export default function PreLoginNavbar() {

    /**
     * HOOK ARRAY DECLARATIONS
     */
    const [clicker, setClicker] = useState(false);
    const [button, setButton] = useState(true);

    /**
     * FUNCTION EXPRESSIONS
     */
    const handleClick = () => setClicker(!clicker);
    const closeMobileMenu = () => setClicker(false);
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    /**
     * HOOK: SHOWS NAV BUTTON UPON CHANGE TO RELEVANT SCREEN SIZE
     */
    useEffect(() => {
        showButton();
    }, []);

    /**
     * SHOWS NAV BUTTON AT WHEN SCREEN RESIZES
     */
    window.addEventListener("resize", showButton);

    /**
     * RENDERS PRE LOGIN NAVBAR COMPONENT
     */
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo"
                          onClick={closeMobileMenu}>Game, Set, Match!</Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={clicker ? "fas fa-times" : "fas" +
                            " fa-bars"}/>
                    </div>
                    <ul className={clicker ? "nav-menu active" : "nav-menu"}>
                        {/*<li className="nav-item">*/}
                            <GlobalButton to="/loginPage"
                                  onClick={closeMobileMenu}>Email Login</GlobalButton>
                        {/*</li>*/}
                    </ul>
                </div>
            </nav>
        </>
    );
}
