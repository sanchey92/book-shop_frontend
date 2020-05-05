import {IAddToCart, ICartFetchFailure, ICartFetchSuccess, IDeleteFromCart, IGetCart} from "./CartInterfaces";
import CartEnum from "./CartEnum";

const getCart = (): IGetCart => {
  return {
    type: CartEnum.GET_CART,
    isLoading: true
  }
}

const addToCart = (id: string): IAddToCart => {
  return {
    type: CartEnum.ADD_TO_CART,
    id,
    isLoading: true
  }
}

const deleteFromCart = (id: string): IDeleteFromCart => {
  return {
    type: CartEnum.DELETE_FROM_CART,
    id,
    isLoading: true
  }
}

const cartFetchSuccess = (data: any): ICartFetchSuccess => {
  return {
    type: CartEnum.CART_FETCH_SUCCESS,
    data,
    isLoading: false
  }
}

const cartFetchFailure = (): ICartFetchFailure => {
  return {
    type: CartEnum.CART_FETCH_FAILURE,
    isLoading: false
  }
}

export {
  getCart,
  addToCart,
  deleteFromCart,
  cartFetchSuccess,
  cartFetchFailure
}