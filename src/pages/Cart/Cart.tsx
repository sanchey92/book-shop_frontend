import React, {FC} from "react";
import './Cart.css'
import CartTable from "../../components/CartTable/CartTable";

const Cart: FC = () => {

  return (
    <div className='table-wrapper'>
      <h2>Your Cart</h2>
      <CartTable/>
      <div className='total'>
        <p>Total: <span>500</span>$</p>
        <button className='btn'>Order</button>
      </div>
    </div>
  )
}

export default Cart;
