import { SET_FILM_LIST, SET_PEOPLE_LIST, SET_PLANET_LIST } from "./detailTypes";

const initialState = {
  peopleList: [],
  filmList: [],
  planetList: [],
};

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PEOPLE_LIST:
      return {
        ...state,
        peopleList: action.payload,
      };
    case SET_PLANET_LIST:
      return {
        ...state,
        planetList: action.payload,
      };
    case SET_FILM_LIST:
      return {
        ...state,
        filmList: action.payload,
      };
    default:
      return state;
  }
};

export default detailReducer;
