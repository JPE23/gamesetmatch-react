/**
 * Author: James Easy
 * Student ID: 2222741
 */

/**
 * React Modules
 */
import React, {useContext} from "react";
import {useHistory} from "react-router-dom";
/**
 * Stylesheets
 */
import "./registration-form.css";
/**
 * Components
 */
import {LoginContext} from "./login-context";

/**
 * PRIMARY FUNCTION: REGISTRATION FORM
 * @returns {JSX.Element}
 * @constructor
 */
export default function RegistrationForm() {

    /**
     * HOOK OBJECT DECLARATIONS
     */
    // const {user, setUser} = useContext(LoginContext);
    //
    // /**
    //  * HOOK VARIABLE DECLARATION TO REDIRECT AFTER LOGIN
    //  * @type {History<LocationState>}
    //  */
    // let history = useHistory();
    //
    // /**
    //  * POST: REGISTERS NEW USER IN THE DATABASE
    //  * @param e
    //  */
    // const registerUser = (e) => {
    //     e.preventDefault();
    //     if (doPasswordsMatch()) {
    //         fetch("http://localhost:5000/user-registration", {
    //             method: "POST",
    //             body: $("#RegFormSend").serialize(),
    //             headers: {
    //                 "Content-Type": "application/x-www-form-urlencoded"
    //             }
    //         }).then((res) => {
    //             res.json().then(r => {
    //                 let data = JSON.stringify(r);
    //                 if (data == "{\"msg\":\"Email taken\"}") {
    //                     alert("Email address already in use");
    //                     return 1;
    //                 } else if (data == "{\"msg\":\"New user added\"}") {
    //                     alert("Registration complete!");
    //                     const userEmail = document.getElementById("emailAdd").value;
    //                     setUser(userEmail);
    //                     history.push("/primarydashboard");
    //                     return 0;
    //                 }
    //             });
    //         });
    //     }
    // };
    //
    // /**
    //  * ENSURES USER'S PASSWORDS MATCH BEFORE FORM SUBMITS
    //  * @returns {boolean}
    //  */ //Can you optimise this by making it check before submit clicked?
    // const doPasswordsMatch = () => {
    //     let firstPassword = document.getElementById("password").value;
    //     let confirmationPassword = document.getElementById("confPass").value;
    //     let match = true;
    //
    //     if (firstPassword != confirmationPassword) {
    //         alert("The passwords you have entered do not match! Please try" +
    //             " again."); //Can you optimise this by showing it on screen
    //         // rather than an alert?
    //         document.getElementById("password").style.borderColor = "#ff0000";
    //         document.getElementById("confPass").style.borderColor = "#ff0000";
    //         match = false;
    //     } else {
    //         document.getElementById("password").style.borderColor = "#07b800";
    //         document.getElementById("confPass").style.borderColor = "#07b800";
    //     }
    //     return match;
    // };

    /**
     * RENDERS REGISTRATION FORM
     */
    return (
        <div className="form-container">
            <form id="RegFormSend"
                  // onSubmit={registerUser}
            >
                <h2>Sign-up</h2>
                <input type="text"
                       name="firstName"
                       placeholder="First Name"
                       id="firstName"
                       required
                />
                <input type="text"
                       name="lastName"
                       placeholder="Last Name"
                       id="lastName"
                       required
                />
                <input type="email"
                       name="emailAdd"
                       placeholder="Email Address"
                       id="emailAdd"
                       required
                />
                <select type="text"
                        name="countryOfResidence"
                        list="countryDropdown"
                        id="countryOfResidence"
                        defaultValue=""
                        required>
                    <option value="" disabled>Country</option>
                    <option value="England">England</option>
                    <option value="Northern Ireland">Northern Ireland</option>
                    <option value="Scotland">Scotland</option>
                    <option value="Wales">Wales</option>
                </select>
                <select type="text"
                        name="gender"
                        list="genderDropdown"
                        id="gender"
                        defaultValue=""
                        required>
                    <option value="" disabled>Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Non-Binary">Non-Binary</option>
                    <option value="Transgender">Transgender</option>
                    <option value="Intersex">Intersex</option>
                    <option value="Abstain">I'd prefer not to say</option>
                </select>
                <input type="date"
                       name="dob"
                       placeholder="D.O.B"
                       max="2003-09-27"
                       id="dob"
                       required
                />
                <h6>You must be 18 or over to register</h6>
                <input type="password"
                       name="password"
                       placeholder="Password"
                       id="password"
                       autoComplete="on"
                       required
                />
                <input type="password"
                       name="confirmPassword"
                       id="confPass"
                       placeholder="Confirm Password"
                       autoComplete="on"
                       required
                />
                <button type="submit"
                        id="reg-btn"
                        onClick={() => {
                            // registerUser().then(r => {});
                            // setUser(user);
                        }}>Register
                </button>
            </form>
        </div>
    );
}
