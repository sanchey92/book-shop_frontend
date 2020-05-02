import {
  IDeleteProduct,
  IDeleteSuccess,
  IFetchFailure,
  IFetchSuccess,
  IPostAddProduct
} from "./IActionCreators";

type AdminAction =
  IPostAddProduct
  | IDeleteProduct
  | IFetchSuccess
  | IDeleteSuccess
  | IFetchFailure

export default AdminAction
