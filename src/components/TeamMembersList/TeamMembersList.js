import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  PageDiv,
  CreateTeamLandingPage,
  TeamCreationContainer,
  Input,
  MainListContainer,
  SubListContainer,
  H2,
  H1,
  P
} from "./teamMembersList-style.js";
import { Button, Header, Icon, Modal, Form } from "semantic-ui-react";

import { Menu, Table, Message, Pagination } from "semantic-ui-react";

import {
  getMembersInfo
} from "../../actions/usersActions";

class TeamMembersList extends React.Component {
  state = {
    page: 1,
    itemsPerPage: 10,
    team: "",
    slug: "",
    existingSlug: "",
    members: [],
    membersInfo: []
  };

  componentDidMount() {
    console.log(this.props.members);
    const getMembersInfo = [];
    const getInfo = this.props.getMembersInfo(this.props.members[0]);

    getMembersInfo.push(getInfo);

    // .map(member => {
    //   getMembersInfo.push(this.props.getMembersInfo(member))
    // });

    console.log("this is getMembersInfo:",getMembersInfo);
    console.log("this is props.memberInfo:", this.props.memberInfo);


    this.setState({
      membersInfo: getMembersInfo
    });
    console.log("this is members:", this.state.membersInfo);
  };


  // fetches all team members
  fetchAllTeamMembersInfo = () => {
    this.props.getMembersInfo()
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { itemsPerPage } = this.state;
    const { page } = this.state;
    const totalPages = Math.floor(this.state.membersInfo.length / itemsPerPage);
    const items = this.state.membersInfo.slice(
      (page - 1) * itemsPerPage,
      (page - 1) * itemsPerPage + itemsPerPage
    );
    return (
      <PageDiv className="JoinTeamRequest">
        {/* shows list of team members, if joining an existing team */}
        <MainListContainer>
          <SubListContainer>
              <H2>
                Here's a list of your colleagues who have joined your InCog team
                to date:
              </H2>
              <div>
                <Table unstackable>
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
                    {items.map((member, index) => (
                      <Table.Row>
                        <Table.Cell width={2}>
                          {member.firstName} {member.lastName}
                        </Table.Cell>
                        <Table.Cell width={4}>{member.email}</Table.Cell>
                        <Table.Cell width={4} key={index}>
                          {member.jobTitle}
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
              </div>

          </SubListContainer>
        </MainListContainer>
      </PageDiv>
    );
  }
}

const mapStateToProps = state => {
  const { usersReducer, joinTeamRequestReducer } = state;
  return {
    team: joinTeamRequestReducer.team,
    members: joinTeamRequestReducer.members,
    slug: joinTeamRequestReducer.slug,
    memberInfo: usersReducer.member
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getMembersInfo }
  )(TeamMembersList)
);
