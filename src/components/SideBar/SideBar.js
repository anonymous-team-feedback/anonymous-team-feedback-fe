import React from "react";
import { connect } from "react-redux";
import { Link , withRouter } from "react-router-dom";
import { Header, Icon, Image, Menu, Segment, Sidebar } from "semantic-ui-react";
import Dashboard from "../Dashboard/Dashboard.js";
import ListFeedback from "../ListFeedback/ListFeedback.js";
import PostFeedback from "../PostFeedback/PostFeedback.js";
import TeamMembersList from "../TeamMembersList/TeamMembersList.js";
import NotApproved from "../Dashboard/NotApproved.js";
import Pending from "../Dashboard/Pending.js";

class SideBar extends React.Component {
    state = {
        showPending: true,
        showTeam: false,
        showFeedback: false,
        showSend: false
    }

      // onClick hides team forms and display team members list to dashboard
  showPending = () => {
    this.setState({ showPending: true });
    this.setState({ showTeam: false });
    this.setState({ showFeedback: false });
    this.setState({ showSend: false });
  };

  showTeam = () => {
    this.setState({ showPending: false });
    this.setState({ showTeam: true });
    this.setState({ showFeedback: false });
    this.setState({ showSend: false });
  };

  showFeedback = () => {
    this.setState({ showPending: false });
    this.setState({ showTeam: false });
    this.setState({ showFeedback: true });
    this.setState({ showSend: false });
  };

  showSend = () => {
    this.setState({ showPending: false });
    this.setState({ showTeam: false });
    this.setState({ showFeedback: false });
    this.setState({ showSend: true });
  };



  render() {
      return(
        <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation="slideout"
          icon="labeled"
          inverted
          vertical
          visible
          width="thin"
        >
          <Menu.Item as="a" to="/pending" onClick={this.showPending}>
            <Icon name="home" />
            Pending Team Request
          </Menu.Item>
          <Menu.Item as="a" to="/teamlist" onClick={this.showTeam}>
            <Icon name="address book" />
            Team Members List
          </Menu.Item>
          <Menu.Item as="a" to="/listfeedback" onClick={this.showFeedback}>
            <Icon name="archive" />
            My Feedback
          </Menu.Item>
          <Menu.Item as="a"  to="/postfeedback" onClick={this.showSend}>
            <Icon name="pencil alternate" />
            Send Feedback
          </Menu.Item>
        </Sidebar>
  
        <Sidebar.Pusher>
          <Segment  basic textAlign="center">
          { this.state.showPending && this.props.managerId === this.props.userId ? (
            <Pending/>
          ) : null }

            { this.state.showTeam ? (
              <TeamMembersList />
          ) : null }

            { this.state.showFeedback ? (
            <ListFeedback />
          ) : null }

            { this.state.showSend ? (
            <PostFeedback />
          ) : null }
            
            


            </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
      )
  }
};

const mapStateToProps = state => {
    return {
        slug: state.joinTeamRequestReducer.slug,
        managerId: state.joinTeamRequestReducer.manager,
        userId: state.usersReducer.user.user_id,
        teamJoined: state.joinTeamRequestReducer.teamJoined,
        teamSubmitted: state.joinTeamRequestReducer.teamSubmitted,
        members: state.joinTeamRequestReducer.members
    };
  };

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(SideBar)
);
