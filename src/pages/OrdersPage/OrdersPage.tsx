import React, {FC, useEffect} from "react";
import './OrdersPage.css'
import Order from "../../components/Order/Order";
import {useDispatch, useSelector} from "react-redux";
import {getOrderStart} from "../../store/Orders/actions/OrderActionCreators";
import IAppStateInterface from "../../store/IAppState.inteface";

const OrdersPage: FC = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getOrderStart())
  }, []);

  const orderState = useSelector((state: IAppStateInterface) => state.orderState);
  const orders = orderState.orders

  return (
    <div className='orders'>
      <h2>Orders</h2>
      {
        orders.map((el) => {
          const {totalPrice, _id, products} = el
          return (
            <Order
              key={el.user.userId}
              id={_id}
              products={products}
              totalPrice={totalPrice}
            />
          )
        })
      }
    </div>
  )
}

export default OrdersPage;