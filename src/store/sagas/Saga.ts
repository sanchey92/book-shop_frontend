import {put, call, takeEvery, all} from 'redux-saga/effects';
import ShopService from "../Services/ShopService/ShopService";
import {fetchProductSuccess, fetchProductByIdSuccess, fetchProductFailure} from "../Products/actions/ActionCreators";
import ProductsActionTypesEnum from "../Products/actions/ProductsActionTypes.enum";
import {IFetchProductById} from "../Products/actions/InterfacesActionCreators";
import {IDeleteProduct, IPostAddProduct} from "../Admin/action/IActionCreators";
import AdminService from "../Services/AdminService/AdninService";
import {fetchFailure, fetchSuccess} from "../Admin/action/ActionCreators";
import ActionTypesEnum from "../Admin/action/ActionTypes.enum";
import CartService from "../Services/CartService/CartService";
import {cartFetchFailure, cartFetchSuccess} from "../Cart/actions/CartActionCreators";
import CartEnum from "../Cart/actions/CartEnum";
import {IAddToCart, IDeleteFromCart} from "../Cart/actions/CartInterfaces";
import OrdersActionsEnum from "../Orders/actions/OrdersActions.enum";
import OrderService from "../Services/OrderService/OrderService";
import {fetchOrderFailure, fetchOrderSuccess} from "../Orders/actions/OrderActionCreators";
import {IPostUserSignUp} from "../AuthUser/action/IActionCreators";
import { postUserSuccess} from "../AuthUser/action/ActionCreators";
import AuthService from "../Services/AuthService/AuthService";
import AuthEnum from "../AuthUser/action/Auth.Enum";


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
    const response =  yield call(AdminService.deleteProductById, action.id);
    const products = response.products;
    yield put(fetchProductSuccess(products))
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

function* postDeleteFromCart(action: IDeleteFromCart) {
  try {
    const response  = yield call(CartService.deleteFromCart, action.id);
    const data = response.cartProducts;
    yield put(cartFetchSuccess(data))
  } catch (error) {
    yield put(cartFetchFailure())
  }
}

function* getOrderSaga() {
  try {
    const response = yield call(OrderService.getOrders)
    const orders = response.orders
    yield put(fetchOrderSuccess(orders))
  } catch (e) {
    yield put(fetchOrderFailure())
  }
}

function* postOrderSaga() {
  try {
    const response =  yield call(OrderService.postOrder)
    const cart = response.cartProducts
    yield put(cartFetchSuccess(cart))
  } catch (e) {
    yield put(fetchOrderFailure())
  }
}

function* postSignUpSaga(action: IPostUserSignUp) {
  try {
    const response = yield call(AuthService.singUp, action.data)
    const message = response.message
    yield put(postUserSuccess(message))
  } catch (e) {
    console.log(e)
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
    takeEvery(CartEnum.DELETE_FROM_CART, postDeleteFromCart),
    takeEvery(OrdersActionsEnum.GET_ORDER_START, getOrderSaga),
    takeEvery(OrdersActionsEnum.POST_ORDERS_START, postOrderSaga),
    takeEvery(AuthEnum.POST_USER_SIGN_UP, postSignUpSaga)
  ])
}

export {
  getProductsSaga,
  productSaga
}
