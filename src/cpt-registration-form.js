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
                        name="countyOfResidence"
                        list="countyDropdown"
                        id="countyOfResidence"
                        defaultValue=""
                        required>
                    <option value="" disabled>County</option>
                        <option value="--England--">--England--</option>
                        <option value="Avon">Avon</option>
                        <option value="Bedfordshire">Bedfordshire</option>
                        <option value="Berkshire">Berkshire</option>
                        <option value="Bristol">Bristol</option>
                        <option value="Buckinghamshire">Buckinghamshire</option>
                        <option value="Cambridgeshire">Cambridgeshire</option>
                        <option value="Cheshire">Cheshire</option>
                        <option value="Cleveland">Cleveland</option>
                        <option value="Cornwall">Cornwall</option>
                        <option value="Cumbria">Cumbria</option>
                        <option value="Derbyshire">Derbyshire</option>
                        <option value="Devon">Devon</option>
                        <option value="Dorset">Dorset</option>
                        <option value="Durham">Durham</option>
                        <option value="East Riding of Yorkshire">East Riding of Yorkshire</option>
                        <option value="East Sussex">East Sussex</option>
                        <option value="Essex">Essex</option>
                        <option value="Gloucestershire">Gloucestershire</option>
                        <option value="Greater Manchester">Greater Manchester</option>
                        <option value="Hampshire">Hampshire</option>
                        <option value="Herefordshire">Herefordshire</option>
                        <option value="Hertfordshire">Hertfordshire</option>
                        <option value="Humberside">Humberside</option>
                        <option value="Isle of Wight">Isle of Wight</option>
                        <option value="Isles of Scilly">Isles of Scilly</option>
                        <option value="Kent">Kent</option>
                        <option value="Lancashire">Lancashire</option>
                        <option value="Leicestershire">Leicestershire</option>
                        <option value="Lincolnshire">Lincolnshire</option>
                        <option value="London">London</option>
                        <option value="Merseyside">Merseyside</option>
                        <option value="Middlesex">Middlesex</option>
                        <option value="Norfolk">Norfolk</option>
                        <option value="North Yorkshire">North Yorkshire</option>
                        <option value="Northamptonshire">Northamptonshire</option>
                        <option value="Northumberland">Northumberland</option>
                        <option value="Nottinghamshire">Nottinghamshire</option>
                        <option value="Oxfordshire">Oxfordshire</option>
                        <option value="Rutland">Rutland</option>
                        <option value="Shropshire">Shropshire</option>
                        <option value="Somerset">Somerset</option>
                        <option value="South Yorkshire">South Yorkshire</option>
                        <option value="Staffordshire">Staffordshire</option>
                        <option value="Suffolk">Suffolk</option>
                        <option value="Surrey">Surrey</option>
                        <option value="Tyne and Wear">Tyne and Wear</option>
                        <option value="Warwickshire">Warwickshire</option>
                        <option value="West Midlands">West Midlands</option>
                        <option value="West Sussex">West Sussex</option>
                        <option value="West Yorkshire">West Yorkshire</option>
                        <option value="Wiltshire">Wiltshire</option>
                        <option value="Worcestershire">Worcestershire</option>
                        <option value="">&nbsp</option>
                        <option value="--UK Offshore--">--UK Offshore--</option>
                        <option value="Channel Islands">Channel Islands</option>
                        <option value="Isle of Man">Isle of Man</option>
                        <option value="">&nbsp</option>
                        <option value="--Northern Ireland--">--Northern Ireland--</option>
                        <option value="Antrim">Antrim</option>
                        <option value="Armagh">Armagh</option>
                        <option value="Down">Down</option>
                        <option value="Fermanagh">Fermanagh</option>
                        <option value="Londonderry">Londonderry</option>
                        <option value="Tyrone">Tyrone</option>
                        <option value="">&nbsp</option>
                        <option value="--Scotland--">--Scotland--</option>
                        <option value="Aberdeen City">Aberdeen City</option>
                        <option value="Aberdeenshire">Aberdeenshire</option>
                        <option value="Angus">Angus</option>
                        <option value="Argyll and Bute">Argyll and Bute</option>
                        <option value="Borders">Borders</option>
                        <option value="Clackmannan">Clackmannan</option>
                        <option value="Dumfries and Galloway">Dumfries and Galloway</option>
                        <option value="Dundee (City of)">Dundee (City of)</option>
                        <option value="East Ayrshire">East Ayrshire</option>
                        <option value="East Dunbartonshire">East Dunbartonshire</option>
                        <option value="East Lothian">East Lothian</option>
                        <option value="East Renfrewshire">East Renfrewshire</option>
                        <option value="Edinburgh (City of)">Edinburgh (City of)</option>
                        <option value="Falkirk">Falkirk</option>
                        <option value="Fife">Fife</option>
                        <option value="Glasgow (City of)">Glasgow (City of)</option>
                        <option value="Highland">Highland</option>
                        <option value="Inverclyde">Inverclyde</option>
                        <option value="Midlothian">Midlothian</option>
                        <option value="Moray">Moray</option>
                        <option value="North Ayrshire">North Ayrshire</option>
                        <option value="North Lanarkshire">North Lanarkshire</option>
                        <option value="Orkney">Orkney</option>
                        <option value="Perthshire and Kinross">Perthshire and Kinross</option>
                        <option value="Renfrewshire">Renfrewshire</option>
                        <option value="Shetland">Shetland</option>
                        <option value="South Ayrshire">South Ayrshire</option>
                        <option value="South Lanarkshire">South Lanarkshire</option>
                        <option value="Stirling">Stirling</option>
                        <option value="West Dunbartonshire">West Dunbartonshire</option>
                        <option value="West Lothian">West Lothian</option>
                        <option value="Western Isles">Western Isles</option>
                        <option value="">&nbsp</option>
                        <option value="--Wales--">--Wales--</option>
                        <option value="Blaenau Gwent">Blaenau Gwent</option>
                        <option value="Bridgend">Bridgend</option>
                        <option value="Caerphilly">Caerphilly</option>
                        <option value="Cardiff">Cardiff</option>
                        <option value="Carmarthenshire">Carmarthenshire</option>
                        <option value="Ceredigion">Ceredigion</option>
                        <option value="Conwy">Conwy</option>
                        <option value="Denbighshire">Denbighshire</option>
                        <option value="Flintshire">Flintshire</option>
                        <option value="Gwynedd">Gwynedd</option>
                        <option value="Isle of Anglesey">Isle of Anglesey</option>
                        <option value="Merthyr Tydfil">Merthyr Tydfil</option>
                        <option value="Monmouthshire">Monmouthshire</option>
                        <option value="Neath Port Talbot">Neath Port Talbot</option>
                        <option value="Newport">Newport</option>
                        <option value="Pembrokeshire">Pembrokeshire</option>
                        <option value="Powys">Powys</option>
                        <option value="Rhondda Cynon Taff">Rhondda Cynon Taff</option>
                        <option value="Swansea">Swansea</option>
                        <option value="Torfaen">Torfaen</option>
                        <option value="The Vale of Glamorgan">The Vale of Glamorgan</option>
                        <option value="Wrexham">Wrexham</option>
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
