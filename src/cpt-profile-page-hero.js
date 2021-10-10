/**
 * React modules
 */
import React from "react";

/**
 * Components
 */
import { GlobalButton } from "./cpt-global-button";
import PostLoginNavbar from "./cpt-post-login-navbar";

/**
 * Primary function
 * @returns {JSX.Element}
 * @constructor
 */
export default function ProfilePageHero() {

    /**
     * RENDERS PAGE HERO
     */
    return (
            <div className="hero-image">
                <PostLoginNavbar/>
                <div className="hero-container">
                    <div className="title-container">
                        <h2>User Profile</h2>
                    </div>
                    <div className="hero-btns">
                        <GlobalButton className="btns"
                                      buttonStyle="btn--outline"
                                      buttonSize="btn--large">
                            Request a match with user
                        </GlobalButton>
                    </div>
                </div>
            </div>
    );
}