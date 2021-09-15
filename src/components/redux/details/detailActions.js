import {
  SET_FILM_LIST,
  SET_PEOPLE_LIST,
  SET_PLANET_LIST,
  FETCH_LIST_REQUESTED,
} from "./detailTypes";

export const setPeopleList = (peopleList) => {
  return {
    type: SET_PEOPLE_LIST,
    peopleList: peopleList,
  };
};

export const setPlanetList = (planetList) => {
  return {
    type: SET_PLANET_LIST,
    planetList: planetList,
  };
};

export const setFilmList = (filmList) => {
  return {
    type: SET_FILM_LIST,
    filmList: filmList,
  };
};

export const getList = (categoryName) => {
  console.log("passed here", categoryName);
  return {
    type: FETCH_LIST_REQUESTED,
    payload: categoryName,
  };
};
