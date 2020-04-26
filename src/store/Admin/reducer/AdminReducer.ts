import {Reducer} from "react";
import {IAdminReducer} from "./IAdminReducer";
import AdminAction from "../action/ActionTypes";
import ActionTypesEnum from "../action/ActionTypes.enum";

const initialState = {
  isFetching: false
}

const adminReducer: Reducer<IAdminReducer, AdminAction> =
  (state = initialState, action):IAdminReducer => {

  switch (action.type) {

    case ActionTypesEnum.POST_ADD_PRODUCT:
      return {
        ...state,
        isFetching: false
      }

    case ActionTypesEnum.DELETE_PRODUCT_BY_ID:
      return {
        ...state,
        isFetching: action.isLoading
      }

    case ActionTypesEnum.FETCH_SUCCESS:
      return {
        ...state,
        isFetching: action.isLoading
      }

    default: return state
  }
}

export default adminReducer;
