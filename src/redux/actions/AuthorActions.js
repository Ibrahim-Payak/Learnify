import * as types from "./actionTypes";
import * as authorApi from "../../api/authorApi";
import { beginApiCalls, apiCallError } from "./apiStatusAction";

//thunk
export function loadAuthors() {
  return function (dispatch) {
    dispatch(beginApiCalls());
    return authorApi
      .getAuthors()
      .then((authors) => {
        dispatch(loadAuthorsSucess(authors));
      })
      .catch((error) => {
        dispatch(apiCallError());
        throw error;
      });
  };
}

export function loadAuthorsSucess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}
