import {
  IFetchProductById, IFetchProductByIdSuccess,
  IFetchProductsFailure,
  IFetchProductStart,
  IFetchProductSuccess, IRemoveProductDetails, ISearchProductByString
} from "./InterfacesActionCreators";

type productActions =
  IFetchProductStart
  | IFetchProductSuccess
  | IFetchProductsFailure
  | IFetchProductById
  | IFetchProductByIdSuccess
  | ISearchProductByString
  | IRemoveProductDetails

export default productActions
