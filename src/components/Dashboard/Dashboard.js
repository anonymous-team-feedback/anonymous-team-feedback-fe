import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import ListFeedback from "../ListFeedback/ListFeedback.js";
import PostFeedback from "../PostFeedback/PostFeedback.js";
import { Header, Message, Divider, Button } from "semantic-ui-react";

import { fetchAllTeamMembers } from '../../actions/joinTeamRequestActions'
import { MainListContainer, SubListContainer, H2 } from "../ListFeedback/listFeedback-style.js";


class Dashboard extends React.Component {

  render() {
    if (!this.props.slug) {
      return (
        <MainListContainer>
          <SubListContainer className="Listfeedback">
            <Header as='h1' inverted>You don't appear to be in a team yet!</Header>
            <Divider hidden/>
            <Message negative>
              <Message.Header>
                Please wait for you team manager to approve your team request.
              </Message.Header>
              <p>Best Wishes - SpeakIncog Team</p>
            </Message>
            <Divider />
            <Message negative>
              <Message.Header>
                Tap the button below if you havent requested to join a team, yet.
              </Message.Header>
              <Divider hidden/>
              <Button
              content="Join/Create"
              onClick={() => this.props.history.push('/jointeam')}
              />
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
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { fetchAllTeamMembers }
  )(Dashboard)
);
