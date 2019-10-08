import {
    FETCH_ALL_MEMBERS_START,
    FETCH_ALL_MEMBERS_SUCCESS,
    FETCH_ALL_MEMBERS_FAILURE,
  } from "../actions/joinTeamRequestActions";
  
  const initialState = {
    team: [],
    name: "",
    slug: "",
    members: [],
    fetchAllMembersLoading: false,
    fetchAllMembersError: null,
  };
  
  export const joinTeamRequestReducer = (state = initialState, action) => {
    switch (action.type) {
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