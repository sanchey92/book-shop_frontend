import React, {FC, useEffect} from "react";
import {RouteComponentProps} from "react-router";
import IAppStateInterface from "../../store/IAppState.inteface";
import {fetchProductById} from "../../store/Products/actions/ActionCreators";
import {connect} from "react-redux";
import {IStateInterface} from "../../store/Products/reducer/IState.interface";
import './ProductDescription.css'

interface matchParams {
  prodId: string,
}

interface IProps extends RouteComponentProps<matchParams> {
  stateProduct: IStateInterface,
  fetchById: Function
}

const ProductDescription: FC<IProps> = ({match, stateProduct, fetchById}) => {

  const idx = match.params.prodId;

  useEffect(() => {
    fetchById(idx);
    return () => fetchById();
    // eslint-disable-next-line
  }, [idx])

  return (
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
            <button>Add To Cart</button>
          </div>
        </section>
      </div>
    </div>
  )
}

const mapStateToProps = (state: IAppStateInterface) => {
  const stateProduct = state.productState
  return {stateProduct}
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchById: (id: string) => dispatch(fetchProductById(id))
  }
}

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(ProductDescription);
