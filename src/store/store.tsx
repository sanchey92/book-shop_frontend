import {createStore, combineReducers, Store, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {productsReducer} from "./Products/reducer/productsReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import IAppStateInterface from "./IAppState.inteface";
import {productSaga} from "./sagas/Saga";
import {reducer as formReducer} from "redux-form";
import adminReducer from "./Admin/reducer/AdminReducer";
import cartReducer from "./Cart/reducers/CartReducer";
import orderReducer from "./Orders/reducers/orderReducer";
import UserReducer from "./AuthUser/reducer/UserReducer";

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({
  productState: productsReducer,
  form: formReducer,
  adminState: adminReducer,
  cartState: cartReducer,
  orderState: orderReducer,
  userState: UserReducer
})

export default function configureStore(): Store<IAppStateInterface, any> {
  const store = createStore(
    rootReducer,
    undefined,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  )
  sagaMiddleware.run(productSaga)
  return store
}
