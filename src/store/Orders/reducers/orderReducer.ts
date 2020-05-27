import {Reducer} from "react";
import ActionOrderTypes from "../actions/ActionTypes";
import {IOrderState} from "./IOrderState";
import OrdersActionsEnum from "../actions/OrdersActions.enum";

const initialState: IOrderState = {
  orders: [],
  loading: false
}

const orderReducer:Reducer<IOrderState, ActionOrderTypes> =
  (state = initialState, actions): IOrderState => {
  switch (actions.type) {

    case OrdersActionsEnum.GET_ORDER_START:
      return {...state, loading: actions.loading};

    case OrdersActionsEnum.POST_ORDERS_START:
      return {...state, loading: actions.loading};

    case OrdersActionsEnum.FETCH_ORDER_SUCCESS:
      return {...state, orders: actions.data, loading: actions.loading}

    case OrdersActionsEnum.FETCH_ORDER_FAILURE:
      return {...state, loading: actions.loading}

    default:
      return state
  }
}

export default orderReducer
