import React from "react";
import { connect } from "react-redux";
import {
  Header,
  CardGroup,
  Card,
  Message
} from "semantic-ui-react";
import {
  MainListContainer,
  SubListContainer,
  CardContainer
} from "../ListFeedback/listFeedback-style";
import { getPending } from "../../actions/joinTeamRequestActions";
import PendingUser from "./PendingUser";

class Pending extends React.Component {
  componentDidMount() {
    this.props.getPending(this.props.slug);
  }

  render() {
    return (
      <MainListContainer>
        <SubListContainer>
          <Header as="h1" inverted>
            Pending Team Requests
          </Header>
          <CardContainer>
          {(this.props.pendingUsersLoading && this.props.pendingUsersFinished === false) && (
              <div class="ui icon message">
                <i class="notched circle loading icon"></i>
                <div class="content">
                  <div class="header">Just one second</div>
                  <p>We're fetching that content for you.</p>
                </div>
              </div>
            )}
            
          <Card.Group centered>
            {this.props.pendingUsers &&
              this.props.pendingUsers.map(user => {
                if (!user.approved) {
                  return (
                    <PendingUser
                      loading={false}
                      user={user.user}
                      approved={user.approved}
                      id={user.user._id}
                      key={user.user._id}
                      team={user.team}
                      slug={this.props.slug}
                      requestId={user._id}
                    />
                  );
                }
              })}

            {this.props.pendingUsersError && (
              <Message
                color="red"
                header="Theres was an error fetching requests"
              />
            )}
            
            {(this.props.pendingUsersFinished === true && this.props.pendingUsers.length < 1) && (
                <div>
                    <Message
                    compact
                    size="large"
                    header="Looks like you have no pending requests!"
                />
                <Message 
                color="teal"
                size="small"
                >
                    <Message.Header textAlign="left">Useful tip:</Message.Header>
                    Tell a team member to join! <br></br>
                    Your team nick name is: {this.props.slug}
                    </Message>
                </div>
                )}
          </Card.Group>
          </CardContainer>
        </SubListContainer>
      </MainListContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    slug: state.joinTeamRequestReducer.slug,
    user: state.usersReducer.user,
    pendingUsers: state.joinTeamRequestReducer.pendingUsers,
    pendingUsersLoading: state.joinTeamRequestReducer.pendingUsersLoading,
    pendingUsersFinished: state.joinTeamRequestReducer.pendingUsersFinished,
    pendingUsersError: state.joinTeamRequestReducer.pendingUsersError
  };
};

export default connect(
  mapStateToProps,
  { getPending }
)(Pending);
