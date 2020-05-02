import React, {FC} from "react";
import './ProductForm.css';
import {reduxForm, Field, SubmitHandler} from "redux-form";
import Validator from "../../utils/validators";
import Input from "../UI/Input/Input";
import Textarea from "../UI/Textarea/Textarea";

interface IProductForm {
  handleSubmit: SubmitHandler,
}

const validator = new Validator();
const minLength = validator.minLengthCreator(6)

const ProductForm: FC<IProductForm> = ({handleSubmit,}) => {

  return (
    <form
      className='product-form'
      onSubmit={handleSubmit}
    >
      <div className='product-wrapper'>
        <div className='form-control-block'>
          <label htmlFor="title">Book's Title</label>
          <Field
            component={Input}
            name='title'
            validate={[validator.requiredField, minLength]}
          />
        </div>
        <div className='form-control-block'>
          <label htmlFor="imgURL">Image URL</label>
          <Field
            component={Input}
            name='imgUrl'
            validate={[validator.requiredField, minLength]}
          />
        </div>
        <div className='form-control-block'>
          <label htmlFor="price">Price</label>
          <Field
            component={Input}
            type='number'
            name='price'
            validate={[validator.requiredField]}
          />
        </div>
        <div className='form-control-block'>
          <label htmlFor="description">Description</label>
          <Field
            component={Textarea}
            name='description'
            validate={[validator.requiredField, minLength]}
          />
        </div>
        <div className='form-control-block'>
          <button type="submit">Add Book</button>
        </div>
      </div>
    </form>
  )
}

const ProductReduxForm = reduxForm({form: 'Product'})(ProductForm)
export default ProductReduxForm
