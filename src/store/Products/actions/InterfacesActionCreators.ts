import ProductsActionTypesEnum from "./ProductsActionTypes.enum";
import IProductInterface from "../reducer/IProduct.interface";

export interface IFetchProductStart {
  type: ProductsActionTypesEnum.FETCH_PRODUCTS_START,
  isLoading: boolean
}

export interface IFetchProductSuccess {
  type: ProductsActionTypesEnum.FETCH_PRODUCTS_SUCCESS,
  data: IProductInterface[],
  isLoading: boolean
}

export interface IFetchProductsFailure {
  type: ProductsActionTypesEnum.FETCH_PRODUCTS_FAILURE,
  isLoading: boolean
}

export interface IFetchProductById {
  type: ProductsActionTypesEnum.FETCH_PRODUCT_BY_ID,
  id: string,
  isLoading: boolean
}

export interface IFetchProductByIdSuccess {
  type: ProductsActionTypesEnum.FETCH_PRODUCT_BY_ID_SUCCESS,
  product: IProductInterface,
  isLoading: boolean
}

export interface ISearchProductByString {
  type: ProductsActionTypesEnum.SEARCH_PRODUCT_BY_STRING,
  string: string,
  isLoading: boolean
}
export interface IRemoveProductDetails {
  type: ProductsActionTypesEnum.REMOVE_PRODUCT_DETAILS
}
