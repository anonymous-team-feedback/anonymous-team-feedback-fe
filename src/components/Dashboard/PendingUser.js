import React from 'react'
import { Card, Image, Button, Placeholder, Segment } from 'semantic-ui-react'
import { approvePending, declinePending } from '../../actions/joinTeamRequestActions'
import { connect } from 'react-redux'
class PendingUser extends React.Component {


    approveUser = (e) => {
        e.preventDefault()
        this.props.approvePending({
            slug: this.props.slug,
            approved: this.props.approved,
            user: this.props.id
        },
            this.props.userId,
            this.props.requestId)
    }

    declineUser = (e) => {
        e.preventDefault()
        this.props.declinePending(this.props.requestId, this.props.slug)
    }

    render() {
        const { loading } = this.props
        return (
            <Card >
                {!loading &&
                    <>
                        <Card.Content >
                            <Image
                                circular
                                floated='right'
                                size='mini'
                                src='https://i.ibb.co/LzcSng1/anonymous-avatar-icon-5.png'
                            />
                            <Card.Header >{`${this.props.user.firstName} ${this.props.user.lastName}`}</Card.Header>
                            <Card.Meta>{this.props.user.jobTitle}</Card.Meta>
                            <Card.Description>
                                {`${this.props.user.firstName} would like to join the team`}
                            </Card.Description>
                        </Card.Content>

                        <Card.Content extra>
                            <div className='ui two buttons'>
                                <Button
                                    color='green'
                                    onClick={this.approveUser}
                                >Approve</Button>
                                <Button 
                                color='red'
                                onClick={this.declineUser}
                                >Decline</Button>
                            </div>
                        </Card.Content>
                    </>
                }

                {loading &&
                    <>
                        <Card.Content >
                            <Placeholder >
                                <Placeholder.Header image fluid>
                                    <Placeholder.Line length='medium'/>
                                    <Placeholder.Line length='very short'/>
                                </Placeholder.Header>
                            </Placeholder>
                        </Card.Content>

                        <Card.Content extra>
                            <div className='ui two buttons'>
                                <Button
                                disabled
                                    color='green'
                                >Approve</Button>
                                <Button disabled color='red'>Decline</Button>
                            </div>
                        </Card.Content>
                    </>
                }
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userId: state.usersReducer.user.user_id
    }
}

export default connect(mapStateToProps, { approvePending, declinePending })(PendingUser)