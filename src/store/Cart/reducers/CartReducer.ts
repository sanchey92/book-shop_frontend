import {ICartState} from "./IcartState";
import {Reducer} from "react";
import CartActionTypes from "../actions/CartActionTypes";
import CartEnum from "../actions/CartEnum";

const initialState: ICartState = {
  data: {
    items: [],
    totalPrice: 0
  },
  isLoading: false
}

const cartReducer: Reducer<ICartState, CartActionTypes> = (state = initialState, actions) => {
  switch (actions.type) {

    case CartEnum.ADD_TO_CART:
      return {
        ...state,
        isLoading: actions.isLoading
      };

    case CartEnum.DELETE_FROM_CART:
      return {
        ...state,
        isLoading: actions.isLoading
      }

    case CartEnum.CART_FETCH_FAILURE:
      return {
        ...state,
        isLoading: actions.isLoading,
      }

    case CartEnum.CART_FETCH_SUCCESS:
      return {
        ...state,
        data: actions.data,
        isLoading: actions.isLoading
      }

    default:
      return state
  }
}

export default cartReducer