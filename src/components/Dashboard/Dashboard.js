import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import ListFeedback from "../ListFeedback/ListFeedback.js";
import PostFeedback from "../PostFeedback/PostFeedback.js";


const Dashboard = props => {
  return (
    <div className="Dashboard">
      <ListFeedback />
      <PostFeedback />
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(Dashboard)
);
