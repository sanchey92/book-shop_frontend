import CartEnum from "./CartEnum";

export interface IGetCart {
  type: CartEnum.GET_CART,
  isLoading: boolean
}

export interface IAddToCart {
  type: CartEnum.ADD_TO_CART,
  id: string,
  isLoading: boolean
}

export interface IDeleteFromCart {
  type: CartEnum.DELETE_FROM_CART,
  id: string,
  isLoading: boolean
}

export interface ICartFetchSuccess {
  type: CartEnum.CART_FETCH_SUCCESS,
  data: any,
  isLoading: boolean
}

export interface ICartFetchFailure {
  type: CartEnum.CART_FETCH_FAILURE,
  isLoading: boolean
}