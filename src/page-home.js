/**
 * React Modules
 */
import React from "react";

/**
 * Stylesheets
 */
import "./App.css";
import "./home-page-hero.css";

/**
 * Components
 */
import HomePageHero from "./cpt-home-page-hero";

/**
 * Primary function
 * @returns {JSX.Element}
 * @constructor
 */
export default function HomePage(){
    return (
        <>
            <HomePageHero/>
        </>
    );
}