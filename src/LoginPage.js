import React from 'react';
import './LoginPage.css';
import { BrowserRouter as Router, Switch, Route,  Link } from "react-router-dom";
import Login from './components/login.component';
import Signup from './components/singup.component';
function LoginPage() {
  return (
    <Router >
      {/* <div>
        <Link to={"/sing-in"}>Login</Link>
        <Link to={"/sing-up"}>Sign up</Link>
      </div> */}
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/sing-in' component={Login} />
        <Route path='/sing-up' component={Signup} />
      </Switch>
    </Router>
  );
}

export default LoginPage;