/**
 * React Modules
 */
import React from "react";

/**
 * Stylesheets
 */
// import "./App.css";
import "./home-page-hero.css";
import "./navbar.css"

/**
 * Components
 */
import HomePageHero from "./cpt-home-page-hero";
import PreLoginNavbar from "./cpt-pre-login-navbar";

/**
 * Primary function
 * @returns {JSX.Element}
 * @constructor
 */
export default function HomePage(){
    return (
        <>
            {/*<PreLoginNavbar/>*/}
            <HomePageHero/>
        </>
    );
}