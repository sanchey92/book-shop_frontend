import React, {ChangeEvent, FC, FormEvent, useState} from "react";
import './Login.css'

const Login: FC = () => {
  const formData = {name: '', email: ''}
  const [data, setData] = useState(formData)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.currentTarget;
    setData({...data, [name]: value})
  }

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    console.log(data)
    setData(formData);
  }

  return (
    <div className='container'>
      <form className='auth-form' onSubmit={submitHandler}>
        <h4>Auth</h4>
        <div className='form-control'>
          <label htmlFor="name">Your name</label>
          <input
            type='text'
            name='name'
            value={data.name}
            onChange={handleInputChange}
          />
        </div>
        <div className='form-control'>
          <label htmlFor="name">Your email</label>
          <input
            type='text'
            name='email'
            value={data.email}
            onChange={handleInputChange}
          />
        </div>
        <div className='form-control'>
          <button type="submit" className='btn'>Enter</button>
        </div>
      </form>
    </div>
  )
}

export default Login
