import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  PageDiv,
  MainListContainer,
  SubListContainer,
  H2,
} from "./teamMembersList-style.js";

import {Table} from "semantic-ui-react";

import {
  findTeamBySlug,
} from "../../actions/usersActions";

class TeamMembersList extends React.Component {


  componentDidMount() {
    this.props.findTeamBySlug(this.props.slug)
  }
 

  render() {
    
    return (
      <PageDiv className="JoinTeamRequest">
        <MainListContainer>
          <SubListContainer>
              <H2>
                Here's a list of your colleagues who have joined your InCog team
                to date:
              </H2>
              {(this.props.membersInfo && this.props.membersInfo.length > 0) && (
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
                    {this.props.membersInfo.map((member, index) => (
                      <Table.Row key={index}>
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
                </Table>
              </div>
              )}
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
    membersInfo: joinTeamRequestReducer.membersInfo,
    userInfo: usersReducer.userInfo,
    userFullInfo: usersReducer.userInfo,
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { findTeamBySlug}
  )(TeamMembersList)
);
