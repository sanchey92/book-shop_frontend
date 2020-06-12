import React, {ChangeEvent, FC, FormEvent, useState} from "react";
import './Login.css'
import AuthService, {IAuthData} from "../../store/Services/AuthService/AuthService";
import {useDispatch, useSelector} from "react-redux";
import {postUserSignUp} from "../../store/AuthUser/action/ActionCreators";
import IAppStateInterface from "../../store/IAppState.inteface";
import {Redirect} from "react-router-dom";

const Login: FC = () => {

  const formData: IAuthData = {email: '', password: ''}
  const [data, setData] = useState<IAuthData>(formData)
  const isAuth = useSelector((state: IAppStateInterface) => state.userState.isAuth)

  const dispatch = useDispatch();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const {name, value} = event.currentTarget;
    setData({...data, [name]: value})
  }

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    dispatch(postUserSignUp(data))
    setData(formData);
  }

  const clickLoginHandler = () => {
    AuthService.singIn(data).then((res) => console.log(res))
    setData(formData)
  }

  return (
    <>
      {
        isAuth
          ? <Redirect to='/'/>
          : (
            <div className='container'>
              <form className='auth-form' onSubmit={submitHandler}>
                <h4>Login</h4>
                <div className='form-control'>
                  <label htmlFor="name">Your email</label>
                  <input type='email' name='email' value={data.email} onChange={handleInputChange}/>
                </div>
                <div className='form-control'>
                  <label htmlFor="name">Your password</label>
                  <input type='password' name='password' value={data.password} onChange={handleInputChange}/>
                </div>
                <div className='form-buttons'>
                  <button type="button" className='btn' onClick={clickLoginHandler}>
                    Login
                  </button>
                  <button type="submit" className='btn'>
                    Register
                  </button>
                </div>
              </form>
            </div>
          )
      }
    </>
  )
}

export default Login
