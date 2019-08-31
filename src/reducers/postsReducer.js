import {
  SUBMIT_FEEDBACK_START,
  SUBMIT_FEEDBACK_SUCCESS,
  SUBMIT_FEEDBACK_FAILURE
} from "../.actions/postsActions";

const initialState = {
  isSubmittingFeedback: false,
  submitFeedbackError: null
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
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
