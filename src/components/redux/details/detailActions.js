import {
  SET_FILM_LIST,
  SET_PEOPLE_LIST,
  SET_PLANET_LIST,
  FETCH_LIST_REQUEST,
  FETCH_LIST_SUCCESS,
} from "./detailTypes";

export const fetchList = (categoryName) => {
  return async (dispatch) => {
    const url = `https://swapi.dev/api/${categoryName}`;
    const response = await fetch(url);
    const list = await response.json();
    console.log("fetch list", list);
    if (categoryName === "people") dispatch(setPeopleList(list.results));
    else if (categoryName === "planets") dispatch(setPlanetList(list.results));
    else dispatch(setFilmList(list.results));
    dispatch(fetchListSuccess());
  };
};
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

export const fetchListRequest = () => {
  return {
    type: FETCH_LIST_REQUEST,
  };
};

export const fetchListSuccess = () => {
  return {
    type: FETCH_LIST_SUCCESS,
  };
};
