import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class PostFeedbackSuggestions extends React.Component {
  render() {
    return this.props.searchedEmails.map(res => <option value={res.email} />);
  }
}
const mapStateToProps = state => {
  return {
    searchedEmails: state.searchedEmails
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(PostFeedbackSuggestions)
);
