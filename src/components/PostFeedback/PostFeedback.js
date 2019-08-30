import React from "react";
import { connect } from "react-redux";
import { Form, Modal, Icon, Header, Input, Button } from "semantic-ui-react";
import {
  DateInput,
  TimeInput,
  DateTimeInput,
  DatesRangeInput
} from "semantic-ui-calendar-react";
import moment from "moment";
import { searchEmails } from "../../actions/usersActions.js";
import { withRouter } from "react-router-dom";

class PostFeedback extends React.Component {
  state = {
    email: "",
    date: "",
    time: "",
    dateTime: "",
    datesRange: "",
    feedback: "",
    searchQuery: ""
  };

  handleDateChange = (event, { name, value }) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  validateForm() {
    return (
      this.state.email.length > 5 &&
      this.state.feedback.length > 20 &&
      this.state.date
    );
  }
  handleSearchAsYouType = e => {
    this.setState({
        searchQuery: this.searchEmail.value
      },
      () => {
        if (this.state.searchQuery && this.state.searchQuery.length > 1) {
          if (this.state.query.length % 2 === 0) {
            this.props.searchEmails();
          }
        }
      }
    );
  };

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
              placeholder="mycolleague@myorganization.com"
              onChange={this.handleSearchAsYouType}
              ref={Input => this.searchEmail = Input}
            />
          </Form>
          <Form>
            <DateInput
              name="date"
              placeholder="Date"
              value={this.state.date}
              iconPosition="left"
              onChange={this.handleDateChange}
            />
          </Form>
          <Form>
            <Input
              type="feedback"
              name="feedback"
              value={this.state.feedback}
              placeholder="You should really start/stop/keep..."
              onChange={this.handleChange}
            />
          </Form>
          <Button type="submit" color="teal" disabled={!this.validateForm()}>
            Send
          </Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { searchedEmails: state.searchedEmails };
};

export default withRouter(
  connect(
    mapStateToProps,
    { searchEmails }
  )(PostFeedback)
);
