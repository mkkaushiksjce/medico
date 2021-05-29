import React, {useState} from "react";
import { Switch, Route} from "react-router-dom";
import GuardedRoute from "./gaurdedRoute";
import LandingPage from "../pages/landingPage/landingPage";
import HomePage from "../pages/homePage/homepage";
import Signup from "../pages/signup/signup";
import Login from "../pages/login/login";
import ResetPassword from "../pages/resetPassword/resetPassword";

const Routes = () => {
    
    const[isAutheticated, setisAutheticated] = useState(false);

    return(
        <Switch>
            <Route path="/" component={LandingPage} exact />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/resetpassword" component={ResetPassword} />
            <GuardedRoute path="/home" component={HomePage} auth={isAutheticated} />
        </Switch>
    )
}

export default Routes;