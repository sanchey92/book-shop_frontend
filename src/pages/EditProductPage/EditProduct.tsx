import React, {FC} from "react";
import ProductReduxForm from "../../components/ProductForm/ProductForm";
import {FormSubmitHandler, reset} from "redux-form";
import {useDispatch} from "react-redux";
import AdminService from "../../store/Services/AdminService/AdninService";

const EditProductPage: FC = () => {
  const dispatch = useDispatch()

  const onSubmitHandler: FormSubmitHandler = (formData: any): void => {
    console.log(formData);
    const adminService = new AdminService()
    adminService.postAddProduct(formData)
    dispatch(reset('Product'));
  }
  return (
    <div className='container'>
      <ProductReduxForm onSubmit={onSubmitHandler}/>
    </div>
  )
}
export default EditProductPage
