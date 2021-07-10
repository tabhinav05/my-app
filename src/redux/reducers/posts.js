import { ActionTypes } from "../action_types";
const intialState = {
  products: [],
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { products: payload };
    default:
      return state;
  }
};
