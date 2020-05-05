import {IAddToCart, ICartFetchFailure, ICartFetchSuccess, IDeleteFromCart, IGetCart} from "./CartInterfaces";

type CartActionTypes =
  IGetCart
  | IDeleteFromCart
  | IAddToCart
  | ICartFetchFailure
  | ICartFetchSuccess

export default CartActionTypes