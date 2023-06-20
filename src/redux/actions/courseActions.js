import * as types from "../actions/actionTypes";
import * as courseApi from "../../api/courseApi";
import { beginApiCalls, apiCallError } from "./apiStatusAction";

export function loadCourseSucess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function updateCourseSucess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
}
export function createCourseSucess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course };
}

export function deleteCourseOptimistic(course) {
  return { type: types.DELETE_COURSE_OPTIMISTIC, course };
}

//thunk
export function loadCourses() {
  return function (dispatch) {
    dispatch(beginApiCalls());
    return courseApi
      .getCourses()
      .then((courses) => {
        dispatch(loadCourseSucess(courses));
      })
      .catch((error) => {
        dispatch(apiCallError());
        throw error;
      });
  };
}

//sace course thunk
export function saveCourse(course) {
  return function (dispatch) {
    dispatch(beginApiCalls());
    return courseApi
      .saveCourse(course)
      .then((savedCourse) => {
        course.id
          ? dispatch(updateCourseSucess(savedCourse))
          : dispatch(createCourseSucess(savedCourse));
      })
      .catch((error) => {
        dispatch(apiCallError());
        throw error;
      });
  };
}

//delete course thunk

export function deleteCourse(course) {
  return function (dispatch) {
    dispatch(deleteCourseOptimistic(course));
    return courseApi.deleteCourse(course.id);
  };
}
