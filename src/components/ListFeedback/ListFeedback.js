import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchAllPosts } from "../../actions/postsActions";
import { Icon, Label, Menu, Table, Message } from "semantic-ui-react";

class ListFeedback extends React.Component {
  componentDidMount() {
    this.props.fetchAllPosts();
  }

  render() {
    return (
      <div className="Listfeedback">
        {this.props.posts.length > 0 ? (
          <div>
            {this.props.posts.map(post => (
              <div key={post.id}>
                <h1>{post.post}</h1>
                <h1>{post.date}</h1>
              </div>
            ))}
          </div>
        ) : (
          <Message negative>
            <Message.Header>
              It doesn't look like you have any feedback
            </Message.Header>
            <p>Maybe ask a coworker to give you some?</p>
          </Message>
        )}
      </div>
    );
  }
}

const MapStateToProps = ({ postsReducer: state }) => {
  return {
    posts: state.posts,
    loading: state.loading
  };
};

export default withRouter(
  connect(
    MapStateToProps,
    { fetchAllPosts }
  )(ListFeedback)
);
