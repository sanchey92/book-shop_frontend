import IProductInterface from "../../Products/reducer/IProduct.interface";

export interface ICartItem {
  productData: IProductInterface,
  quantity: number
}

export interface IDataState {
  cartProducts: ICartItem[],
  totalPrice: number
}