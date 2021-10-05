/**
 * React Modules
 */
import React from "react";
import { Link } from "react-router-dom";
/**
 * Stylesheets
 */
import "./global-button.css"
/**
 * Components
 */

//These consts are effectively the CSS classes
const STYLES = ["btn--primary", "btn--outline"];
const SIZES  = ["btn--medium", "btn--large"];

/**
 * Primary function
 * @param children
 * @param type
 * @param onClick
 * @param buttonStyle
 * @param buttonSize
 * @returns {JSX.Element}
 * @constructor
 */
export const GlobalButton = ({
                                 children,
                                 type,
                                 onClick,
                                 buttonStyle,
                                 buttonSize
                             }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <Link to="#" className="btn-mobile">
            <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
    )
};
