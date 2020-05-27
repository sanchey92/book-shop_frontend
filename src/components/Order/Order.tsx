import React, {FC} from "react";
import './Order.css';

interface IOrderProps {
  id: string,
  products: any,
  totalPrice: number
}

const Order: FC<IOrderProps> = ({ id, products, totalPrice}) => {
  return (
    <div className='order-container'>
      <h3>Order №#<span>{id}</span></h3>
      <ul className='order-item'>
        {
          products.map((el: any) => {
            return (
              <li key={el._id}>
                <p>{el.product.title} (<span>{el.quantity}</span>)</p>
              </li>
            )
          })
        }
      </ul>
      <div className='price'>
        <p>Total: <span>{totalPrice}</span>$</p>
      </div>
    </div>
  )
}

export default Order
