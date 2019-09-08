import React from "react";
import { connect } from "react-redux";
import {
  PageDiv,
  PostContainer,
  NameDateContainer,
  H2,
  P,
  FormGroup
} from "./postFeedback-style.js";
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
    return this.state.feedback.length > 1 && this.state.email.length > 1 && this.state.date;
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
      <PostContainer>
        <PageDiv className="PostFeedback">
          <H2>Send feedback to others</H2>
          <P>Start typing a colleague's email address to send them feedback</P>
          
          <FormGroup onSubmit={this.handleSubmit}>

            <NameDateContainer>
                <Dropdown
                  className="DropDownNameInput"
                  placeholder="mycolleague@myorganization.com"
                  onSearchChange={this.handleDropdownSearch}
                  onChange={this.handleDropdownChange}
                  fluid
                  search
                  selection
                  options={this.props.transformedSearchedEmails}
                  value={this.state.email}
                />

                <DateInput
                  className="DateInput"
                  name="date"
                  placeholder="Date"
                  value={this.state.date}
                  iconPosition="left"
                  onChange={this.handleDateChange}
                />
            </NameDateContainer>

              <Input
                className="FeedbackInput"
                type="feedback"
                name="feedback"
                value={this.state.feedback}
                placeholder="You should really start/stop/keep..."
                onChange={this.handleChange}
              />
            <Button className="FeedbackButton" type="submit" color="teal" disabled={!this.validateForm()}>
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
            
          </FormGroup>
        </PageDiv>
    </PostContainer>
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
