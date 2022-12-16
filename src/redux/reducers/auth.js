import {
  LOGIN,
  LOGOUT,
  SET_CURRENT_PROFILE,
  SET_PROFILE,
  SET_TOKEN,
} from "../actions/actionTypes";

const initialState = {
  user: {},
  profiles: {},
  currentProfile: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case SET_PROFILE:
      return {
        ...state,
        profiles: action.payload,
      };
    case SET_CURRENT_PROFILE:
      return {
        ...state,
        currentProfile: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: {},
        profiles: {},
        currentProfile: {},
      };
    default:
      return state;
  }
};
