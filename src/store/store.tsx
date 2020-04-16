import {createStore, combineReducers, Store, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {productsReducer} from "./Products/reducer/productsReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import IAppStateInterface from "./IAppState.inteface";
import {productSaga} from "./Products/sagas/Saga";

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({
  productState: productsReducer
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
