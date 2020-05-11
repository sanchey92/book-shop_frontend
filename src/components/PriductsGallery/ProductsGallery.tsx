import React, {FC} from "react";
import './Productsgallery.css';
import Loader from "../Loader/Loader";
import ProductCard from "../ProductCard/ProductCard";
import {useSelector} from "react-redux";
import IAppStateInterface from "../../store/IAppState.inteface";

const ProductsGallery: FC = () => {

  const data = useSelector((state: IAppStateInterface) => state.productState.data)
  const loading = useSelector((state: IAppStateInterface) => state.productState.isFetching)

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

export default ProductsGallery;