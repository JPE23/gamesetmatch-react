import {Link} from "react-router-dom";
import {GlobalButton} from "./cpt-global-button";

export default function HomePageHero() {

    /**
     * RENDERS PAGE HERO
     */
    return (
        <div>
            <div className="splitScreen">
                <div className="leftPane">
                    <div className="hero-container">
                        <div className="title-container">
                            <h2>Playing Tennis Just Got Easier!</h2>
                        </div>
                        <div className="subtitle-container">
                            <p>Find Your Perfect Match</p>
                        </div>
                        <div className="hero-btns">
                            <GlobalButton className="btns"
                                          buttonStyle="btn--outline"
                                          buttonSize="btn--large">
                                <Link to="/signuppage">Sign-up</Link>
                            </GlobalButton>
                            <GlobalButton className="btns"
                                          buttonStyle="btn--outline"
                                          buttonSize="btn--large">
                                <Link to="/howitworkspage">How It Works</Link>
                            </GlobalButton>
                        </div>
                    </div>
                </div>
                <div className="rightPane">
                    <img/>
                </div>
            </div>
        </div>

    );
}