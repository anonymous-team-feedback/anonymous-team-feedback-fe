import React from "react";
import { connect } from "react-redux";
import { Form, Modal, Icon, Header } from "semantic-ui-react"
import {
  DateInput,
  TimeInput,
  DateTimeInput,
  DatesRangeInput
} from 'semantic-ui-calendar-react';


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
)(PostFeedback)