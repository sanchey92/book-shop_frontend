import React, {FC, useEffect} from "react";
import './Bookslist.css'
import {useDispatch, useSelector} from "react-redux";
import IAppStateInterface from "../../store/IAppState.inteface";
import {fetchProductsStart} from "../../store/Products/actions/ActionCreators";
import BookListItem from "../../components/BookListItem/BookListItem";

const BooksList: FC = () => {

  const dispatch = useDispatch();
  const data = useSelector((state: IAppStateInterface) => state.productState.data);

  useEffect(() => {
    dispatch(fetchProductsStart());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchProductsStart])

  return (
    <div className='book-list-wrapper'>
      <ul className='book-list'>
        {
          data.map(el => {
            return (
              <li key={el.id}>
                <BookListItem id={el.id!} title={el.title}/>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default BooksList;
