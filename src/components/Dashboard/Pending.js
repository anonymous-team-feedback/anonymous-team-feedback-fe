import React from 'react'
import { connect } from 'react-redux'
import { Header, CardGroup, Card, Image, Button } from 'semantic-ui-react'
import { MainListContainer, SubListContainer } from '../ListFeedback/listFeedback-style'
import {getPending} from '../../actions/joinTeamRequestActions'
import User from './user'

class Pending extends React.Component {

    componentDidMount(){
        this.props.getPending(this.props.slug)
    }

    render() {
        return (
            <MainListContainer>
                <SubListContainer>
                    <Header as='h1' inverted>Pending team requests</Header>
                    <Card.Group centered>
                        {this.props.pending.map(user => {
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
                    </Card.Group>
                </SubListContainer>
            </MainListContainer>
        )
    }
}

const mapStateToProps = state => {
    return {
        slug: state.joinTeamRequestReducer.slug,
        pending: state.joinTeamRequestReducer.pending
    }
}

export default connect(mapStateToProps, {getPending})(Pending)