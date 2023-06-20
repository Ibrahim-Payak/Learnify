import * as types from "../actions/actionTypes";
import initialState from "./initialState";

function apiCallEndInSuccess(type) {
  return type.substring(type.length - 8) === "_SUCCESS";
}

export default function apiCallStatusReducers(
  state = initialState.apiCallsInProgress,
  action
) {
  if (action.type == types.BEGIN_API_CALLS) {
    return state + 1;
  } else if (
    action.type === types.API_CALL_ERROR ||
    apiCallEndInSuccess(action.type)
  ) {
    return state - 1;
  }
  return state;
}
