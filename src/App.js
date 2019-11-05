import React from "react";
import "./App.css";

import { Route } from "react-router-dom";
import { autoLogin } from './actions/usersActions';
import { connect } from 'react-redux';

import Landing from "./components/Landing/Landing.js";
import Login from "./components/Login/Login.js";
import Navbar from "./components/Navbar/Navbar.js";
import Footer from "./components/Footer/Footer.js";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.js";
import Dashboard from "./components/Dashboard/Dashboard.js";
import Register from "./components/Register/Register.js";
import About from "./components/About/About.js";
import JoinTeamRequest from "./components/JoinTeamRequest/JoinTeamRequest.js";

import Pending from "./components/Dashboard/Pending.js";
import TeamMembersList from "./components/TeamMembersList/TeamMembersList.js";
import ListFeedback from "./components/ListFeedback/ListFeedback.js";
import PostFeedback from "./components/PostFeedback/PostFeedback.js";

import "semantic-ui-css/semantic.min.css";
import { Message, Dimmer, Loader } from "semantic-ui-react";

class App extends React.Component {

  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.props.autoLogin()
      /*placing the auto login in the app component sort of future proofs the auto login
      functionality. Im sure there is a better way, but this way ensures, at least, that 
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
              <Route exact path="/" component={Landing} />
            </div>
            <div>
              <Route path="/landing" component={Landing} />
            </div>
            <div>
              <Route path="/about" component={About} />
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
              <Route exact path="/teamlist" component={TeamMembersList} />
            </div>
            <div>
              <Route exact path="/listfeedback" component={ListFeedback} />
            </div>
            <div>
              <Route exact path="/postfeedback" component={PostFeedback} />
            </div>
            <div>
              <Route exact path="/pending" component={Pending} />
            </div>
            <div>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </div>
            <div>
              <Footer/>
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
