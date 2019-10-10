
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getTeamByID , fetchAllRequests } from "../../actions/pendingTeamRequestActions.js";
import {
  MainListContainer,
  SubListContainer,
  H2
} from "./pendingTeamRequest-style.js";

import {
  Menu,
  Table,
  Message,
  Pagination,
  Button,
  Card,
  Image
} from "semantic-ui-react";

class PendingTeamRequest extends React.Component {
    state = {
        request: [],
        slug: this.props.slug,
        id: this.props.id,
        page: 1,
        itemsPerPage: 4
    };

    componentDidMount() {
        let userID = { 
            id: this.state.id
        };
        console.log(userID);
        this.props.getTeamByID(userID);

        let teamSlug = { 
            slug: this.state.slug
        };
        console.log(teamSlug);
        this.props.fetchAllRequests(teamSlug);

        console.log(this.state.request);
    };

    setPageNumber = (e, { activePage }) => {
        this.setState({ page: activePage });
    };

    render() {
        const { itemsPerPage } = this.state;
        const { page } = this.state;
        const totalPages = Math.floor(this.props.requests.length / itemsPerPage);
        const items = this.props.requests.slice(
        (page - 1) * itemsPerPage,
        (page - 1) * itemsPerPage + itemsPerPage
        );

        return (
        <MainListContainer>
            <SubListContainer className="PendingRequests">
                <H2>Pending Team Member Requests</H2>
                {/* {this.props.requests.length > 0 ? ( */}
                <div>
                    <Card.Group>

                        {items.map((request, index) => (
                            
                            // --Example Template Card -- //

                            <Card>
                                <Card.Content>
                                    <Image
                                    floated='right'
                                    size='mini'
                                    src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                                    />
                                    <Card.Header>{request.user.firstName} {request.user.lastName}</Card.Header>
                                    <Card.Meta>{request.user.jobTitle}</Card.Meta>
                                    <Card.Description>
                                    <strong>{request.user.firstName}</strong> has requested to join your team.
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <div className='ui two buttons'>
                                    <Button basic color='green'>
                                        Approve
                                    </Button>
                                    <Button basic color='red'>
                                        Decline
                                    </Button>
                                    </div>
                                </Card.Content>
                            </Card>
                            ))}


                        {/* DUMMY CARDS START */}
                        {/* <Card>
                        <Card.Content>
                            <Image
                            floated='right'
                            size='mini'
                            src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                            />
                            <Card.Header>John Doe</Card.Header>
                            <Card.Meta>Front End Developer</Card.Meta>
                            <Card.Description>
                            <strong>John</strong> has requested to join your team.
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui two buttons'>
                            <Button basic color='green'>
                                Approve
                            </Button>
                            <Button basic color='red'>
                                Decline
                            </Button>
                            </div>
                        </Card.Content>
                        </Card>

                        <Card>
                        <Card.Content>
                            <Image
                            floated='right'
                            size='mini'
                            src='https://react.semantic-ui.com/images/avatar/large/molly.png'
                            />
                            <Card.Header>Jane Doe</Card.Header>
                            <Card.Meta>UI Designer</Card.Meta>
                            <Card.Description>
                            <strong>Jane</strong> has requested to join your team.
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui two buttons'>
                            <Button basic color='green'>
                                Approve
                            </Button>
                            <Button basic color='red'>
                                Decline
                            </Button>
                            </div>
                        </Card.Content>
                        </Card>

                        <Card>
                        <Card.Content>
                            <Image
                            floated='right'
                            size='mini'
                            src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
                            />
                            <Card.Header>Mary Lawrence</Card.Header>
                            <Card.Meta>Back End Developer</Card.Meta>
                            <Card.Description>
                            <strong>Mary</strong> has requested to join your team.
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui two buttons'>
                            <Button basic color='green'>
                                Approve
                            </Button>
                            <Button basic color='red'>
                                Decline
                            </Button>
                            </div>
                        </Card.Content>
                        </Card>

                        <Card>
                        <Card.Content>
                            <Image
                            floated='right'
                            size='mini'
                            src='https://react.semantic-ui.com/images/avatar/large/matthew.png'
                            />
                            <Card.Header>Matt Smith</Card.Header>
                            <Card.Meta>UX Designer</Card.Meta>
                            <Card.Description>
                            <strong>Matt</strong> has requested to join your team.
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui two buttons'>
                            <Button basic color='green'>
                                Approve
                            </Button>
                            <Button basic color='red'>
                                Decline
                            </Button>
                            </div>
                        </Card.Content>
                        </Card> */}
                        {/* DUMMY CARDS END */}

                    </Card.Group>

                    {/* -- PAGINATION START ---

                    <Table celled>
                        <Table.Body className="submittedRequests">
                        {items.map((request, index) => (
                            <Table.Row>
                            <Table.Cell width={2}>
                                {request}
                            </Table.Cell>
                            <Table.Cell width={8} key={index}>
                                " {request.team} "
                            </Table.Cell>
                            </Table.Row>
                        ))}
                        </Table.Body>

                        <Table.Footer className="pendingRequestsPageNav">
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
                    </Table> */}

                </div>

            {/* ) : (
                <Message negative>
                <Message.Header>
                    It doesn't look like you have any request
                </Message.Header>
                <p>Maybe ask a coworker send you one?</p>
                </Message>
            )} */}

            </SubListContainer>
        </MainListContainer>
        );
    }
    }

const MapStateToProps = state => {
    const { usersReducer, pendingTeamRequestReducer ,  joinTeamRequestReducer } = state ;

    return {
        id: usersReducer.user._id,
        slug: joinTeamRequestReducer.slug,
        requests: pendingTeamRequestReducer.requests,
        loading: pendingTeamRequestReducer.loading,
    };
};

export default withRouter(
    connect(
        MapStateToProps,
        { getTeamByID , fetchAllRequests }
    )(PendingTeamRequest)
);