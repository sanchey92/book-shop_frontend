import React, {FC, useEffect} from "react";
import './Bookslist.css'
import {connect} from "react-redux";
import IAppStateInterface from "../../store/IAppState.inteface";
import {fetchProductsStart} from "../../store/Products/actions/ActionCreators";
import BookListItem from "../../components/BookListItem/BookListItem";
import Loader from "../../components/Loader/Loader";
import IProductInterface from "../../store/Products/reducer/IProduct.interface";

type IProps = {
  data: IProductInterface[],
  loading: boolean,
  fetchProducts: () => void
}

const BooksList: FC<IProps> = ({data, fetchProducts, loading}) => {

  useEffect(() => {
    fetchProducts()
    return () => fetchProducts()
    // eslint-disable-next-line
  }, [])

  return (
    <div className='book-list-wrapper'>
      <ul className='book-list'>
        {
          loading
            ? <Loader/>
            : data.map(el => {
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

const mapStateToProps = (state: IAppStateInterface) => {
  return {
    data: state.productState.data,
    loading: state.productState.isFetching
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchProducts: () => dispatch(fetchProductsStart())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
