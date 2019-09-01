import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchAllPosts } from "../../actions/postsActions";
import {
  Icon,
  Label,
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

  setPageNumber = (event, { activePage }) => {
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
      <div className="Listfeedback">
        {this.props.posts.length > 0 ? (
          <div>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell width={3}>Date</Table.HeaderCell>
                  <Table.HeaderCell width={7}>Feedback</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {items.map(post => (
                  <Table.Row>
                    <Table.Cell>
                      <Table.Cell width={3}>
                        {moment(post.date).fromNow()}
                      </Table.Cell>
                      <Table.Cell width={7}>{post.post}</Table.Cell>
                    </Table.Cell>
                  </Table.Row>
                ))}
                <Table.Footer>
                  <Table.Row>
                    <Table.HeaderCell colSpan="3">
                      <Menu floated="right" pagination>
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
              </Table.Body>
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
