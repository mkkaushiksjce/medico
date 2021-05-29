import React from "react";
import { Switch, Route} from "react-router-dom";
import LandingPage from "../pages/landingPage/landingPage";
import HomePage from "../pages/homePage/homepage";
import Signup from "../pages/signup/signup";
import Login from "../pages/login/login";
import ResetPassword from "../pages/resetPassword/resetPassword";

const Routes = () => {
    return(
        <Switch>
            <Route path="/" component={LandingPage} exact />
            <Route path="/home" component={HomePage} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/resetpassword" component={ResetPassword} />
        </Switch>
    )
}

export default Routes;