import React, {FC, useEffect} from "react";
import './Cart.css'
import CartTable from "../../components/CartTable/CartTable";
import {useDispatch, useSelector} from "react-redux";
import { getCart} from "../../store/Cart/actions/CartActionCreators";
import IAppStateInterface from "../../store/IAppState.inteface";

const Cart: FC = () => {

  const data = useSelector((state: IAppStateInterface) => state.cartState.data)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart())
    // eslint-disable-next-line
  }, []);

  return (
    <div className='table-wrapper'>
      <h2>Your Cart</h2>
      <CartTable productData={data.cartProducts}/>
      <div className='total'>
        <p>Total: <span>{data.totalPrice}</span>$</p>
        <button className='btn'>Order</button>
      </div>
    </div>
  )
}

export default Cart;
