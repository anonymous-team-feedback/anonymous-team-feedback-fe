import {
  SUBMIT_JOIN_EXISTING_TEAM_START,
  SUBMIT_JOIN_EXISTING_TEAM_SUCCESS,
  SUBMIT_JOIN_EXISTING_TEAM_FAILURE,

  SUBMIT_CREATE_NEW_TEAM_START,
  SUBMIT_CREATE_NEW_TEAM_SUCCESS,
  SUBMIT_CREATE_NEW_TEAM_FAILURE,

  FETCH_ALL_MEMBERS_START,
  FETCH_ALL_MEMBERS_SUCCESS,
  FETCH_ALL_MEMBERS_FAILURE
} from "../actions/joinTeamRequestActions";

const initialState = {
  team: [],
  name: "",
  slug: "",
  members: [],
  existingSlug: "",

  isJoiningExistingTeam: false,
  joiningExistingTeamError: null,

  isSubmittingNewTeam: false,
  submitNewTeamError: null,

  fetchAllMembersLoading: false,
  fetchAllMembersError: null
};

export const joinTeamRequestReducer = (state = initialState, action) => {
  switch (action.type) {

    case SUBMIT_JOIN_EXISTING_TEAM_START: {
        return {
          ...state,
          isJoiningExistingTeam: true
        };
      }
      case SUBMIT_JOIN_EXISTING_TEAM_SUCCESS: {
        return {
          ...state,
          isJoiningExistingTeam: false
        };
      }
      case SUBMIT_JOIN_EXISTING_TEAM_FAILURE: {
        return {
          ...state,
          isJoiningExistingTeam: false,
          joiningExistingTeamError: action.payload
        };
      }

    case SUBMIT_CREATE_NEW_TEAM_START: {
      return {
        ...state,
        isSubmittingNewTeam: true
      };
    }
    case SUBMIT_CREATE_NEW_TEAM_SUCCESS: {
      return {
        ...state,
        isSubmittingNewTeam: false
      };
    }
    case SUBMIT_CREATE_NEW_TEAM_FAILURE: {
      return {
        ...state,
        isSubmittingNewTeam: false,
        submitNewTeamError: action.payload
      };
    }

    case FETCH_ALL_MEMBERS_START:
      return {
        ...state,
        team: [],
        name: "",
        slug: "",
        members: [],
        loading: true,
        error: ""
      };
    case FETCH_ALL_MEMBERS_SUCCESS:
      return {
        ...state,
        teams: action.payload,
        loading: false,
        error: ""
      };
    case FETCH_ALL_MEMBERS_FAILURE:
      return {
        ...state,
        team: [],
        name: "",
        slug: "",
        members: [],
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default joinTeamRequestReducer;
