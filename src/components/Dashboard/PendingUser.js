import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import {approvePending} from '../../actions/joinTeamRequestActions'
import {connect} from 'react-redux'
class PendingUser extends React.Component {


    approveUser =(e) => {
        e.preventDefault()
        this.props.approvePending({
            slug: this.props.slug,
            approved: this.props.approved,
            user: this.props.id
        },
       this.props.userId )
    }

    render() {
        return (
            <Card >
                <Card.Content >
                    <Image
                        circular
                        floated='right'
                        size='mini'
                        src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                    />
                    <Card.Header >{`${this.props.user.firstName} ${this.props.user.lastName}`}</Card.Header>
                    <Card.Meta>Join Team Request</Card.Meta>
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
                        <Button disabled  color='red'>Decline</Button>
                    </div>
                </Card.Content>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userId: state.usersReducer.user.user_id
    }
}

export default connect(mapStateToProps, {approvePending})(PendingUser)