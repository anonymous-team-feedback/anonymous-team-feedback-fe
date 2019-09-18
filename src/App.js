import React from "react";
import "./App.css";

import { Route } from "react-router-dom";
import {autoLogin} from './actions/usersActions';
import {connect} from 'react-redux';

import Login from "./components/Login/Login.js";
import Navbar from "./components/Navbar/Navbar.js";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.js";
import Dashboard from "./components/Dashboard/Dashboard.js";
import Register from "./components/Register/Register.js";
import {Redirect} from 'react-router-dom';
import "semantic-ui-css/semantic.min.css";

class App extends React.Component {

  componentDidMount(){
    if(localStorage.getItem('token')){
      this.props.autoLogin()
      return <Redirect to="/dashboard" />
    }
  }

  render() {
    return (
      <div className="App">
        <div>
          <div>
            <div>
              <Navbar />
            </div>
            <div>
              <Route exact path="/" component={Login} />
            </div>
            <div>
              <Route path="/login" component={Login} />
            </div>
            <div>
              <Route path="/register" component={Register} />
            </div>
            <div>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default connect(
    null,
    { autoLogin }
  )(App);
