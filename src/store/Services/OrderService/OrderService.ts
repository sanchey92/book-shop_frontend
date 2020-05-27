import {IOrderData} from "../../Orders/reducers/IOrderState";

export default class OrderService {

  static getOrders = async (): Promise<IOrderData> => {
    const orders = await fetch('http://localhost:3001/shop/orders');
    return await orders.json()
  }
  static postOrder = async () => {
    const cartProducts = await fetch('http://localhost:3001/shop/create-order', {method: 'POST'})
    return cartProducts.json()
  }
}
