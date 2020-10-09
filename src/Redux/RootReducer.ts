import { combineReducers } from "redux";
import PopularTvShowsRedycer from "./Reducers/PopularTvShowsReducer";
import TopPopularMoviesReducer from "./Reducers/TopPopularMovies";
import TopActionMovies from "./Reducers/ActionMovies";
import HorrorMovies from "./Reducers/HorrorMovies";
import TopComedyMoviesReducer from "./Reducers/TopComedyMoviesReducer";
import SimilarMoviesReducer from "./Reducers/SimilarMoviesReducer";
import DetailMovies from "./Reducers/DetailMovies";
import DetailTv from "./Reducers/DetailTv";
import Creators from "./Reducers/CastMovie";
import TopRatedMovies from "./Reducers/TopRated";
import CastDetailReducer from "./Reducers/CastDetailReducer";
import CastMoviesReducer from "./Reducers/CastMoviesReducer";
import CastTvShowsReducer from "./Reducers/CastTvShowsReducer";
import ActionTvShowsReducer from "./Reducers/ActionTvShowsReducer";
import ComedyTvShowsReducer from "./Reducers/ComedyTvShowsReducer";
import HorrorTvShowsReducer from "./Reducers/HorrorTvShowsReducer";
import SearchMoviesReducer from "./Reducers/SearchMoviesReducer";
import SearchPeopleReducer from "./Reducers/SearchPeopleReducer";
import SearchTvShowsReducer from "./Reducers/SearchTvShowsReducer";
import Auth from "./Reducers/Auth";

const RootReducer = combineReducers({
  Authenticated: Auth,
  popularTvShows: PopularTvShowsRedycer,
  TopMovies: TopPopularMoviesReducer,
  ActionMovies: TopActionMovies,
  Horror: HorrorMovies,
  ComedyMovies: TopComedyMoviesReducer,
  SimilarMovies: SimilarMoviesReducer,
  DetailMovie: DetailMovies,
  DetailTV: DetailTv,
  Creators: Creators,
  TopRated: TopRatedMovies,
  CastsDetail: CastDetailReducer,
  CastsMovies: CastMoviesReducer,
  CastsTvShows: CastTvShowsReducer,
  ActionTvShowReducer: ActionTvShowsReducer,
  ComedyTvShowReducer: ComedyTvShowsReducer,
  HorrorTvShowReducer: HorrorTvShowsReducer,
  SrarchMovies: SearchMoviesReducer,
  SearchPeople: SearchPeopleReducer,
  SearchTvShows: SearchTvShowsReducer,
});

export default RootReducer;
