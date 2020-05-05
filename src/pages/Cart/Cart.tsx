import React, {FC} from "react";
import './Cart.css'

const Cart: FC = () => {
  return (
    <div className='table-wrapper'>

        <h2>Your Cart</h2>

         <table>
           <thead>
           <tr>
             <th>Books name</th>
             <th>Quantity</th>
             <th>Actions</th>
           </tr>
           </thead>
           <tbody>
           <tr>
             <td>good book ;dslk;sd as;gag s;jdgsdg</td>
             <td>2</td>
             <td>
               <button className='button delete'>-</button>
               <button className='button add'>+</button>
             </td>
           </tr>
           <tr>
             <td>good book ;dslk;sd as;gag s;jdgsdg</td>
             <td>2</td>
             <td>
               <button className='button delete'>-</button>
               <button className='button add'>+</button>
             </td>
           </tr>
           <tr>
             <td>good book ;dslk;sd as;gag s;jdgsdg</td>
             <td>2</td>
             <td>
               <button className='button delete'>-</button>
               <button className='button add'>+</button>
             </td>
           </tr>
           <tr>
             <td>good book ;dslk;sd as;gag s;jdgsdg</td>
             <td>2</td>
             <td>
               <button className='button delete'>-</button>
               <button className='button add'>+</button>
             </td>
           </tr>
           </tbody>
         </table>
       </div>
  )
}

export default Cart;
