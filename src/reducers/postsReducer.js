import {    
    FETCH_ALL_POSTS_START,
    FETCH_ALL_POSTS_SUCCESS,
    FETCH_ALL_POSTS_FAILURE
} from '../actions/postsActions';

const initialState = {
    posts: [],
    fetchAllPostsloading: false,
    fetchAllPostserror: null,
};

export const postsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ALL_POSTS_START:
            return {
                ...state,
                posts: [],
                loading: true,
                error: ''
            };
        case FETCH_ALL_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload,
                loading: false,
                error: ''
            };
        case FETCH_ALL_POSTS_FAILURE:
            return {
                ...state,
                posts: [],
                loading: false,
                error: action.payload
            }
        default: 
            return state;
    }
};

export default postsReducer;