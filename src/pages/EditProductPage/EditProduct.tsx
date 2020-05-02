import React, {FC} from "react";
import ProductReduxForm from "../../components/ProductForm/ProductForm";
import {FormSubmitHandler, reset} from "redux-form";
import {useDispatch} from "react-redux";
import {postAddProduct} from "../../store/Admin/action/ActionCreators";

const EditProductPage: FC = () => {
  const dispatch = useDispatch()

  const onSubmitHandler: FormSubmitHandler = (formData: any): void => {
    dispatch(postAddProduct(formData))
    dispatch(reset('Product'));
  }
  return (
    <div className='container'>
      <ProductReduxForm onSubmit={onSubmitHandler}/>
    </div>
  )
}
export default EditProductPage;
