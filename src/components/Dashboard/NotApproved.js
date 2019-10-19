import React from 'react'
import { MainListContainer, SubListContainer } from '../ListFeedback/listFeedback-style'
import { Header, Divider, Message, Button } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'

class NotApproved extends React.Component {

    render(){
        return(
            <MainListContainer>
            <SubListContainer className="Listfeedback">
              <Header as='h1' inverted>You don't appear to be in a team yet!</Header>
              <Divider hidden/>
              <Message negative>
                <Message.Header>
                  Please wait for you team manager to approve your team request.
                </Message.Header>
                <p>Best Wishes - SpeakIncog Team</p>
              </Message>
              <Divider />
              <Message negative>
                <Message.Header>
                  Tap the button below if you haven't requested to join a team, yet.
                </Message.Header>
                <Divider hidden/>
                <Button
                content="Join/Create"
                onClick={() => this.props.history.push('/jointeam')}
                />
              </Message>
            </SubListContainer>
          </MainListContainer>
        )
    }
}

export default withRouter(NotApproved)