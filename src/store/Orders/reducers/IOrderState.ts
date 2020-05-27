import IProductInterface from "../../Products/reducer/IProduct.interface";

export interface IOrderData {
  _id: string,
  user: {
    name: string,
    userId: string
  },
  products: IProductInterface[],
  totalPrice: number
}

export interface IOrderState {
  orders: IOrderData[]
  loading: boolean
}