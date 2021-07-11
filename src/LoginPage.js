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
      <div className='auth-wrapper'>
        <div className='auth-inner'>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/sing-in' component={Login} />
            <Route path='/sing-up' component={Signup} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default LoginPage;