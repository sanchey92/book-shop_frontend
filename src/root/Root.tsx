import React, {FC} from "react";
import {Store} from 'redux';
import {BrowserRouter} from 'react-router-dom'
import App from "../components/App/App";
import {Provider} from "react-redux";
import IAppStateInterface from "../store/IAppState.inteface";

interface IRoot {
  store: Store<IAppStateInterface>
}

const Root: FC<IRoot> = ({store}) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  )
}

export default Root;
