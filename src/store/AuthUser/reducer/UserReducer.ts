import {Reducer} from "react";
import UserTypes from "../action/ActionTypes";
import {IUserState} from "./IUserState";
import AuthEnum from "../action/Auth.Enum";

const initialState: IUserState = {
  loading: false,
  isError: false,
  isSuccess: false,
  message: '',
  isAuth: false
}

const UserReducer: Reducer<IUserState, UserTypes> = (state = initialState, actions): IUserState => {
  switch (actions.type) {

    case AuthEnum.POST_USER_SIGN_UP:
      return {
        ...state,
        loading: actions.loading
      }

    case AuthEnum.POST_USER_SIGN_IN:
      return {
        ...state,
        loading: actions.loading
      }

    case AuthEnum.POST_USER_SUCCESS:
      return {
        ...state,
        loading: actions.loading,
        isSuccess: actions.isSuccess,
        message: actions.message,
        isAuth: actions.isAuth
      }

    case AuthEnum.POST_USER_FAILURE:
      return {
        ...state,
        loading: actions.loading,
        isError: actions.isError,
        message: actions.message
      }

    default:
      return state
  }
}

export default UserReducer