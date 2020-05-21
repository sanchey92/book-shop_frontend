import React, {FC, useEffect} from "react";
import './Productsgallery.css';
import Loader from "../Loader/Loader";
import ProductCard from "../ProductCard/ProductCard";
import {useDispatch, useSelector} from "react-redux";
import IAppStateInterface from "../../store/IAppState.inteface";
import {fetchProductsStart} from "../../store/Products/actions/ActionCreators";

const ProductsGallery: FC = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProductsStart());
    // eslint-disable-next-line
  }, []);

  const data = useSelector((state: IAppStateInterface) => state.productState.data);
  const loading = useSelector((state: IAppStateInterface) => state.productState.isFetching);
  const search = useSelector((state: IAppStateInterface) => state.productState.searchProduct);

  const dataGallery = search ? search : data

  return (
    <ul className='product-page'>
      {
        loading
          ? <Loader/>
          : dataGallery.map(product => {
            const {_id, title, imgUrl, price,} = product
            return (
              <li key={_id}>
                <ProductCard
                  _id={_id}
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