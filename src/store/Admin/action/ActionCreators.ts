import {IDeleteProduct, IFetchSuccess, IPostAddProduct} from "./IActionCreators";
import ActionTypesEnum from "./ActionTypes.enum";

const postAddProduct = (): IPostAddProduct => {
  return {
    type: ActionTypesEnum.POST_ADD_PRODUCT,
    isLoading: true
  }
}

const deleteProductById = (id: string): IDeleteProduct => {
  return {
    type: ActionTypesEnum.DELETE_PRODUCT_BY_ID,
    id,
    isLoading: true
  }
}

const fetchSuccess = (): IFetchSuccess => {
  return {
    type: ActionTypesEnum.FETCH_SUCCESS,
    isLoading: false
  }
}

export default {
  postAddProduct,
  deleteProductById,
  fetchSuccess
}
