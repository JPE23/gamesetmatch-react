/**
 * React modules
 */
import React from "react";
import {Link} from "react-router-dom";

/**
 * Components
 */
// import {GlobalButton} from "./cpt-global-button";
// import PreLoginNavbar from "./cpt-pre-login-navbar";

/**
 * Primary function
 * @returns {JSX.Element}
 * @constructor
 */
export default function SearchPageHero() {

    /**
     * RENDERS PAGE HERO
     */
    return (
        <div className="hero-image">
            {/*<PreLoginNavbar/>*/}
            <div className="hero-container">
                <div className="title-container">
                    <h2>Enter your location</h2>
                </div>
                <form className="search-bar">
                    <input type="text" placeholder="Postcode, City, Town" name="search"/>
                    <button type="submit"><i className="fa fa-search"/></button>
                </form>
            </div>
        </div>
    );
}