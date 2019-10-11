import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import ListFeedback from "../ListFeedback/ListFeedback.js";
import PostFeedback from "../PostFeedback/PostFeedback.js";
import { Header, Message } from "semantic-ui-react";

import { fetchAllTeamMembers } from '../../actions/joinTeamRequestActions'
import { MainListContainer, SubListContainer, H2 } from "../ListFeedback/listFeedback-style.js";


class Dashboard extends React.Component {

  render() {
    if (!this.props.approved) {
      return (
        <MainListContainer>
          <SubListContainer className="Listfeedback">
            <H2>You don't appear to be in a team yet!</H2>
            <Message negative>
              <Message.Header>
                Please wait for you team manager to approve you team request.
              </Message.Header>
              <p>Best Wishes - SpeakIncog Team</p>
            </Message>
          </SubListContainer>
        </MainListContainer>
      )
    } else {
      return (
        <div className="Dashboard">
          <ListFeedback />
          <PostFeedback />
        </div>
      );
    }
  }
};

const mapStateToProps = state => {
  return {
    slug: state.joinTeamRequestReducer.slug,
    approved: state.usersReducer.user.approved
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { fetchAllTeamMembers }
  )(Dashboard)
);
