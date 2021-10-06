/**
 * React Modules
 */
import React, {useEffect, useMemo, useState} from "react";
import {HashRouter as Router, Switch, Route} from "react-router-dom";

/**
 * Firebase
 */
// import firebase from './firebase';
//import './firebase/auth';

/**
 * Stylesheets
 */
import './App.css';

/**
 * Components
 */
import LoginPage from "./page-login";
import HomePage from "./page-home";
import {LoginContext} from "./login-context";
import RegistrationPage from "./page-registration";
import SearchPage from "./page-search";


/**
 * Primary Function
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
    // useEffect(() => {
    //     firebase.auth().onAuthStateChanged((user) => {
    //         if (user) {
    //             // store the user on local storage
    //             firebase
    //                 .firestore()
    //                 .doc(`/users/${user.uid}`)
    //                 .get()
    //                 .then((doc) => {
    //                     localStorage.setItem('user', JSON.stringify({
    //                         ...doc.data(),
    //                         id: doc.id,
    //                     }));
    //                 });
    //         } else {
    //             // removes the user from local storage on logOut
    //             localStorage.removeItem('user');
    //         }
    //     });
    // }, []);
  const [user, setUser] = useState();
  const memoizedUsername = useMemo(() => ({user, setUser}), [user, setUser]);
  return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} replace/>
            {/*<Route exact path="/unauthorizedpage"*/}
            {/*       component={UnauthorisedPage} replace/>*/}
            {/*<Route exact path="/howitworkspage"*/}
            {/*       component={HowItWorksPage} replace/>*/}
            <LoginContext.Provider value={memoizedUsername}>
              <Route exact path="/loginpage" component={LoginPage} replace />
              <Route exact path="/signuppage" component={RegistrationPage} replace/>
              <Route exact path="/searchpage" component={SearchPage} replace/>
              {/*<ProtectedRoutes exact path="/primarydashboard" component={DashboardPage} replace/>*/}
            </LoginContext.Provider>
          </Switch>
        </Router>
      </>
  )
}

export default App;
