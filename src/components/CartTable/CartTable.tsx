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
    <div className='table-wrapper'>
      {
        !productData
          ? <h1>Your Cart is Empty :-(((</h1>
          : (
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
                    <tr key={el.productData.id}>
                      <td><img src={el.productData.imgUrl} alt={el.productData.title}/></td>
                      <td>{el.productData.title}</td>
                      <td>{el.productData.price}</td>
                      <td>{el.quantity}</td>
                      <td>
                        <button
                          className='button delete'
                          onClick={() => clickDeleteHandler(el.productData.id!)}
                        >-
                        </button>
                        <button
                          className='button add'
                          onClick={() => clickAddHandler(el.productData.id!)}
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
    </div>
  )
}

export default CartTable;