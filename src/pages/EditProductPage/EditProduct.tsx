import React, {FC} from "react";
import ProductReduxForm from "../../components/ProductForm/ProductForm";
import {FormSubmitHandler, reset} from "redux-form";
import {useDispatch, useSelector} from "react-redux";
import {postAddProduct} from "../../store/Admin/action/ActionCreators";
import IAppStateInterface from "../../store/IAppState.inteface";
import { Redirect } from "react-router-dom";

const EditProductPage: FC = () => {
  const dispatch = useDispatch()

  const onSubmitHandler: FormSubmitHandler = (formData: any): void => {
    dispatch(postAddProduct(formData))
    dispatch(reset('Product'))
  }

  const isAuth = useSelector((state: IAppStateInterface) => state.adminState.isAuth)
  if (!isAuth) {
    return <Redirect to="/login"/>
  }

  return (
    <div className='container'>
      <ProductReduxForm onSubmit={onSubmitHandler}/>
    </div>
  )
}
export default EditProductPage;
