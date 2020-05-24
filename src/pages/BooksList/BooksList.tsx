import React, {FC} from "react";
import BookListItem from "../../components/BookListItem/BookListItem";
import Loader from "../../components/Loader/Loader";
import {useSelector} from "react-redux";
import IAppStateInterface from "../../store/IAppState.inteface";
import './Bookslist.css'

const BooksList: FC = () => {

  const loading = useSelector((state: IAppStateInterface) => state.productState.isFetching);
  const data = useSelector((state: IAppStateInterface) => state.productState.data);

  return (
    <div className='book-list-wrapper'>
      <ul className='book-list'>
        {
          loading
            ? <Loader/>
            : data.map(el => {
              return (
                <li key={el._id}>
                  <BookListItem id={el._id!} title={el.title}/>
                </li>
              )
            })
        }
      </ul>
    </div>
  )
}

export default BooksList
