import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

import { H3, FooterContainer } from "./footer-style.js";

import { Button} from "semantic-ui-react";

class Footer extends React.Component {
  render() {

    return (
      <FooterContainer>
        <H3>© Copyright 2019. All Rights Reserved.</H3>

        <Button
          as={Link}
          Button
          as={Link}
          className="aboutButton"
          name="about"
          to="/about"
        >
          About Us
        </Button>
      </FooterContainer>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(Footer)
);
