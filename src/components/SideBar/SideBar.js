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
        showSend: false,

        animation: 'overlay',
        direction: 'left',
        dimmed: false,
        visible: false
        
    }

    componentDidMount() {
      if(this.props.userId !== this.props.managerId) {
        this.showFeedback();
      }

      if(this.props.userId === this.props.managerId) {
        this.showFeedback();
      }
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

  handleAnimationChange = (animation) => () =>
  this.setState((prevState) => ({ animation, visible: !prevState.visible }))


  render() {
    const { animation, dimmed, direction, visible } = this.state
    const vertical = direction === 'bottom' || direction === 'top'

      return(

        <Sidebar.Pushable as={Segment} id="sidebar">
        <Sidebar
          as={Menu}
          animation="slideout"
        //   direction={direction}
          visible
          icon="labeled"
          inverted
          vertical
          width="thin"
        >

          {(this.props.userId === this.props.managerId) && (
            <Menu.Item as="a"
          onClick={ () => {
              this.showPending(); 
            //   this.handleAnimationChange('slide out');
            }}>
            <Icon name="home" />
            Pending Team Request
          </Menu.Item>
          )}
          

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
  
        <Sidebar.Pusher id="main-content">
          <Segment  basic textAlign="center" id="showing-content">
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
