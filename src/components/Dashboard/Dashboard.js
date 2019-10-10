import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import ListFeedback from "../ListFeedback/ListFeedback.js";
import PostFeedback from "../PostFeedback/PostFeedback.js";
import PendingTeamRequest from "../PendingTeamRequest/PendingTeamRequest.js";
import { Header } from "semantic-ui-react";

import {fetchAllTeamMembers} from '../../actions/joinTeamRequestActions'



class Dashboard extends React.Component {

  render() {
    return (
      <div className="Dashboard">
        <PendingTeamRequest />
        <ListFeedback />
        <PostFeedback />
      </div>

    );
  }
};

const mapStateToProps = state => {
  return {
    slug: state.joinTeamRequestReducer.slug
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { fetchAllTeamMembers }
  )(Dashboard)
);
