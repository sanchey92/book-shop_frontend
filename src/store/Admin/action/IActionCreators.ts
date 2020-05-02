import ActionTypesEnum from "./ActionTypes.enum";

export interface IPostAddProduct {
  type: ActionTypesEnum.POST_ADD_PRODUCT,
  product: any
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

export interface IDeleteSuccess {
  type: ActionTypesEnum.DELETE_SUCCESS,
  isLoading: boolean
}

export interface IFetchFailure {
  type: ActionTypesEnum.FETCH_FAILURE,
  isLoading: boolean
}