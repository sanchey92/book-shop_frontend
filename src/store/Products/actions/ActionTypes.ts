import {
  IFetchProductById, IFetchProductByIdSuccess,
  IFetchProductsFailure,
  IFetchProductStart,
  IFetchProductSuccess
} from "./InterfacesActionCreators";

type productActions =
  IFetchProductStart
  | IFetchProductSuccess
  | IFetchProductsFailure
  | IFetchProductById
  | IFetchProductByIdSuccess

export default productActions
