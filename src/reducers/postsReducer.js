import {    
    FETCH_ALL_POSTS_START,
    FETCH_ALL_POSTS_SUCCESS,
    FETCH_ALL_POSTS_FAILURE, 
    SUBMIT_FEEDBACK_START,
  SUBMIT_FEEDBACK_SUCCESS,
  SUBMIT_FEEDBACK_FAILURE
} from '../actions/postsActions';

const initialState = {
    posts: [],
    fetchAllPostsLoading: false,
    fetchAllPostsError: null,
    isSubmittingFeedback: false,
  submitFeedbackError: null
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
     
    case SUBMIT_FEEDBACK_START: {
        return {
          ...state,
          isSubmittingFeedback: true
        };
      }
      case SUBMIT_FEEDBACK_SUCCESS: {
        return {
          ...state,
          isSubmittingFeedback: false,
        };
      }
      case SUBMIT_FEEDBACK_FAILURE: {
        return {
          ...state,
          isSubmittingFeedback: false,
          submitFeedbackError: action.payload
        };
      }
    default:
      return state;
  }

};

export default postsReducer;

