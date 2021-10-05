/**
 * React Modules
 */
import React, {useContext} from "react";

/**
 * Components
 */
import {LoginContext} from "./login-context";

/**
 * Primary function
 * @returns {JSX.Element}
 * @constructor
 */
export default function LoginForm() {
    return (
        <div className="login-form-container">
            <form id="LoginFormSend" onSubmit=
                //{isUser}
                {null}>
                <h2>Sign in to your account</h2>
                <input type="email"
                       name="emailAdd"
                       placeholder="Email Address"
                       id="emailAdd"
                       required/>
                <input type="password"
                       name="password"
                       placeholder="Password"
                       id="password"
                       autoComplete="on"
                       required/>
                <div className="g-recaptcha"
                     data-sitekey="6LcgWDEcAAAAAOsfxfowUPX5pLiGD-w6Y5mDyXSi"/>
                <br/>
                <button type="submit"
                        id="login-btn"
                        onClick={(e) => {
                            //isUser(e);
                            //setUser(user);
                        }}>Login
                </button>
            </form>
        </div>

    );
}