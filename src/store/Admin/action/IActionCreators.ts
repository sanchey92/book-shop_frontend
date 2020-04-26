import ActionTypesEnum from "./ActionTypes.enum";

export interface IPostAddProduct {
  type: ActionTypesEnum.POST_ADD_PRODUCT,
  isLoading: boolean
}

export interface IDeleteProduct {
  type: ActionTypesEnum.DELETE_PRODUCT_BY_ID,
  id: string
  isLoading: boolean
}

export interface IFetchSuccess {
  type: ActionTypesEnum.FETCH_SUCCESS,
  isLoading: boolean
}
