import {IStateInterface} from "./IState.interface";
import {Reducer} from "react";
import ProductsActionTypesEnum from "../actions/ProductsActionTypes.enum";
import productActions from "../actions/ActionTypes";

const initialState: IStateInterface = {
  data: [],
  product: null,
  isFetching: false
}

const productsReducer: Reducer<IStateInterface, productActions> = (
  state = initialState, actions): IStateInterface => {

  switch (actions.type) {

    case ProductsActionTypesEnum.FETCH_PRODUCTS_START :
      return {
        ...state,
        isFetching: actions.isLoading
      }

    case ProductsActionTypesEnum.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        data: actions.data,
        product: state.product,
        isFetching: actions.isLoading
      }

    case ProductsActionTypesEnum.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        isFetching: actions.isLoading
      }

    case ProductsActionTypesEnum.FETCH_PRODUCT_BY_ID:
      return {
        ...state,
        isFetching: actions.isLoading
      }

    case ProductsActionTypesEnum.FETCH_PRODUCT_BY_ID_SUCCESS:
      return {
        ...state,
        product: actions.product,
        isFetching: actions.isLoading
      }
    default:
      return state
  }
}

export {productsReducer}
