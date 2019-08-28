import {    
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAILURE
} from '../actions/postsActions';

const initialState = {
    posts: [],
    loading: false,
    error: ''
};

export const postsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_START:
            return {
                ...state,
                posts: [],
                loading: true,
                error: ''
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                posts: action.payload,
                loading: false,
                error: ''
            };
        case FETCH_FAILURE:
            return {
                ...state,
                posts: [],
                loading: false,
                error: 'There are no posts available'
            }
        default: 
            return state;
    }
};

export default postsReducer;