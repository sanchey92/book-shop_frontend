import {put, call, takeEvery, all} from 'redux-saga/effects';
import ShopService from "../../ShopService/ShopService";
import {fetchProductSuccess, fetchProductByIdSuccess, fetchProductFailure} from "../actions/ActionCreators";
import ProductsActionTypesEnum from "../actions/ProductsActionTypes.enum";
import {IFetchProductById} from "../actions/InterfacesActionCreators";

const shopService = new ShopService()

function* getProductsSaga(): any {
  try {
    const response = yield call(shopService.fetchProducts);
    const products = response.products;
    yield put(fetchProductSuccess(products))
  } catch (error) {
    yield put(fetchProductFailure())
  }
}

function* getProductByIdSaga(action: IFetchProductById): any {
  try {
    const response = yield call(shopService.fetchProductById, action.id);
    yield put(fetchProductByIdSuccess(response))
  } catch (error) {
    yield put(fetchProductFailure())
  }
}

function* productSaga() {
  yield all([
    takeEvery(ProductsActionTypesEnum.FETCH_PRODUCTS_START, getProductsSaga),
    takeEvery(ProductsActionTypesEnum.FETCH_PRODUCT_BY_ID, getProductByIdSaga)
  ])
}

export {
  getProductsSaga,
  productSaga
}
