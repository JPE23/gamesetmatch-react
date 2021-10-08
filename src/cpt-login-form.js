/**
 * React Modules
 */
import React, {useContext} from "react";
import $ from "jquery";

/**
 * Components
 */
import {LoginContext} from "./login-context";
import {useHistory} from "react-router-dom";

/**
 * Primary function
 * @returns {JSX.Element}
 * @constructor
 */
export default function LoginForm() {

    /**
     * HOOK OBJECT DECLARATION
     */
    const {user, setUser} = useContext(LoginContext);

    /**
     * HOOK VARIABLE DECLARATION
     * @type {History<LocationState>}
     */
    let history = useHistory();

    /**
     * POST: VERIFIES USER EXISTENCE IN THE DATABASE
     * @param e
     */
    const isUser = (e) => {
        e.preventDefault();
        fetch("http://localhost:5000/user-validation", {
            method: "POST",
            body: $("#LoginFormSend").serialize(),
            headers: {"Content-Type": "application/x-www-form-urlencoded"}
        }).then((res) => {
            res.json()
                .then(r => {
                    if (r == false) {

                        alert("Incorrect details or user doesn't exist." +
                            " Please try again.");
                    } else {
                        const userEmail = r[0]["email_add"];
                        setUser(userEmail);
                        history.push("/searchpage");
                    }
                });
        });
    };

    return (
        <div className="login-form-container">
            <form id="LoginFormSend" onSubmit={isUser}>
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
                {/*<div className="g-recaptcha"*/}
                {/*     data-sitekey="6LcgWDEcAAAAAOsfxfowUPX5pLiGD-w6Y5mDyXSi"/>*/}
                <br/>
                <button type="submit"
                        id="login-btn"
                        onClick={(e) => {
                            isUser(e);
                            setUser(user);
                        }}>Login
                </button>
            </form>
        </div>

    );
}