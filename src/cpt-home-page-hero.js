/**
 * React modules
 */
import {Link} from "react-router-dom";

/**
 * Components
 */
import {GlobalButton} from "./cpt-global-button";
import PreLoginNavbar from "./cpt-pre-login-navbar";

/**
 * Primary function
 * @returns {JSX.Element}
 * @constructor
 */
export default function HomePageHero() {

    /**
     * RENDERS PAGE HERO
     */
    return (
            <div className="hero-image">
                <PreLoginNavbar/>
                <div className="hero-container">
                    <div className="title-container">
                        <h2>Find a local tennis
                            partner</h2>
                    </div>
                    <div className="hero-btns">
                        <GlobalButton className="btns"
                                      buttonStyle="btn--outline"
                                      buttonSize="btn--large">
                            <Link to="/signuppage">Create Account</Link>
                        </GlobalButton>
                    </div>
                </div>
            </div>
    );
}