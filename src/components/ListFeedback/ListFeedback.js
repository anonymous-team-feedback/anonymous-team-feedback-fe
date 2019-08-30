import React from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { fetchAllPosts } from '../../actions/postsActions';

class ListFeedback extends React.Component {


  componentDidMount() {
    this.props.fetchAllPosts();
  }


  render() {
    return (
      <div className="Listfeedback">
        <h1>ListFeedback component👂</h1>
        {this.props.posts.map(post => (
          <div key={post.id}>
            <h1>{post.post}</h1>
            <h1>{post.date}</h1>
          </div>
))}
      </div>
    );
  };
  }


const MapStateToProps = ({ postsReducer: state}) => {
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
