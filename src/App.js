/**
 * React Modules
 */
import React, {useMemo, useState} from "react";
import {HashRouter as Router, Switch, Route} from "react-router-dom";

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

/**
 * Primary Function
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
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
              {/*<Route exact path="/signuppage" component={RegistrationPage} replace/>*/}
              {/*<ProtectedRoutes exact path="/primarydashboard" component={DashboardPage} replace/>*/}
            </LoginContext.Provider>
          </Switch>
        </Router>
      </>
  )
}

export default App;
