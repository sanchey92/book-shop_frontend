import React, {FC} from "react";
import {ICartItem} from "../../store/Cart/reducers/IDataState";
import {useDispatch} from "react-redux";
import {addToCart, deleteFromCart} from "../../store/Cart/actions/CartActionCreators";
import './CartTable.css';


interface IPropsCartTable {
  productData: ICartItem[]
}

const CartTable: FC<IPropsCartTable> = ({productData}) => {

  const dispatch = useDispatch()

  const clickAddHandler = (id: string) => {
    dispatch(addToCart(id))
  }

  const clickDeleteHandler = (id: string) => {
    dispatch(deleteFromCart(id))
  }

  return (

    <table>
      <thead>
      <tr>
        <th>icon</th>
        <th>Books name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      {
        productData.map(el => {
          return (
            <tr key={el.productId._id}>
              <td><img src={el.productId.imgUrl} alt={el.productId.title}/></td>
              <td>{el.productId.title}</td>
              <td>{el.productId.price}</td>
              <td>{el.quantity}</td>
              <td>
                <button
                  className='button delete'
                  onClick={() => clickDeleteHandler(el.productId._id!)}
                >-
                </button>
                <button
                  className='button add'
                  onClick={() => clickAddHandler(el.productId._id!)}
                >+
                </button>
              </td>
            </tr>
          )
        })
      }
      </tbody>
    </table>

  )
}

export default CartTable;