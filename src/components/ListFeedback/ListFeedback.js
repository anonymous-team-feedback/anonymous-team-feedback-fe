import React from "react";
import { connect } from "react-redux";

const ListFeedback = props => {
  return (
    <div className="Listfeedback">
      <h1>ListFeedback component👂</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  {}
)(ListFeedback);
