import {put, call, takeEvery, all} from 'redux-saga/effects';
import ShopService from "../Services/ShopService/ShopService";
import {fetchProductSuccess, fetchProductByIdSuccess, fetchProductFailure} from "../Products/actions/ActionCreators";
import ProductsActionTypesEnum from "../Products/actions/ProductsActionTypes.enum";
import {IFetchProductById} from "../Products/actions/InterfacesActionCreators";
import {IDeleteProduct, IPostAddProduct} from "../Admin/action/IActionCreators";
import AdminService from "../Services/AdminService/AdninService";
import {deleteSuccess, fetchFailure, fetchSuccess} from "../Admin/action/ActionCreators";
import ActionTypesEnum from "../Admin/action/ActionTypes.enum";
import CartService from "../Services/CartService/CartService";
import {cartFetchFailure, cartFetchSuccess} from "../Cart/actions/CartActionCreators";
import CartEnum from "../Cart/actions/CartEnum";
import {IAddToCart, IDeleteFromCart} from "../Cart/actions/CartInterfaces";

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

function* postAddProductSaga(action: IPostAddProduct) {
  try {
    yield call(AdminService.postAddProduct, action.product);
    yield put(fetchSuccess())
  } catch (error) {
    yield put(fetchFailure())
  }
}

function* deleteProductById(action: IDeleteProduct) {
  try {
    yield call(AdminService.deleteProductById, action.id)
    yield call(getProductsSaga)
    yield put(deleteSuccess())
  } catch {
    yield put(fetchFailure())
  }
}

function* getCartSaga() {
  try {
    const response = yield call(CartService.getCart);
    const data = response.cartProducts;
    yield put(cartFetchSuccess(data))
  } catch (error) {
    yield put(cartFetchFailure())
  }
}

function* postAddToCart(action: IAddToCart) {
  try {
    const response = yield call(CartService.addToCart, action.id);
    const data = response.cartProducts;
    yield put(cartFetchSuccess(data))
  } catch (error) {
    yield put(cartFetchFailure())
  }
}


function* productSaga() {
  yield all([
    takeEvery(ProductsActionTypesEnum.FETCH_PRODUCTS_START, getProductsSaga),
    takeEvery(ProductsActionTypesEnum.FETCH_PRODUCT_BY_ID, getProductByIdSaga),
    takeEvery(ActionTypesEnum.POST_ADD_PRODUCT, postAddProductSaga),
    takeEvery(ActionTypesEnum.DELETE_PRODUCT_BY_ID, deleteProductById),
    takeEvery(CartEnum.GET_CART, getCartSaga),
    takeEvery(CartEnum.ADD_TO_CART, postAddToCart),
  ])
}

export {
  getProductsSaga,
  productSaga
}
