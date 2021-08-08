import { Route, Switch } from "react-router-dom";

import { Login } from "../pages/Login";
import { CreateAccount } from "../pages/CreateAccount";
import { NotFound } from "../pages/NotFound";
import { Dashboard } from "../pages/Dashboard";
const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/create-account" component={CreateAccount} />
      <Route path="/dashboard" component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  );
};

export { Routes };
