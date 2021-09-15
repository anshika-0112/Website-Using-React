import {
  SET_FILM_LIST,
  SET_PEOPLE_LIST,
  SET_PLANET_LIST,
  FETCH_LIST_REQUESTED,
} from "./detailTypes";

const initialState = {
  peopleList: [],
  filmList: [],
  planetList: [],
  fetched: false,
};

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIST_REQUESTED:
      return { ...state, fetched: false };
    case SET_PEOPLE_LIST:
      return {
        ...state,
        fetched: true,
        peopleList: action.peopleList,
      };
    case SET_PLANET_LIST:
      console.log("setting planet list");
      return {
        ...state,
        fetched: true,
        planetList: action.planetList,
      };
    case SET_FILM_LIST:
      return {
        ...state,
        fetched: true,
        filmList: action.filmList,
      };
    default:
      return state;
  }
};

export default detailReducer;
