import React, {FC} from "react";
import './BookListItem.css';
import {useDispatch} from "react-redux";
import {deleteProductById} from "../../store/Admin/action/ActionCreators";

interface IProps {
  id: string,
  title: string
}

const BookListItem: FC<IProps> = ({id, title}) => {

  const dispatch = useDispatch();

  const clickDeleteHandler = () => {
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
      </section>
    </div>
  )
}

export default BookListItem;