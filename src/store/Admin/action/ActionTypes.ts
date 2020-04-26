import {IDeleteProduct, IFetchSuccess, IPostAddProduct} from "./IActionCreators";

type AdminAction =
  IPostAddProduct
  | IDeleteProduct
  | IFetchSuccess;

export default AdminAction
