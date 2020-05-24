import React, {FC} from "react";
import {useSelector} from "react-redux";
import IAppStateInterface from "../../store/IAppState.inteface";
import {Link} from "react-router-dom";
import './CartTotal.css';

const CartTotal: FC = () => {

  const total = useSelector((state: IAppStateInterface) => state.cartState.data.totalPrice!)

  return (
    <div className='total-wrapper'>
      <Link to={'/cart'}>
        <p>Cart: <span>{total}</span>$</p>
      </Link>
    </div>
  )
}
export default CartTotal