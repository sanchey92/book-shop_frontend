import React, {FC} from "react";
import './BookListItem.css';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {deleteProductById} from "../../store/Admin/action/ActionCreators";

interface IProps {
  id: string,
  title: string
}

const BookListItem: FC<IProps> = ({id, title}) => {

  const dispatch = useDispatch();

  const clickDeleteHandler = () => {
    console.log(`deleted item ${id}`);
    dispatch(deleteProductById(id))
  }

  return (
    <div className='book-list-item'>
      <section className='title-section'>
        <h4>{title}</h4>
      </section>
      <section className="control-section">
        <button
          className='btn'
          onClick={clickDeleteHandler}
        >Delete</button>
        <Link to={'/admin/add-product/' + id} className='btn'>Edit product</Link>
      </section>
    </div>
  )
}

export default BookListItem;