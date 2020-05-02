import {IDeleteProduct, IDeleteSuccess, IFetchFailure, IFetchSuccess, IPostAddProduct} from "./IActionCreators";
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

const deleteSuccess = (): IDeleteSuccess => {
  return {
    type: ActionTypesEnum.DELETE_SUCCESS,
    isLoading: false
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
  deleteSuccess,
  fetchFailure,
  fetchSuccess
}
