import React, {FC, Fragment} from "react";
import CartTable from "../../components/CartTable/CartTable";
import {useDispatch, useSelector} from "react-redux";

import IAppStateInterface from "../../store/IAppState.inteface";
import './Cart.css'
import {postOrdersStart} from "../../store/Orders/actions/OrderActionCreators";

const Cart: FC = () => {

  const data = useSelector((state: IAppStateInterface) => state.cartState.data);
  const dispatch = useDispatch()

  const postOrderHandler = () => {
    dispatch(postOrdersStart())
  }
  return (
    <div className='table-wrapper'>
      <h2>Your Cart</h2>
      {
        data.items.length > 0
          ? (
            <Fragment>
              <CartTable productData={data.items}/>
              <div className='total'>
                <p>Total: <span>{data.totalPrice}</span>$</p>
                <button
                  className='btn'
                  onClick={postOrderHandler}
                >
                  Order
                </button>
              </div>
            </Fragment>
          )
          : <h3>Your Cart is empty</h3>
      }

    </div>
  )
}

export default Cart;
