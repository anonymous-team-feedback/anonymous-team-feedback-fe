import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { H1, LandingContainer } from "./landing-style.js";

import { Image, Transition } from "semantic-ui-react";

class Landing extends React.Component {
  state = { visible: true };

  toggleVisibility = () =>
    this.setState(prevState => ({ visible: !prevState.visible }));

  render() {
    const { visible } = this.state;
    if (this.props.isLoggedIn) this.props.history.push("/dashboard");

    return (
      <LandingContainer>
        <div id="landingText" >
        <H1>Build Stronger Teams --</H1>
        <H1 id="incogText">Communicate Incognito</H1>
        </div>

        {/* Animation for image */}
        <Transition visible={visible} animation="tada" duration={300}>
          <Image
            onClick={this.toggleVisibility}
            src="https://www.imageupload.net/upload-image/2019/11/02/Talk6eefbe2af5605ec6.png"
            as="a"
            size="large"
            href="/"
            id="landingImage"
          />
        </Transition>
      </LandingContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.usersReducer.isLoggedIn
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(Landing)
);
