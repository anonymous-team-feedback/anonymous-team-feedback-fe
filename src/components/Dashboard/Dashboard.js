import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import ListFeedback from "../ListFeedback/ListFeedback.js";
import PostFeedback from "../PostFeedback/PostFeedback.js";
import { Header } from "semantic-ui-react";

import {fetchAllTeamMembers} from '../../actions/joinTeamRequestActions'


class Dashboard extends React.Component {

  componentDidMount(){
    fetchAllTeamMembers()
  }

  render() {
    return (
<>
        {this.props.slug && <div className="Dashboard">
        <ListFeedback />
        <PostFeedback />
      </div>}

      {!this.props.slug && <Pending/>}
</>
    );
  }
};

const mapStateToProps = state => {
  console.log('state', state)
  return {
    slug: state.slug
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    {fetchAllTeamMembers}
  )(Dashboard)
);

class Pending extends React.Component {
  render(){
    return (
      <>
      <Header as='h1'>
        You are not part of a team quite yet. Please be patient while your manager approves your request. 
      </Header>
      <p>Thank you - SpeakIncog Team</p>
      </>
    )
  }
}