import {IStateInterface} from "./IState.interface";
import {Reducer} from "react";
import ProductsActionTypesEnum from "../actions/ProductsActionTypes.enum";
import productActions from "../actions/ActionTypes";

const initialState: IStateInterface = {
  data: [],
  product: null,
  isFetching: false,
  searchProduct: null
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

    case ProductsActionTypesEnum.SEARCH_PRODUCT_BY_STRING:
      return {
        ...state,
        searchProduct: state.data.filter(el => el.title.toLowerCase().includes(actions.string.toLowerCase()))
      }

    case ProductsActionTypesEnum.REMOVE_PRODUCT_DETAILS:
      return {
        ...state,
        product: null
      }

    default:
      return state
  }
}

export {productsReducer}
