import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  AUTO_LOGIN,
  AUTO_LOGIN_FAIL,
  AUTO_LOGIN_SUCCESS,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  CHECK_AUTH_STATUS_SUCCESS,
  CHECK_AUTH_STATUS_FAILURE,
  SEARCH_EMAIL_START,
  SEARCH_EMAIL_SUCCESS,
  SEARCH_EMAIL_FAILURE,
  TRANSFORM_EMAILS_FOR_DROPDOWN
} from "../actions/usersActions";
import { statement } from "@babel/template";

const initialState = {
  user: {
    token: "",
    firstName: "",
    lastName: "",
    email: "",
    user_id: "",
    jobTitle: "",
    approved: false
  },
  searchedEmails: [],
  transformedSearchedEmails: [],
  loggingIn: false,
  isLoggedIn: false,
  loginError: null,
  isRegistering: false,
  registerError: null,
  isSearchingEmails: false,
  searchEmailsError: null
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loginStart: true,
        isLoggedIn: false,
        loginError: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginStart: false,
        user: {
          ...state.user,
          email: action.payload.email,
          firstName: action.payload.firstName,
          jobTitle: action.payload.jobTitle,
          lastName: action.payload.lastName,
          user_id: action.payload._id,
          approved: action.payload.approved
        },
        isLoggedIn: true,
        loginError: false
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loginStart: false,
        isLoggedIn: false,
        loginError: action.payload
      };
    case REGISTER_START: {
      return {
        ...state,
        isRegistering: true,
        registerError: action.payload
      };
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        isRegistering: false
      };
    }
    case REGISTER_FAILURE: {
      return {
        ...state,
        isRegistering: false,
        registerError: action.payload
      };
    }
    case CHECK_AUTH_STATUS_SUCCESS: {
      return {
        ...state,
        isLoggedIn: true
      };
    }
    case CHECK_AUTH_STATUS_FAILURE: {
      return {
        ...state,
        isLoggedIn: false
      };
    }
    case SEARCH_EMAIL_START: {
      return {
        ...state,
        isSearchingEmails: true
      };
    }
    case SEARCH_EMAIL_SUCCESS: {
      return {
        ...state,
        isSearchingEmails: false,
        searchedEmails: action.payload
      };
    }
    case SEARCH_EMAIL_FAILURE: {
      return {
        ...state,
        isSearchingEmails: false,
        searchedEmailsError: action.payload
      };
    }
    case TRANSFORM_EMAILS_FOR_DROPDOWN: {
      return {
        ...state,
        transformedSearchedEmails: action.payload.map(({ email }, index) => ({
          text: email,
          key: index,
          value: email
        }))
      };
    }
    case AUTO_LOGIN: {
      return {
        ...state,
        loggingIn: true,
        loginError: false
      }
    }
    case AUTO_LOGIN_SUCCESS: {
      return {
        ...state, 
        loggingIn: false,
        isLoggedIn: true,
        user: {
          ...state.user,
          email: action.payload.user.email,
          firstName: action.payload.user.firstName,
          jobTitle: action.payload.user.jobTitle,
          lastName: action.payload.user.lastName,
          user_id: action.payload.user._id,
          approved: action.payload.approved
        }
      }
    }
    case AUTO_LOGIN_FAIL: {
      return {
        ...state,
        loggingIn: false,
        loginError: action.payload
      }
    }

    default:
      return state;
  }
};

export default usersReducer;
