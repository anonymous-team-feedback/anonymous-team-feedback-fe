import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchAllPosts } from "../../actions/postsActions";
import {
  MainListContainer,
  SubListContainer,
  H2
} from "./listFeedback-style.js";

import {
  Menu,
  Table,
  Message,
  Pagination
} from "semantic-ui-react";
import moment from "moment";

class ListFeedback extends React.Component {
  state = {
    page: 1,
    itemsPerPage: 10
  };
  componentDidMount() {
    this.props.fetchAllPosts();
  }

  setPageNumber = (e, { activePage }) => {
    this.setState({ page: activePage });
  };

  render() {
    const { itemsPerPage } = this.state;
    const { page } = this.state;
    const totalPages = Math.floor(this.props.posts.length / itemsPerPage);
    const items = this.props.posts.slice(
      (page - 1) * itemsPerPage,
      (page - 1) * itemsPerPage + itemsPerPage
    );
    return (
      <MainListContainer>
        <SubListContainer className="Listfeedback">
          <H2>My Feedback</H2>
          {this.props.posts.length > 0 ? (
            <div>
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell className="date-tab" width={2}>
                      Date
                    </Table.HeaderCell>
                    <Table.HeaderCell className="feedback-tab" width={8}>
                      Feedback
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body className="submittedFeedback">
                  {items.map((post, index) => (
                    <Table.Row>
                      <Table.Cell width={2}>
                        {moment(post.date).fromNow()}
                      </Table.Cell>
                      <Table.Cell width={8} key={index}>
                        " {post.post} "
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>

                <Table.Footer className="listFeedbackPageNav">
                  <Table.Row>
                    <Table.HeaderCell colSpan="3">
                      <Menu pagination>
                        <Menu.Item as="a" icon>
                          <Pagination
                            activePage={page}
                            totalPages={totalPages}
                            siblingRange={1}
                            onPageChange={this.setPageNumber}
                          />
                        </Menu.Item>
                      </Menu>
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Footer>
              </Table>
            </div>
          ) : (
            <Message negative>
              <Message.Header>
                It doesn't look like you have any feedback
              </Message.Header>
              <p>Maybe ask a coworker to give you some?</p>
            </Message>
          )}
        </SubListContainer>
      </MainListContainer>
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
