import { ActionTypes } from "../action_types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products
  };
};
