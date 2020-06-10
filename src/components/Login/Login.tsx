import React, {ChangeEvent, FC, FormEvent, useState} from "react";
import './Login.css'
import {IAuthData} from "../../store/Services/AuthService/AuthService";

const Login: FC = () => {

  const formData: IAuthData = {email: '', password: ''}
  const [data, setData] = useState<IAuthData>(formData)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const {name, value} = event.currentTarget;
    setData({...data, [name]: value})
  }

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    setData(formData);
  }

  return (
    <div className='container'>
      <form className='auth-form' onSubmit={submitHandler}>
        <h4>Login</h4>
        <div className='form-control'>
          <label htmlFor="name">Your email</label>
          <input
            type='email'
            name='email'
            value={data.email}
            onChange={handleInputChange}
          />
        </div>
        <div className='form-control'>
          <label htmlFor="name">Your password</label>
          <input
            type='password'
            name='password'
            value={data.password}
            onChange={handleInputChange}
          />
        </div>
        <div className='form-buttons'>
          <button type="submit" className='btn'>Login</button>
          <button type="submit" className='btn'>Register</button>
        </div>
      </form>
    </div>
  )
}

export default Login
