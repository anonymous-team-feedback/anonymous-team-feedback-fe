import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchAllPosts } from "../../actions/postsActions";
import { Icon, Label, Menu, Table, Message } from "semantic-ui-react";
import moment from "moment";

class ListFeedback extends React.Component {
  componentDidMount() {
    this.props.fetchAllPosts();
  }

  render() {
    return (
      <div className="Listfeedback">
        {this.props.posts.length > 0 ? (
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell width={3}>Date</Table.HeaderCell>
                <Table.HeaderCell width={7}>Feedback</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.props.posts.map(post => (
                <Table.Row>
                  <Table.Cell>
                    <Table.Cell width={3}>{moment(post.date).fromNow()}</Table.Cell>
                    <Table.Cell width={7}>{post.post}</Table.Cell>
                  </Table.Cell>
                </Table.Row>
              ))}
              <Table.Footer>
                <Table.Row>
                  <Table.HeaderCell colSpan="3">
                    <Menu floated="right" pagination>
                      <Menu.Item as="a" icon>
                        <Icon name="chevron left" />
                      </Menu.Item>
                      <Menu.Item as="a">1</Menu.Item>
                      <Menu.Item as="a">2</Menu.Item>
                      <Menu.Item as="a">3</Menu.Item>
                      <Menu.Item as="a">4</Menu.Item>
                      <Menu.Item as="a" icon>
                        <Icon name="chevron right" />
                      </Menu.Item>
                    </Menu>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Footer>
            </Table.Body>
          </Table>
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