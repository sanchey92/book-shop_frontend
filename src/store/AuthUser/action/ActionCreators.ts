import {IAuthData} from "../../Services/AuthService/AuthService";
import {IPostUserSignIn, IPostUserSignUp} from "./IActionCreators";
import AuthEnum from "./Auth.Enum";

const postUserSignUp = (data: IAuthData): IPostUserSignUp => {
  return {
    type: AuthEnum.POST_USER_SIGN_UP,
    loading: true
  }
}

const postUserSignIn = (data: IAuthData): IPostUserSignIn => {
  return {
    type: AuthEnum.POST_USER_SIGN_IN,
    loading: true
  }
}