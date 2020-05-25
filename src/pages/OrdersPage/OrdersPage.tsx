import React, { FC } from "react";
import './OrdersPage.css'

const OrdersPage: FC = () => {

  return (
    <div className='orders'>
      <h2>Orders</h2>
      <div className='order-item'>
        <p>Order № <span>ksalksa 2134213940 </span></p>
        <p>Products name: <span>Learning book</span></p>
      </div>
    </div>
  )
}

export default OrdersPage;