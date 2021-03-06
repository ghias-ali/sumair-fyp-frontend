import React from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import PublicRoute from "./publicRoutes";
import PrivateRoute from "./privateRoutes";
import Signin from "../components/signinPage/index";
import Signup from "../components/signupPage/index";
import Dashboard from "../container/dashboard/index";
import Postad from "../components/postad/index"
import "./style.css";
export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      
      <Switch>
        <PublicRoute exact path="/signin" component={Signin} />
        <PublicRoute exact path="/signup" component={Signup} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/postad" component={Postad} />


        <Redirect from="*" to="/signin" />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
