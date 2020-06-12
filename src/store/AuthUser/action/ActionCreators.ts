import {IAuthData} from "../../Services/AuthService/AuthService";
import {IPostUserFailure, IPostUserSignIn, IPostUserSignUp, IPostUserSuccess} from "./IActionCreators";
import AuthEnum from "./Auth.Enum";

const postUserSignUp = (data: IAuthData): IPostUserSignUp => {
  return {
    type: AuthEnum.POST_USER_SIGN_UP,
    loading: true,
    data
  }
}

const postUserSignIn = (data: IAuthData): IPostUserSignIn => {
  return {
    type: AuthEnum.POST_USER_SIGN_IN,
    loading: true
  }
}

const postUserSuccess = (message: string): IPostUserSuccess => {
  return {
    type: AuthEnum.POST_USER_SUCCESS,
    loading: false,
    isSuccess: true,
    isAuth: true,
    message
  }
}

const postUserFailure = (message: string): IPostUserFailure => {
  return {
    type: AuthEnum.POST_USER_FAILURE,
    loading: false,
    isError: true,
    message
  }
}


export {
  postUserSignUp,
  postUserSignIn,
  postUserSuccess,
  postUserFailure
}