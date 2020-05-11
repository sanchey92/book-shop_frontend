import React, {FC, Fragment} from "react";
import CartTable from "../../components/CartTable/CartTable";
import {useSelector} from "react-redux";

import IAppStateInterface from "../../store/IAppState.inteface";
import './Cart.css'

const Cart: FC = () => {

  const data = useSelector((state: IAppStateInterface) => state.cartState.data)

  return (
    <div className='table-wrapper'>
      <h2>Your Cart</h2>
      {
        data.cartProducts.length > 0
          ? (
            <Fragment>
              <CartTable productData={data.cartProducts}/>
              <div className='total'>
                <p>Total: <span>{data.totalPrice}</span>$</p>
                <button className='btn'>Order</button>
              </div>
            </Fragment>
          )
          : <h3>Your Cart is empty</h3>
      }

    </div>
  )
}

export default Cart;
