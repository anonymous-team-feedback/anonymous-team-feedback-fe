import React from "react";
import { connect } from "react-redux";

const PostFeedback = props => {
  return (
    <div className="PostFeedback">
      <h1>PostFeedback component📝</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  {}
)(PostFeedback);
