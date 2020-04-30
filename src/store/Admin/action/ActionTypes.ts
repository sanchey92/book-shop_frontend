import {IDeleteProduct, IFetchFailure, IFetchStarted, IFetchSuccess, IPostAddProduct} from "./IActionCreators";

type AdminAction =
  IPostAddProduct
  | IDeleteProduct
  | IFetchSuccess
  | IFetchStarted
  | IFetchFailure

export default AdminAction
