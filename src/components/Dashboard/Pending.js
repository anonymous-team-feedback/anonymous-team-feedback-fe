import React from 'react'
import { connect } from 'react-redux'
import { Header, CardGroup, Card, Image, Button, Divider } from 'semantic-ui-react'
import { MainListContainer, SubListContainer } from '../ListFeedback/listFeedback-style'
import {getPending} from '../../actions/joinTeamRequestActions'
import User from './User'

class Pending extends React.Component {

    componentDidMount(){
        this.props.getPending(this.props.slug)
    }

    render() {
        return (
            <MainListContainer>
                <SubListContainer>
                    <Header as='h1' inverted>Pending team requests</Header>
                    <Card.Group centered >
                        {this.props.pendingUsers && this.props.pendingUsers.map(user => {
                            if(!user.approved){
                                return (
                                    <User
                                    user={user.user}
                                    approved={user.approved}
                                    id={user._id}
                                    key={user._id}
                                    team={user.team}
                                    slug={this.props.slug}
                                    />
                                )
                            }
                        })}

                        {!this.props.pendingUsers && 
                        <>
                        <Divider/>
                        <Header  inverted as='h1'>There are no pending users</Header>
                        </>
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
        pendingUsers: state.joinTeamRequestReducer.pendingUsers,
        user: state.usersReducer.user
    }
}

export default connect(mapStateToProps, {getPending})(Pending)