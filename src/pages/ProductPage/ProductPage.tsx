import React, {FC, useEffect} from "react";
import {fetchProductsStart} from "../../store/Products/actions/ActionCreators";
import './ProductPage.css';
import ProductCard from "../../components/ProductCard/ProductCard";
import {useDispatch, useSelector} from 'react-redux'
import IAppStateInterface from "../../store/IAppState.inteface";
import Loader from "../../components/Loader/Loader";

const ProductPage: FC = () => {

  const dispatch = useDispatch();
  const data = useSelector((state: IAppStateInterface) => state.productState.data)
  const loading = useSelector((state: IAppStateInterface) => state.productState.isFetching)

  // @ts-ignore
  useEffect(() => {
    dispatch(fetchProductsStart())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ul className='product-page'>
      {
        loading
          ? <Loader/>
          : data.map(product => {
            const {id, title, imgUrl, price,} = product
            return (
              <li key={id}>
                <ProductCard
                  id={id}
                  title={title}
                  imgUrl={imgUrl}
                  price={price}
                />
              </li>
            )
          })
      }
    </ul>
  )
}

export default ProductPage;
