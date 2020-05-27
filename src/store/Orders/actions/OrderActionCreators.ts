import {IFetchOrderFailure, IFetchOrderSuccess, IGetOrderStart, IPostOrdersStart} from "./Interfaces";
import OrdersActionsEnum from "./OrdersActions.enum";

const getOrderStart = (): IGetOrderStart => {
  return {
    type: OrdersActionsEnum.GET_ORDER_START,
    loading: true
  }
}

const postOrdersStart = (): IPostOrdersStart => {
  return {
    type: OrdersActionsEnum.POST_ORDERS_START,
    loading: true
  }
}

const fetchOrderSuccess = (data: any): IFetchOrderSuccess => {
  return {
    type: OrdersActionsEnum.FETCH_ORDER_SUCCESS,
    data,
    loading: false
  }
}

const fetchOrderFailure = (): IFetchOrderFailure => {
  return {
    type: OrdersActionsEnum.FETCH_ORDER_FAILURE,
    loading: false
  }
}

export {
  getOrderStart,
  postOrdersStart,
  fetchOrderSuccess,
  fetchOrderFailure
}