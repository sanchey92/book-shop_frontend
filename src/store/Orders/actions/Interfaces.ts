import OrdersActionsEnum from "./OrdersActions.enum";

export interface IGetOrderStart {
  type: OrdersActionsEnum.GET_ORDER_START,
  loading: boolean
}

export interface IPostOrdersStart {
  type: OrdersActionsEnum.POST_ORDERS_START,
  loading: boolean
}

export interface IFetchOrderSuccess {
  type: OrdersActionsEnum.FETCH_ORDER_SUCCESS,
  data: any,
  loading: boolean
}

export interface IFetchOrderFailure {
  type: OrdersActionsEnum.FETCH_ORDER_FAILURE,
  loading: boolean
}
