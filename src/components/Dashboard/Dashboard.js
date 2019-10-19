import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import ListFeedback from "../ListFeedback/ListFeedback.js";
import PostFeedback from "../PostFeedback/PostFeedback.js";
import { Header, Message, Divider, Button } from "semantic-ui-react";

import { fetchAllTeamMembers } from '../../actions/joinTeamRequestActions'
import { MainListContainer, SubListContainer, H2 } from "../ListFeedback/listFeedback-style.js";
import NotApproved from "./NotApproved.js";
import Pending from "./Pending.js";


class Dashboard extends React.Component {

  render() {
    if (this.props.members.includes(this.props.userId)) {
      return (
        <div className="Dashboard"> 

          {this.props.managerId === this.props.userId && <Pending/>}
          <ListFeedback />
          <PostFeedback />
        </div>
      );
    } else {
      return <NotApproved/>
    }
  }
};

const mapStateToProps = state => {
  return {
    slug: state.joinTeamRequestReducer.slug,
    managerId: state.joinTeamRequestReducer.manager,
    userId: state.usersReducer.user.user_id,
    teamJoined: state.joinTeamRequestReducer.teamJoined,
    teamSubmitted: state.joinTeamRequestReducer.teamSubmitted,
    members: state.joinTeamRequestReducer.members
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { fetchAllTeamMembers }
  )(Dashboard)
);
