/**
 * React Modules
 */
import React from "react";

/**
 * Stylesheets
 */
import "./App.css"

/**
 * Components
 */
import LoginForm from "./cpt-login-form"

/**
 * Primary function
 * @returns {JSX.Element}
 * @constructor
 */
export default function LoginPage(){
    return (
        <>
            <LoginForm/>
        </>
    );
}