import AuthEnum from "./Auth.Enum";

export interface IPostUserSignUp {
  type: AuthEnum.POST_USER_SIGN_UP,
  loading: boolean
}

export interface IPostUserSignIn {
  type: AuthEnum.POST_USER_SIGN_IN,
  loading: boolean
}
