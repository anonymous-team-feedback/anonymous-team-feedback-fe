import React from "react";
import "./App.css";

import { Route } from "react-router-dom";
import { autoLogin } from './actions/usersActions';
import { connect } from 'react-redux';

import Login from "./components/Login/Login.js";
import Navbar from "./components/Navbar/Navbar.js";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.js";
import Dashboard from "./components/Dashboard/Dashboard.js";
import Register from "./components/Register/Register.js";
import JoinTeamRequest from "./components/JoinTeamRequest/JoinTeamRequest.js";
import "semantic-ui-css/semantic.min.css";
import { Message, Dimmer, Loader } from "semantic-ui-react";

class App extends React.Component {

  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.props.autoLogin()
      /*placing the auto login in the app component sort of future proofs the auto login
      functionality. Im sure there is a better way, but this way ensures, atleast, that 
      potential route will be covered under the auto login*/
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
              <Route path="/jointeam" component={JoinTeamRequest} />
            </div>
            <div>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </div>
          </div>
        </div>

        {this.props.autoLoginError &&
          <Message
            color='red'
            header="There was an error with AUTO LOGIN"
            content='Please try again!'
            style={
              {
                position: 'fixed',
                right: '10px',
                bottom: '10px'
              }}
          />}

        {this.props.loginStart &&
        <Dimmer active>
          <Loader size='massive'>
            Gathering data
          </Loader>
        </Dimmer>}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    autoLoginError: state.usersReducer.autoLoginError,
    loginStart: state.usersReducer.loginStart
  }
}
export default connect(
  mapStateToProps,
  { autoLogin }
)(App);
