import {IDeleteProduct, IFetchFailure, IFetchStarted, IFetchSuccess, IPostAddProduct} from "./IActionCreators";
import ActionTypesEnum from "./ActionTypes.enum";

const postAddProduct = (product: any): IPostAddProduct => {
  return {
    type: ActionTypesEnum.POST_ADD_PRODUCT,
    product,
    isLoading: true
  }
}

const deleteProductById = (id: string): IDeleteProduct => {
  return {
    type: ActionTypesEnum.DELETE_PRODUCT_BY_ID,
    id,
    isLoading: false
  }
}

const fetchStarted = (): IFetchStarted => {
  return {
    type: ActionTypesEnum.FETCH_STARTED,
    isLoading: true
  }
}

const fetchFailure = (): IFetchFailure => {
  return {
    type: ActionTypesEnum.FETCH_FAILURE,
    isLoading: false
  }
}

const fetchSuccess = (): IFetchSuccess => {
  return {
    type: ActionTypesEnum.FETCH_SUCCESS,
    isLoading: false
  }
}

export {
  postAddProduct,
  deleteProductById,
  fetchStarted,
  fetchFailure,
  fetchSuccess
}
