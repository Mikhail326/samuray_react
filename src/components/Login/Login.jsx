import React from 'react'
import { Navigate } from 'react-router-dom'
import { LoginReduxForm } from './LoginForm'

export const Login = ({ login, isAuth }) => {

  const onSubmit = (formData) => {
    login(formData.login, formData.password, formData.rememberMe)
  }

  if (isAuth) {
    return <Navigate to='/profile'/>
  }

  return (
    <>
      <h2>Login</h2>
      <LoginReduxForm onSubmit={onSubmit} />
    </>
  )
}