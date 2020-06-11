import {IPostUserFailure, IPostUserSignIn, IPostUserSignUp, IPostUserSuccess} from "./IActionCreators";

type UserTypes =
  IPostUserSignUp
  | IPostUserSignIn
  | IPostUserSuccess
  | IPostUserFailure

export default UserTypes