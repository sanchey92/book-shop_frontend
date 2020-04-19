import React, {FC} from "react";
import {Switch, Route} from 'react-router-dom';
import Navigation from "../Navigation/Navigation";
import HomePage from "../../pages/HomePage/HomePage";
import ProductPage from "../../pages/ProductPage/ProductPage";
import Cart from "../../pages/Cart/Cart";
import ProductDescription from "../ProductDescription/ProductDescription";
import AdminPage from "../../pages/AdminPage/AdminPage";
import EditProductPage from "../../pages/EditProductPage/EditProduct";

const App: FC = () => {

  const routes = [
    {link: '/', linkTitle: 'Home', exact: true},
    {link: '/products', linkTitle: 'Books', exact: false},
  ]

  return (
    <div>
      <Navigation routes={routes}/>
      <Switch>
        <Route path={'/'} exact component={HomePage} />
        <Route path={'/products'} exact component={ProductPage}/>
        <Route path={'/products/:prodId'} component={ProductDescription}/>
        <Route path={'/cart'} component={Cart}/>
        <Route path={'/admin'} exact component={AdminPage}/>
        <Route path={'/admin/add-product'} exact component={EditProductPage}/>
      </Switch>
    </div>
  )
};

export default App
