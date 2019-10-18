import React from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'

import {
  PageDiv,
  CreateTeamLandingPage,
  TeamCreationContainer,
  Input,
  MainListContainer,
  SubListContainer,
  H2,
  H1,
  P,
} from "./joinTeamRequest-style.js";
import { Button, Header, Icon, Modal, Form, Grid, Divider, Segment } from "semantic-ui-react";

import { Menu, Table, Message, Pagination } from "semantic-ui-react";

import {
  submitJoinExistingTeam,
  submitCreateNewTeam,
  fetchAllTeamMembers
} from "../../actions/joinTeamRequestActions";

class JoinTeamRequest extends React.Component {
  state = {
    page: 1,
    itemsPerPage: 10,
    team: "",
    slug: "",
    existingSlug: "",
    members: [],
    modalOpen: false,
    showCreateTeam: true, //toggles show Create Team Form
    showDashboardJoined: false, //toggles if you joined a team
    showDashboardCreated: false // toggles if you created a team
  };

  handleModalOpen = () => {
    this.setState({ modalOpen: true });
  };

  handleModalClose = () => {
    this.setState({ modalOpen: false });
    this.props.history.push("/dashboard");
  };

  // fetches all team members
  fetchAllTeamMembers = () => {
    this.props.fetchAllTeamMembers();
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
      // showSuccessMessage: false
    });
  };

  // onClick hides team forms and display team members list to dashboard
  showDashboardJoined = () => {
    const { showDashboardJoined } = this.state;
    const { showCreateTeam } = this.state;

    this.setState({ showCreateTeam: !showCreateTeam });
    this.setState({ showDashboardJoined: !showDashboardJoined });
  };

  // onClick hides team forms and shows newly created team landing page to dashboard
  showDashboardCreated = () => {
    const { showDashboardCreated } = this.state;
    const { showCreateTeam } = this.state;

    this.setState({ showCreateTeam: !showCreateTeam });
    this.setState({ showDashboardCreated: !showDashboardCreated });
  };

  // Push to Dashboard
  handleDashboard = () => {
    this.props.history.push("/dashboard");
  };

  // Push to Login
  handleToLogin = () => {
    this.props.history.push("/login");
  };

  // Handle Submit for Joining a Team
  handleSubmitJoinTeam = e => {
    const newSlug = {
      slug: this.state.existingSlug
    }
    this.props.submitJoinExistingTeam(newSlug);
  };

  // Handle Submit for Create a Team Name
  handleSubmitCreateTeam = e => {
    let newTeamInfo = {
      name: this.state.name,
      slug: this.state.slug
    };
    console.log(newTeamInfo);
    this.props.submitCreateNewTeam(newTeamInfo);
  };

  validateForm = () =>
    this.state.newUser.firstName.length > 2 &&
    this.state.newUser.lastName.length > 2 &&
    this.state.newUser.email.length > 5 &&
    this.state.newUser.password.length > 5 &&
    this.state.newUser.jobTitle.length > 5;

  render() {
    if (!this.props.isLoggedIn) this.props.history.push('/login');
    if (this.props.teamJoined || this.props.teamSubmitted) this.props.history.push('/dashboard');
    const { itemsPerPage } = this.state;
    const { page } = this.state;
    const totalPages = this.props.members ? Math.floor(this.props.members.length / itemsPerPage) : 0;
    const items = this.props.members ? this.props.members.slice(
      (page - 1) * itemsPerPage,
      (page - 1) * itemsPerPage + itemsPerPage
    ) : 0;

    return (
      <PageDiv className="JoinTeamRequest">
        {/* Join/ Create Team Form */}
        {this.state.showCreateTeam ? (
          <Form >
            <Segment basic padded='very' >
              <Grid columns={2} relaxed stackable>
                <Grid.Column >
                  <Form.Field id="jointeamfield">
                    <H2 color="white">Join an existing team</H2>
                    <P>
                      Type the exact name of your team nick name here (should be all
                      lower case with no spaces).
                </P>
                    <Input
                      type="text"
                      name="existingSlug"
                      id="JoinExistingTeamFormSlug"
                      value={this.state.existingSlug}
                      onChange={this.handleChange}
                      placeholder="Existing Team Nick Name"
                    />
                  </Form.Field>

                  <Button
                    className="ExistingTeamNextButton"
                    type="submit"
                    onClick={() => {
                      this.handleSubmitJoinTeam();
                    }}
                  >
                    Next
              </Button>
                  {this.props.joiningExistingTeamError &&
                    <Message
                      color='red'
                      header='You have already sent a request to join this team'
                      content='Please be patient for the manager to approve or deny your request'
                    />
                  }
                </Grid.Column>

                <Grid.Column verticalAlign='middle'>
                  {/* Create New Team Form  */}
                  <Form.Field id="jointeamfield">
                    <H2 color="white">Create a new team</H2>
                    <P>
                      An InCog team is a group of colleagues who can give, receive,
                      and request anonymous feedback. When you create a team, you'll
                      be added to the team as an administrator.
                </P>

                    <P>Please enter a team name below:</P>

                    <Input
                      type="text"
                      name="name"
                      id="CreateNewTeamFormName"
                      value={this.state.name}
                      onChange={this.handleChange}
                      placeholder="Team Name"
                    />
                  </Form.Field>

                  <Form.Field id="jointeamfield">
                    <P>Please enter a team nick name here (should be all
                      lower case with no spaces):</P>
                    <Input
                      type="text"
                      name="slug"
                      id="CreateNewTeamFormSlug"
                      value={this.state.slug}
                      onChange={this.handleChange}
                      placeholder="Team Nick Name"
                    />
                  </Form.Field>

                  <Modal
                    trigger={
                      <Button
                        className="CreateTeamNextButton"
                        type="submit"
                        onClick={() => {
                          this.handleSubmitCreateTeam();
                        }}
                      >
                        Next
                  </Button>
                    }
                    open={this.state.modalOpen}
                    onClose={this.handleModalClose}
                    basic
                    size="small"
                  >
                    
                    <Header icon="browser" content="Create Team"></Header>
                    <Modal.Content>
                      <h3>You have successfully joined a team.</h3>
                    </Modal.Content>
                    <Modal.Actions>
                      <Button
                        className="VerifyTeamButton"
                        color="teal"
                        onClick={this.handleModalClose}
                        inverted
                      >
                        <Icon name="checkmark"></Icon> Got it
                  </Button>
                    </Modal.Actions>
                  </Modal>
                  {this.props.submitNewTeamError && (
                      // error message
                     <Message
                     color='red'
                       header='Error'
                       content='Please choose another team name. The one you want is already
                                taken'
                      />
                       )}
                </Grid.Column>     
              </Grid>
                    <Divider vertical inverted>OR</Divider>
            </Segment>
          </Form>
        ) : null}

        {/* Next page after joining existing team or creating a new team */}

        {/* shows list of team members, if joining an existing team */}
        {this.state.showDashboardJoined ? (
          <MainListContainer>
            <SubListContainer>
              <div>
                <H2>
                  Here's a list of your colleagues who have joined your InCog
                  team to date:
                </H2>

                {this.state.members.length > 0 ? (
                  <div>
                    <Table celled>
                      <Table.Header>
                        <Table.Row>
                          <Table.HeaderCell className="name-tab" width={2}>
                            Name
                          </Table.HeaderCell>
                          <Table.HeaderCell className="email-tab" width={4}>
                            Email
                          </Table.HeaderCell>
                          <Table.HeaderCell className="title-tab" width={4}>
                            Title
                          </Table.HeaderCell>
                        </Table.Row>
                      </Table.Header>

                      {/* Mapping out members */}

                      <Table.Body className="TeamMembersList">
                        {items.map((members, index) => (
                          <Table.Row>
                            <Table.Cell width={2}>
                              {members.firstName} {members.lastName}
                            </Table.Cell>
                            <Table.Cell width={4}>{members.email}</Table.Cell>
                            <Table.Cell width={4} key={index}>
                              {members.jobTitle}
                            </Table.Cell>
                          </Table.Row>
                        ))}
                      </Table.Body>

                      {/* Pagination for Members List */}

                      <Table.Footer className="TeamMembersPageNav">
                        <Table.Row>
                          <Table.HeaderCell colSpan="3">
                            <Menu pagination>
                              <Menu.Item as="a" icon>
                                <Pagination
                                  activePage={page}
                                  totalPages={totalPages}
                                  siblingRange={1}
                                  onPageChange={this.setPageNumber}
                                />
                              </Menu.Item>
                            </Menu>
                          </Table.HeaderCell>
                        </Table.Row>
                      </Table.Footer>
                    </Table>

                    <Button
                      className="ToDashboardButton"
                      onClick={this.handleDashboard}
                    >
                      Take me to my dashboard
                    </Button>
                  </div>
                ) : (
                    // shows message if no team members in existing team currently
                    <Message negative>
                      <Message.Header>
                        It doesn't look like any members of your team have joined
                        InCog yet.
                    </Message.Header>
                      <p>Go tell them to sign up!</p>
                      <Button
                        className="ToDashboardButton"
                        onClick={this.handleDashboard}
                      >
                        Take me to my dashboard
                    </Button>
                    </Message>
                  )}
              </div>
            </SubListContainer>
          </MainListContainer>
        ) : null}

        {/* shows dashboard option after a new team is created */}
        {this.state.showDashboardCreated ? (
          <MainListContainer>
            <SubListContainer>
              <Message>
                <Message.Header>
                  You have successfully created a new team, but will need other
                  members to join.
                </Message.Header>
                <p>Go ahead and tell them to sign up!</p>

                <Button
                  className="ToDashboardButton"
                  onClick={this.handleDashboard}
                >
                  Take me to my dashboard
                </Button>
              </Message>
            </SubListContainer>
          </MainListContainer>
        ) : null}
      </PageDiv>
    );
  }
}

const mapStateToProps = state => {
  const { usersReducer, postsReducer, joinTeamRequestReducer } = state
  return {
    submitNewTeamError: joinTeamRequestReducer.submitNewTeamError,
    createTeamNameError: joinTeamRequestReducer.createTeamNameError,
    team: joinTeamRequestReducer.team,
    members: joinTeamRequestReducer.members,
    slug: joinTeamRequestReducer.slug,
    existingSlug: joinTeamRequestReducer.existingSlug,
    isLoggedIn: usersReducer.isLoggedIn,
    joiningExistingTeamError: joinTeamRequestReducer.joiningExistingTeamError,
    teamJoined: joinTeamRequestReducer.teamJoined,
    teamSubmitted: joinTeamRequestReducer.teamSubmitted
  };
};

export default withRouter(connect(
  mapStateToProps,
  { submitJoinExistingTeam, submitCreateNewTeam, fetchAllTeamMembers }
)(JoinTeamRequest));
