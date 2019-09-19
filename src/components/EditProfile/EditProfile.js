import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchAllPosts } from "../../actions/postsActions";
import {
  MainListContainer,
  SubListContainer,
  H2
} from "./editProfile-style";

import {
  Menu,
  Table,
  Message,
  Pagination
} from "semantic-ui-react";
import moment from "moment";

class EditProfile extends React.Component {

  render() {

    return (
      <MainListContainer>
        <SubListContainer className="EditProfile">
          <H2>Settings</H2>
        </SubListContainer>

        <SubListContainer>
            <div>Profile</div>
            <div>Email</div>          
        </SubListContainer>
      </MainListContainer>
    );
  }
}

const MapStateToProps = ({ postsReducer: state }) => {
  return {
    posts: state.posts,
    loading: state.loading,
  };
};

export default withRouter(
  connect(
    MapStateToProps,
    { fetchAllPosts }
  )(EditProfile)
);
