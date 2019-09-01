import React from "react";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {fetchAllPosts} from '../../actions/postsActions';
import {
    ListContainer,
    HeaderDiv,
    SecondDiv,
    TitleDiv,
    DateDiv,
    FeedbackDiv,
    PostDateDiv,
    PostDiv,
    H1,
    H2
} from './listFeedback-style';
import {Button, Header, Icon, Modal, Form} from "semantic-ui-react";

class ListFeedback extends React.Component {

    componentDidMount() {
        this
            .props
            .fetchAllPosts();
    }

    render() {
        return (
            <ListContainer>
                <HeaderDiv>
                    <H1>My Feedback</H1>
                </HeaderDiv>
                <SecondDiv>
                    <DateDiv>
                        Date
                    </DateDiv>
                    <TitleDiv>
                        Title
                    </TitleDiv>
                </SecondDiv>
                {this
                    .props
                    .posts
                    .map(post => (
                        <FeedbackDiv key={post.id}>
                            <PostDateDiv>
                                <H2>{post.date}</H2>
                            </PostDateDiv>
                            <PostDiv>
                                <H2>{post.post}</H2>
                            </PostDiv>

                        </FeedbackDiv>
                    ))}
            </ListContainer>
        );
    };
}

const MapStateToProps = ({postsReducer: state}) => {
    return {posts: state.posts, loading: state.loading};
};

export default withRouter(connect(MapStateToProps, {fetchAllPosts})(ListFeedback));
