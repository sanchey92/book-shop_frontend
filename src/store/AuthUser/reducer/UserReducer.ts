import {Reducer} from "react";
import UserTypes from "../action/ActionTypes";
import {IUserState} from "./IUserState";
import AuthEnum from "../action/Auth.Enum";

const initialState: IUserState = {
  loading: false,
  isError: false,
  message: ''
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

    default:
      return state
  }
}

export default UserReducer