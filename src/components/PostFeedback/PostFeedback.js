import React from "react";
import { connect } from "react-redux";
import { Form, Modal, Icon, Header, Input } from "semantic-ui-react";
import {
  DateInput,
  TimeInput,
  DateTimeInput,
  DatesRangeInput
} from "semantic-ui-calendar-react";

class PostFeedback extends React.Component {
  state = {};
  render() {
    return (
      <div className="PostFeedback">
        <h2>Send feedback to others</h2>
        <p>Start typing a colleague's email address to send them feedback</p>
        <form onSubmit={this.handleSubmit}>
          <Form>
            <Input
              type="email"
              name="email"
              value={this.state.email}
              placeholder="mycolleague@myorgization.com"
            />
          </Form>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  {}
)(PostFeedback);
