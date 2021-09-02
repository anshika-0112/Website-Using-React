import { SET_PEOPLE_LIST } from "./detailTypes";

const initialState = {
  peopleList: null,
};

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PEOPLE_LIST:
      return {
        ...state,
        peopleList: action.value,
      };
    default:
      return state;
  }
};

export default detailReducer;