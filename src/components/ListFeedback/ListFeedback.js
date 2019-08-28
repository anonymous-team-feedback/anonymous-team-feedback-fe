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
        {/* {this.props.posts.map(post => (
          console.log(post)
        ))} */}
        {/* <h1>{this.props.posts.date}</h1>
        <h1>{this.props.posts.post}</h1>
        <h1>{this.props.posts.poster}</h1>
        <h1>{this.props.posts.colleague}</h1> */}


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
