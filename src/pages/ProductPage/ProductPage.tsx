import React, {FC, useEffect} from "react";

import {fetchProductsStart} from "../../store/Products/actions/ActionCreators";
import './ProductPage.css';
import ProductCard from "../../components/ProductCard/ProductCard";
import {connect} from 'react-redux'
import IAppStateInterface from "../../store/IAppState.inteface";
import IProductInterface from "../../store/Products/reducer/IProduct.interface";

interface IProductPageProps  {
  data: IProductInterface[],
  getProducts: () => void
}

const ProductPage: FC<IProductPageProps> = ({data, getProducts}) => {

  useEffect(() => {
    getProducts()
  }, [getProducts])

  return (
    <ul className='product-page'>
      {
        data.map(product => {
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

const mapStateToProps = (state: IAppStateInterface) => {
  const {data} = state.productState
  return {data}
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    getProducts: () => dispatch(fetchProductsStart())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
