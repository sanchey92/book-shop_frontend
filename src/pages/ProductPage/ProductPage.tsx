import React, {FC} from "react";
import ProductsGallery from "../../components/PriductsGallery/ProductsGallery";
import CartTotal from "../../components/CartTotal/CartTotal";
import './ProductPage.css';

const ProductPage: FC = () => {

  return (
    <>
      <div className='cart-position'>
        <CartTotal/>
      </div>
      <div className='products-container'>
        <h1>Our Books Catalog</h1>

        <ProductsGallery/>
      </div>
    </>
  )
}

export default ProductPage;
