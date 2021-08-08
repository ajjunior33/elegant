import { Route, Switch } from "react-router-dom";

import { Login } from "../pages/Login";
import { CreateAccount } from "../pages/CreateAccount";
import { NotFound } from "../pages/NotFound";
const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/create-account" component={CreateAccount} />
      <Route component={NotFound} />
    </Switch>
  );
};

export { Routes };
