import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import SideBar from "../SideBar/SideBar.js";
import NotApproved from "./NotApproved.js";


class Dashboard extends React.Component {

  render() {

    if (this.props.members && this.props.members.includes(this.props.userId)) {
      return (
        <div className="Dashboard"> 
        <SideBar />
        </div>
      );
    }else{
      return (
        <NotApproved/>
      )
    }
  }
};

const mapStateToProps = state => {
  return {
    slug: state.joinTeamRequestReducer.slug,
    managerId: state.joinTeamRequestReducer.manager,
    userId: state.usersReducer.user.user_id,
    members: state.joinTeamRequestReducer.members
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    {  }
  )(Dashboard)
);
