import React from 'react'
import { connect } from 'react-redux'
import { Header, CardGroup, Card, Image, Button, Divider, Segment, Placeholder, Message } from 'semantic-ui-react'
import { MainListContainer, SubListContainer } from '../ListFeedback/listFeedback-style'
import { getPending } from '../../actions/joinTeamRequestActions'
import PendingUser from './PendingUser'

class Pending extends React.Component {

    componentDidMount() {
        this.props.getPending(this.props.slug)
    }

    render() {
        return (
            <MainListContainer>
                <SubListContainer>
                    <Header as='h1' inverted>Pending team requests</Header>
                    <Card.Group centered >
                        {this.props.pendingUsers && this.props.pendingUsers.map(user => {
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
                                )
                            }
                        })}

                        {this.props.pendingUsersLoading &&
                            <PendingUser loading/>
                        }

                        {this.props.pendingUsersError &&
                            <Message

                                color='red'
                                header='Theres was an error fetching requests'
                            />
                        }

                        {(this.props.pendingUsers && this.props.pendingUsers.length < 1) &&
                            <Message
                                compact
                                size='mini'
                                header='Looks like you have no pending requests!'
                            />
                        }
                    </Card.Group>
                </SubListContainer>
            </MainListContainer>
        )
    }
}

const mapStateToProps = state => {
    return {
        slug: state.joinTeamRequestReducer.slug,
        user: state.usersReducer.user,

        pendingUsers: state.joinTeamRequestReducer.pendingUsers,
        pendingUsersLoading: state.joinTeamRequestReducer.pendingUsersLoading,
        pendingUsersError: state.joinTeamRequestReducer.pendingUsersError
    }
}

export default connect(mapStateToProps, { getPending })(Pending)