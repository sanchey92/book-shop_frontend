import IProductInterface from "../../Products/reducer/IProduct.interface";

export interface ICartItem {
  productId: IProductInterface
  quantity: number
}

export interface IDataState {
  items: ICartItem[]
  totalPrice: number
}