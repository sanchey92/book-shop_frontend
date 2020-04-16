import React, {FC} from "react";
import IProductInterface from "../../store/Products/reducer/IProduct.interface";
import {Link} from "react-router-dom";
import './ProductCard.css'

const ProductCard: FC<IProductInterface> = ({id, title, price, imgUrl}) => {
  return (
    <div className='product-card'>
      <section className='product-card__title'>
        <h4>{title}</h4>
      </section>
      <section className='product-card__image'>
        <img src={imgUrl} alt={title}/>
      </section>
      <section className='product-card__price'>
        <p>Price:</p> <span>{price}$</span>
      </section>
      <section className='product-card__controls'>
        <Link to={'/products/' + id} className='btn'>Description</Link>
        <button className='btn'>Add to Cart</button>
      </section>
    </div>
  )
};

export default ProductCard
