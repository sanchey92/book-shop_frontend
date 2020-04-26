import React, {FC} from "react";
import {Switch, Route} from 'react-router-dom';
import Navigation from "../Navigation/Navigation";
import HomePage from "../../pages/HomePage/HomePage";
import ProductPage from "../../pages/ProductPage/ProductPage";
import Cart from "../../pages/Cart/Cart";
import ProductDescription from "../ProductDescription/ProductDescription";
import AdminPage from "../../pages/AdminPage/AdminPage";
import EditProductPage from "../../pages/EditProductPage/EditProduct";
import BooksList from "../../pages/BooksList/BooksList";

const App: FC = () => {

  const routes = [
    {link: '/', linkTitle: 'Home', exact: true},
    {link: '/products', linkTitle: 'Books', exact: false},
    {link: '/cart', linkTitle: 'Cart', exact: false},
    {link: '/Admin/add-product', linkTitle: 'Add product', exact: true},
    {link: '/Admin/product-list', linkTitle: 'Books List', exact: false},
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
        <Route path={'/admin/product-list'} component={BooksList}/>
        <Route path={'/admin/add-product'} exact component={EditProductPage}/>
        <Route path={'/admin/add-product/:prodId'} exact component={EditProductPage}/>
      </Switch>
    </div>
  )
};

export default App
