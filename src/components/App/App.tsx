import React, {FC, useEffect} from "react";
import {Switch, Route} from 'react-router-dom';
import Navigation from "../Navigation/Navigation";
import ProductPage from "../../pages/ProductPage/ProductPage";
import Cart from "../../pages/Cart/Cart";
import ProductDescription from "../ProductDescription/ProductDescription";
import EditProductPage from "../../pages/EditProductPage/EditProduct";
import BooksList from "../../pages/BooksList/BooksList";
import {useDispatch, useSelector} from "react-redux";
import {getCart} from "../../store/Cart/actions/CartActionCreators";
import OrdersPage from "../../pages/OrdersPage/OrdersPage";
import Login from "../Login/Login";
import {fetchProductsStart} from "../../store/Products/actions/ActionCreators";
import IAppStateInterface from "../../store/IAppState.inteface";

const App: FC = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsStart())
    dispatch(getCart());
    // eslint-disable-next-line
  }, [])

  const isAuth = useSelector((state: IAppStateInterface) => state.adminState.isAuth);

  const routes = [
    {link: '/', linkTitle: 'Books', exact: true},
    {link: '/cart', linkTitle: 'Cart', exact: false},
    {link: '/orders', linkTitle: 'Orders', exact: false},
  ]

  if (isAuth) {
    routes.push(
      {link: '/admin/add-product', linkTitle: 'Add product', exact: true},
      {link: '/admin/product-list', linkTitle: 'Books List', exact: false},
    )
  }

  return (
    <div>
      <Navigation routes={routes}/>
      <Switch>
        <Route path={'/'} exact component={ProductPage}/>
        <Route path={'/products/:prodId'} component={ProductDescription}/>
        <Route path={'/cart'} component={Cart}/>
        <Route path={'/orders'} component={OrdersPage}/>
        <Route path={'/login'} exact component={Login}/>
        <Route path={'/admin/product-list'} component={BooksList}/>
        <Route path={'/admin/add-product'} exact component={EditProductPage}/>
      </Switch>
    </div>
  )
};

export default App