import React, {FC} from "react";
import IProductInterface from "../../store/Products/reducer/IProduct.interface";
import {Link} from "react-router-dom";
import './ProductCard.css'
import {useDispatch} from "react-redux";
import {addToCart} from "../../store/Cart/actions/CartActionCreators";

const ProductCard: FC<IProductInterface> = ({_id, title, price, imgUrl}) => {

  const dispatch = useDispatch()

  const clickAddHandler = (_id: string) => {
    dispatch(addToCart(_id));
  }

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
        <Link to={'/products/' + _id} className='btn'>Description</Link>
        <button
          className='btn'
          onClick={() => clickAddHandler(_id!)}
        >
          Add to Cart
        </button>
      </section>
    </div>
  )
};

export default ProductCard
