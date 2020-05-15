import {
  IFetchProductById, IFetchProductByIdSuccess,
  IFetchProductsFailure,
  IFetchProductStart,
  IFetchProductSuccess, ISearchProductByString
} from "./InterfacesActionCreators";

type productActions =
  IFetchProductStart
  | IFetchProductSuccess
  | IFetchProductsFailure
  | IFetchProductById
  | IFetchProductByIdSuccess
  | ISearchProductByString

export default productActions
