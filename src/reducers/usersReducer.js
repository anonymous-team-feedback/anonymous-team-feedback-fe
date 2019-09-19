import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
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

const initialState = {
  user: {
    token: "",
    firstName: "",
    lastName: "",
    email: "",
    user_id: ""
  },
  searchedEmails: [],
  transformedSearchedEmails: [],
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
        user: {
          token: "",
          firstName: "",
          lastName: "",
          email: "",
          user_id: ""
        },
        isLoggedIn: false,
        loginError: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginStart: false,
        user: action.payload,
        isLoggedIn: true,
        loginError: false
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loginStart: false,
        user: {
          token: "",
          firstName: "",
          lastName: "",
          email: "",
          user_id: ""
        },
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
        isRegistering: false,
        isLoggedIn: true
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
        searchedEmails: action.payload,
        isLoggedIn: true,
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

    default:
      return state;
  }
};

export default usersReducer;
