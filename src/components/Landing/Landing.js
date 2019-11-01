import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  H1, 
  LandingContainer
} from "./landing-style.js";

import {
    Image,
    Transition
  } from "semantic-ui-react";

class Landing extends React.Component {
  state = { visible: true }

  toggleVisibility = () =>
    this.setState((prevState) => ({ visible: !prevState.visible }))

  render() {
    const { visible } = this.state
    if(this.props.isLoggedIn) this.props.history.push('/dashboard')

      return(
        // <Image src='https://www.imageupload.net/upload-image/2019/11/01/teal.jpg' fluid />
      <LandingContainer>
        <H1>
          "Building stronger teams -- when you speak incognito."
        </H1>
            {/* Animation for image */}
           <Transition visible={visible} animation='tada' duration={250}>

            <Image
              onClick={this.toggleVisibility}
              src='https://www.imageupload.net/upload-image/2019/11/01/Landing15e8d76dc7d0abb58.png'
              as='a'
              size='big'
              href='/'
              id="landingImage"
            />
          </Transition>
        
      </LandingContainer>
        )
  }
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.usersReducer.isLoggedIn
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    {  }
  )(Landing)
);

