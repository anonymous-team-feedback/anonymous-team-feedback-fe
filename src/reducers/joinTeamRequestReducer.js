import {
  SUBMIT_JOIN_EXISTING_TEAM_START,
  SUBMIT_JOIN_EXISTING_TEAM_SUCCESS,
  SUBMIT_JOIN_EXISTING_TEAM_FAILURE,

  SUBMIT_CREATE_NEW_TEAM_START,
  SUBMIT_CREATE_NEW_TEAM_SUCCESS,
  SUBMIT_CREATE_NEW_TEAM_FAILURE,

  FETCH_ALL_MEMBERS_START,
  FETCH_ALL_MEMBERS_SUCCESS,
  FETCH_ALL_MEMBERS_FAILURE,

  GET_TEAM_DATA_START,
  GET_TEAM_DATA_SUCCESS,
  GET_TEAM_DATA_FAIL,

  GET_PENDING_START,
  GET_PENDING_SUCCESS,
  GET_PENDING_FAIL,

  APPROVE_PENDING_START,
  APPROVE_PENDING_SUCCESS,
  APPROVE_PENDING_FAIL,
} from "../actions/joinTeamRequestActions";

const initialState = {
  name: "",
  slug: null,
  members: [],
  manager: null,
  pendingUsers: null,

  pendingUsersLoading: false,
  pendingUsersError: null,

  isJoiningExistingTeam: false,
  joiningExistingTeamError: null,
  teamJoined: false,

  isSubmittingNewTeam: false,
  submitNewTeamError: null,
  teamSubmitted: false,

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
        isJoiningExistingTeam: false,
        teamJoined: true
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
        members: action.payload.members,
        slug: action.payload.slug,
        name: action.payload.name,
        manager: action.payload.manager,
        isSubmittingNewTeam: false,
        teamSubmitted: true
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
        loading: true,
        error: ""
      };
    case FETCH_ALL_MEMBERS_SUCCESS:
      return {
        ...state,
        members: action.payload,
        loading: false,
        error: ""
      };
    case FETCH_ALL_MEMBERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case GET_TEAM_DATA_START:
      return {
        ...state,
        loading: true,
        error: ""
      };
    case GET_TEAM_DATA_SUCCESS:
      return {
        ...state,
        members: action.payload.members,
        slug: action.payload.slug,
        name: action.payload.name,
        manager: action.payload.manager,
        loading: false,
        error: ""
      };
    case GET_TEAM_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case GET_PENDING_START:
      return {
        ...state,
        pendingUsersLoading: true,
      }
    case GET_PENDING_SUCCESS:
      return {
        ...state,
        pendingUsersLoading: false,
        pendingUsers: action.payload
      }
    case GET_PENDING_FAIL:
      return {
        ...state,
        pendingUsersLoading: false,
        pendingUsersError: action.payload
      }
      case APPROVE_PENDING_START:
      return {
        ...state,
        approving: true
      }
      case APPROVE_PENDING_SUCCESS:
      return {
        ...state,
        approving: false,
        members: action.payload.members
      }
      case APPROVE_PENDING_FAIL:
      return {
        ...state,
        approving: false,
        approvingError: action.payload
      }
    default:
      return state;
  }
};

export default joinTeamRequestReducer;
