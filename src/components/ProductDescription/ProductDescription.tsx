import React, {FC, useEffect} from "react";
import {RouteComponentProps} from "react-router";
import IAppStateInterface from "../../store/IAppState.inteface";
import {fetchProductById} from "../../store/Products/actions/ActionCreators";
import {connect} from "react-redux";
import {IStateInterface} from "../../store/Products/reducer/IState.interface";
import './ProductDescription.css'
import {addToCart} from "../../store/Cart/actions/CartActionCreators";
import CartTotal from "../CartTotal/CartTotal";

export interface matchParams {
  prodId: string,
}

interface IProps extends RouteComponentProps<matchParams> {
  stateProduct: IStateInterface,
  fetchById: Function,
  addToCart: Function
}

const ProductDescription: FC<IProps> = ({match, stateProduct, fetchById, addToCart}) => {

  const idx = match.params.prodId;

  useEffect(() => {
    fetchById(idx);
    return () => fetchById();
    // eslint-disable-next-line
  }, [idx]);

  const addClickHandler = (id: string) => {
    addToCart(id)
  }

  return (
    <>
      <div className='cart-position'>
        <CartTotal/>
      </div>
      <div className='product-description'>
        <div className="product-description__card">
          <section className="img_section">
            <img src={stateProduct.product?.imgUrl!} alt={stateProduct.product?.title}/>
          </section>
          <section className="description_section">
            <p>Title: </p><span>{stateProduct.product?.title}</span>
            <p>Price: </p><span>{stateProduct.product?.price}</span>
            <p>Description:</p><span>{stateProduct.product?.description}</span>
            <div className='button-cart'>
              <button
                onClick={() => addClickHandler(stateProduct.product?.id!)}
              >
                Add To Cart
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state: IAppStateInterface) => {
  const stateProduct = state.productState
  return {stateProduct}
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchById: (id: string) => dispatch(fetchProductById(id)),
    addToCart: (id: string) => dispatch(addToCart(id))
  }
}

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(ProductDescription);
