import {IPostUserSignIn, IPostUserSignUp} from "./IActionCreators";

type UserTypes =
  IPostUserSignUp
  | IPostUserSignIn

export default UserTypes