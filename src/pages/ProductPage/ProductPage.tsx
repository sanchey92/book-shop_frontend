import React, {FC} from "react";
import ProductsGallery from "../../components/PriductsGallery/ProductsGallery";
import './ProductPage.css';
import Search from "../../components/Search/Search";

const ProductPage: FC = () => {

  return (
    <>
      <div className='cart-position'>
      </div>
      <div className='products-container'>
        <h1>Our Books Catalog</h1>
        <Search/>
        <ProductsGallery/>
      </div>
    </>
  )
}

export default ProductPage;
