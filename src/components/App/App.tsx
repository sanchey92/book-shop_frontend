import React, {FC} from "react";
import {Switch, Route} from 'react-router-dom';
import Navigation from "../Navigation/Navigation";
import HomePage from "../../pages/HomePage/HomePage";
import ProductPage from "../../pages/ProductPage/ProductPage";
import Cart from "../../pages/Cart/Cart";
import ProductDescription from "../ProductDescription/ProductDescription";

const App: FC = () => {
  return (
    <div className={'container'}>
      <Navigation/>
      <Switch>
        <Route path={'/'} exact component={HomePage} />
        <Route path={'/products'} exact component={ProductPage}/>
        <Route path={'/products/:prodId'} component={ProductDescription}/>
        <Route path={'/cart'} component={Cart}/>
      </Switch>
    </div>
  )
};

export default App
