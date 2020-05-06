import React, {FC} from "react";
import './CartTable.css';
import CartService from "../../store/Services/CartService/CartService";

const CartTable: FC = () => {

  const clickAddHandler = async () => {
    const cart =  await CartService.getCart();
    console.log(cart)
  }

  const clickDeleteHandler = () => {
    console.log('delete handler')
  }

  return (
    <table>
      <thead>
      <tr>
        <th>Books name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>good book ;dslk;sd as;gag s;jdgsdg</td>
        <td>25</td>
        <td>2</td>
        <td>
          <button
            className='button delete'
            onClick={clickDeleteHandler}
          >-
          </button>
          <button
            className='button add'
            onClick={clickAddHandler}
          >+
          </button>
        </td>
      </tr>

      </tbody>
    </table>
  )
}

export default CartTable;