import * as types from "./actionTypes";

export function beginApiCalls() {
  return { type: types.BEGIN_API_CALLS };
}

export function apiCallError() {
  return { type: types.API_CALL_ERROR };
}
