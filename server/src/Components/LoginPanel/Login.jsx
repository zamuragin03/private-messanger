import React, { useContext, useState, useEffect } from 'react'
import InputDataField from '../../UI/InputDataField/InputDataField'
import cl from './Login.module.css'
import ApplyButton from '../../UI/Buttons/ApplyButton/ApplyButton'
import AuthContext from '../../Context/AuthContext'
import { useParams, Link, useNavigate } from 'react-router-dom';


export const Login = () => {
  const [Form, setForm] = useState({ 'username': '', 'password': '' });
  let { error,user,loginUser, isAuthorized } = useContext(AuthContext)
  let navigate =useNavigate()
  useEffect(() => {
    if(isAuthorized){
      navigate('/main')
    }
    else{
    }
  }, [isAuthorized, error]);

  return (
    <div className='login-form'>
      <h2 className={cl.Title} >Пожалуйста авторизуйтесь</h2>
       {error? <h1 className={cl.error} >{error}</h1>:''}
      <InputDataField onChange={e => setForm({ ...Form, 'username': e.target.value })} cls={cl.LoginInput} type='text' placeholder='login' />
      <InputDataField onChange={e => setForm({ ...Form, 'password': e.target.value })} cls={cl.RegisterInput} type='password' placeholder='password' />
      <ApplyButton onClick={() =>loginUser(Form.username, Form.password)} >Login</ApplyButton>
    </div>
  )
}
export default Login

