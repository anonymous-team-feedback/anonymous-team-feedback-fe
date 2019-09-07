import React from "react";
import { connect } from "react-redux";
import {
  Form,
  Modal,
  Icon,
  Header,
  Input,
  Button,
  Dropdown,
  Message
} from "semantic-ui-react";
import {
  DateInput,
  TimeInput,
  DateTimeInput,
  DatesRangeInput
} from "semantic-ui-calendar-react";
import moment from "moment";
import { searchEmails } from "../../actions/usersActions.js";
import { submitFeedback } from "../../actions/postsActions.js";
import { withRouter } from "react-router-dom";

class PostFeedback extends React.Component {
  state = {
    email: "",
    date: "",
    feedback: "",
    searchQuery: "",
    selected: "",
    showSuccessMessage: false
  };

  handleDateChange = (event, { name, value }) => {
    console.log("hdc value: " + value);
    if (this.state.hasOwnProperty(name)) {
      this.setState({
        [name]: value,
        showSuccessMessage: false
      });
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      showSuccessMessage: false
    });
  };

  validateForm() {
    return this.state.feedback.length > 20 && this.state.date;
  }

  handleDropdownSearch = e => {
    this.setState(
      {
        searchQuery: e.target.value,
        showSuccessMessage: false
      },
      () => {
        if (this.state.searchQuery && this.state.searchQuery.length > 1) {
          if (this.state.searchQuery.length % 2 === 0) {
            this.props.searchEmails(this.state.searchQuery);
          }
        }
      }
    );
  };

  handleDropdownChange = (e, { value }) => this.setState({ email: value });

  handleSubmit = e => {
    e.preventDefault();
    let newFeedback = {
      date: moment(this.state.date, "DD-MM-YYYY").format(),
      post: this.state.feedback,
      poster: localStorage.getItem("_id"),
      colleague: this.state.email
    };
    console.log(newFeedback);
    this.props.submitFeedback(newFeedback);
    this.setState({
      date: "",
      feedback: "",
      email: "",
      showSuccessMessage: true
    });
  };

  render() {
    return (
      <div className="PostFeedback">
        <h2>Send feedback to others</h2>
        <p>Start typing a colleague's email address to send them feedback</p>
        <form onSubmit={this.handleSubmit}>
          <Form>
            <Dropdown
              placeholder="mycolleague@myorganization.com"
              onSearchChange={this.handleDropdownSearch}
              onChange={this.handleDropdownChange}
              fluid
              search
              selection
              options={this.props.transformedSearchedEmails}
              value={this.state.email}
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
              onKeyPress={e => {
                e.key === "Enter" && e.preventDefault();
              }}
            />
          </Form>
          <Button type="submit" color="teal" disabled={!this.validateForm()}>
            Send
          </Button>
          <div>
            {this.state.showSuccessMessage && (
              <Message positive>
                <Message.Header>
                  You have successfully submitted feedback.
                </Message.Header>
                <p>You are a true hero.</p>
              </Message>
            )}
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ usersReducer: state }) => {
  return {
    searchedEmails: state.searchedEmails,
    transformedSearchedEmails: state.transformedSearchedEmails
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { searchEmails, submitFeedback }
  )(PostFeedback)
);
