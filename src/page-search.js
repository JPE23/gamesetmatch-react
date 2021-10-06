/**
 * React Modules
 */
import React from "react";
import SearchPageHero from "./cpt-search-page-hero";

/**
 * Stylesheets
 */
// import "./home-page-hero.css";
// import "./navbar.css"

/**
 * Components
 */
// import HomePageHero from "./cpt-home-page-hero";
// import PreLoginNavbar from "./cpt-pre-login-navbar";

/**
 * Primary function
 * @returns {JSX.Element}
 * @constructor
 */
export default function SearchPage(){

    return (
        <>
            {/*<PostLoginNavbar/>*/}
            <SearchPageHero/>
        </>
    );
}