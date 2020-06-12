import AuthEnum from "./Auth.Enum";
import {IAuthData} from "../../Services/AuthService/AuthService";

export interface IPostUserSignUp {
  type: AuthEnum.POST_USER_SIGN_UP,
  loading: boolean,
  data: IAuthData
}

export interface IPostUserSignIn {
  type: AuthEnum.POST_USER_SIGN_IN,
  loading: boolean
}

export interface IPostUserSuccess {
  type: AuthEnum.POST_USER_SUCCESS,
  loading: boolean,
  isSuccess: boolean,
  isAuth: boolean
  message: string
}

export interface IPostUserFailure {
  type: AuthEnum.POST_USER_FAILURE,
  loading: boolean,
  isError: boolean,
  message: string
}