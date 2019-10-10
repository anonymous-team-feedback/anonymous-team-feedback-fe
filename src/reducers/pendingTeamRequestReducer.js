import {
    GET_TEAM_BY_ID_START,
    GET_TEAM_BY_ID_SUCCESS,
    GET_TEAM_BY_ID_FAILURE,
    FETCH_ALL_REQUESTS_START,
    FETCH_ALL_REQUESTS_SUCCESS,
    FETCH_ALL_REQUESTS_FAILURE,
    SUBMIT_REQUEST_START,
    SUBMIT_REQUEST_SUCCESS,
    SUBMIT_REQUEST_FAILURE
} from "../actions/pendingTeamRequestActions";

const initialState = {
    requests: [],
    fetchAllRequestsLoading: false,
    fetchAllRequestsError: null,
    isSubmittingRequest: false,
    submitRequestError: null
};

export const requestsReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_TEAM_BY_ID_START:
            return {
                ...state,
                requests: [],
                loading: true,
                error: ""
            };
        case GET_TEAM_BY_ID_SUCCESS:
            return {
                ...state,
                requests: action.payload,
                loading: false,
                error: ""
            };
        case GET_TEAM_BY_ID_FAILURE:
            return {
                ...state,
                requests: [],
                loading: false,
                error: action.payload
            };

        case FETCH_ALL_REQUESTS_START:
            return {
                ...state,
                requests: [],
                loading: true,
                error: ""
            };
        case FETCH_ALL_REQUESTS_SUCCESS:
            return {
                ...state,
                requests: action.payload,
                loading: false,
                error: ""
            };
        case FETCH_ALL_REQUESTS_FAILURE:
            return {
                ...state,
                requests: [],
                loading: false,
                error: action.payload
            };

        case SUBMIT_REQUEST_START: {
            return {
                ...state,
                isSubmittingRequest: true
            };
        }
        case SUBMIT_REQUEST_SUCCESS: {
            return {
                ...state,
                isSubmittingRequest: false
            };
        }
        case SUBMIT_REQUEST_FAILURE: {
            return {
                ...state,
                isSubmittingRequest: false,
                submitRequestError: action.payload
            };
        }
        default:
            return state;
    }
};

export default requestsReducer;
