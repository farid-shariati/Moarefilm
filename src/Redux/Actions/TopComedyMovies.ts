import {
  FETCH_TOP_COMEDY_LOADING,
  FETCH_TOP_COMEDY_SUCCESS,
  FETCH_TOP_COMEDY_FAILURE,
} from "../Types/Types";
import { Dispatch } from "redux";
import fetchMovies from '../../services/fetchMovies';


export interface fetchTopComedyLoadingAction {
  type: typeof FETCH_TOP_COMEDY_LOADING;
}
export interface fetchTopComedySuccessAction {
  type: typeof FETCH_TOP_COMEDY_SUCCESS;
  Comedies: any;
}
export interface fetchTopComedyFailureAction {
  type: typeof FETCH_TOP_COMEDY_FAILURE;
  error: string;
}
export const fetchTopComedyLoading = (): fetchTopComedyLoadingAction => {
  return {
    type: FETCH_TOP_COMEDY_LOADING,
  };
};

export const fetchTopComedySuccess = (
  Comedies: any
): fetchTopComedySuccessAction => {
  return {
    type: FETCH_TOP_COMEDY_SUCCESS,
    Comedies,
  };
};

export const fetchTopComedyFailure = (
  error: string
): fetchTopComedyFailureAction => {
  return {
    type: FETCH_TOP_COMEDY_FAILURE,
    error,
  };
};

export const fetchTopComedy = (page: number =1) => {
  return (dispatch: Dispatch) => {
    dispatch(fetchTopComedyLoading());
    return fetchMovies(
      {},
      {
        page,
        with_genres: 35,
        sort_by: "popularity.desc",
      }
    )
      .then((response) => {
        const ComedyMovies = response.data.results;
        dispatch(fetchTopComedySuccess(ComedyMovies));
      })
      .catch((error) => {
        dispatch(fetchTopComedyFailure(error.message));
      });
  };
};
