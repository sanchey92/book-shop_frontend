import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from "./root/Root";
import configureStore from "./store/store";

const store = configureStore()

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
