import { SET_FILM_LIST, SET_PEOPLE_LIST, SET_PLANET_LIST } from "./detailTypes";

export const setPeopleList = (peopleList) => {
  return {
    type: SET_PEOPLE_LIST,
    payload: peopleList,
  };
};

export const setPlanetList = (planetList) => {
  return {
    type: SET_PLANET_LIST,
    payload: planetList,
  };
};

export const setFilmList = (filmList) => {
  return {
    type: SET_FILM_LIST,
    payload: filmList,
  };
};
