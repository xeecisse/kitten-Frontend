import { SET_MODEL_LIST } from "../actions/actionTypes";

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MODEL_LIST:
      return {
        ...state,
        modelList: action.payload
      }

    default:
      return state
  }
};
