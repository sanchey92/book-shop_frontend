import {put, call, takeEvery, all} from 'redux-saga/effects';
import ShopService from "../Services/ShopService/ShopService";
import {fetchProductSuccess, fetchProductByIdSuccess, fetchProductFailure} from "../Products/actions/ActionCreators";
import ProductsActionTypesEnum from "../Products/actions/ProductsActionTypes.enum";
import {IFetchProductById} from "../Products/actions/InterfacesActionCreators";
import {IPostAddProduct} from "../Admin/action/IActionCreators";
import AdminService from "../Services/AdminService/AdninService";
import {fetchFailure, fetchSuccess} from "../Admin/action/ActionCreators";
import ActionTypesEnum from "../Admin/action/ActionTypes.enum";

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
    yield put(fetchProductByIdSuccess(response.product))
  } catch (error) {
    yield put(fetchProductFailure())
  }
}

function* postAddProductSaga (action: IPostAddProduct) {
  try {
    yield call(AdminService.postAddProduct, action.product);
    yield put(fetchSuccess())
  } catch (error) {
    yield put(fetchFailure())
  }
}

function* productSaga() {
  yield all([
    takeEvery(ProductsActionTypesEnum.FETCH_PRODUCTS_START, getProductsSaga),
    takeEvery(ProductsActionTypesEnum.FETCH_PRODUCT_BY_ID, getProductByIdSaga),
    takeEvery(ActionTypesEnum.POST_ADD_PRODUCT, postAddProductSaga)
  ])
}

export {
  getProductsSaga,
  productSaga
}
