import ProductsActionTypesEnum from "./ProductsActionTypes.enum";
import {
  IFetchProductById,
  IFetchProductByIdSuccess,
  IFetchProductsFailure,
  IFetchProductStart,
  IFetchProductSuccess,
  IRemoveProductDetails,
  ISearchProductByString
} from "./InterfacesActionCreators";
import IProductInterface from "../reducer/IProduct.interface";

const fetchProductsStart  = (): IFetchProductStart => {
  return {
    type: ProductsActionTypesEnum.FETCH_PRODUCTS_START,
    isLoading: true
  }
}

const fetchProductSuccess = (data: IProductInterface[]): IFetchProductSuccess => {
  return {
    type: ProductsActionTypesEnum.FETCH_PRODUCTS_SUCCESS,
    data,
    isLoading: false
  }
}

const fetchProductFailure = (): IFetchProductsFailure => {
  return {
    type: ProductsActionTypesEnum.FETCH_PRODUCTS_FAILURE,
    isLoading: false
  }
}

const fetchProductById = (id: string): IFetchProductById => {
  return {
    type: ProductsActionTypesEnum.FETCH_PRODUCT_BY_ID,
    id,
    isLoading: true
  }
}

const fetchProductByIdSuccess = (product: IProductInterface): IFetchProductByIdSuccess => {
  return {
    type: ProductsActionTypesEnum.FETCH_PRODUCT_BY_ID_SUCCESS,
    product,
    isLoading: false
  }
}

const searchProductByString = (string: string): ISearchProductByString => {
  return {
    type: ProductsActionTypesEnum.SEARCH_PRODUCT_BY_STRING,
    string,
    isLoading: false
  }
}

const removeProductDetails = () : IRemoveProductDetails => {
  return {
    type: ProductsActionTypesEnum.REMOVE_PRODUCT_DETAILS
  }
}

export {
  fetchProductsStart,
  fetchProductSuccess,
  fetchProductFailure,
  fetchProductById,
  fetchProductByIdSuccess,
  searchProductByString,
  removeProductDetails
}
